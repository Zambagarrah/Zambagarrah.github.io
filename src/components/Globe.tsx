import { useEffect, useRef } from 'react'

// Rough simplified continent outlines (lon, lat) used only to seed a stylised
// dot cloud on the sphere - not intended as precise geographic data.
const continents: [number, number][][] = [
  [[-17, 15], [10, 37], [35, 32], [50, 12], [40, -5], [35, -25], [20, -35], [12, -5], [-10, 5], [-17, 15]], // Africa
  [[-10, 36], [0, 45], [-5, 55], [5, 60], [20, 60], [30, 55], [40, 45], [30, 40], [15, 38], [-10, 36]], // Europe
  [[40, 45], [60, 55], [90, 70], [140, 70], [145, 45], [130, 30], [100, 10], [75, 8], [60, 25], [45, 30], [40, 45]], // Asia
  [[-165, 65], [-140, 70], [-100, 72], [-70, 60], [-55, 45], [-65, 25], [-80, 20], [-100, 18], [-115, 25], [-125, 40], [-135, 55], [-165, 65]], // North America
  [[-80, 10], [-60, 10], [-35, 0], [-40, -20], [-55, -35], [-70, -55], [-75, -40], [-80, -10], [-80, 10]], // South America
  [[113, -22], [125, -15], [135, -12], [145, -15], [153, -28], [150, -38], [135, -38], [120, -35], [113, -22]], // Australia
]

function isPointInPolygon(lon: number, lat: number, polygon: [number, number][]) {
  let inside = false
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i]
    const [xj, yj] = polygon[j]
    const intersect = yi > lat !== yj > lat && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi
    if (intersect) inside = !inside
  }
  return inside
}

const isLand = (lon: number, lat: number) => continents.some((poly) => isPointInPolygon(lon, lat, poly))

type LandPoint = { x: number; y: number; z: number }

function buildLandPoints() {
  const DEG = Math.PI / 180
  const points: LandPoint[] = []
  for (let lat = -85; lat <= 85; lat += 3.5) {
    for (let lon = -180; lon <= 180; lon += 3.5) {
      if (isLand(lon, lat)) {
        points.push({
          x: Math.cos(lat * DEG) * Math.sin(lon * DEG),
          y: Math.sin(lat * DEG),
          z: Math.cos(lat * DEG) * Math.cos(lon * DEG),
        })
      }
    }
  }
  return points
}

function buildGridLines() {
  const latLines: number[][] = []
  for (let lat = -60; lat <= 60; lat += 30) {
    const line: number[] = []
    for (let lon = -180; lon <= 180; lon += 6) line.push(lon, lat)
    latLines.push(line)
  }
  const lonLines: number[][] = []
  for (let lon = -180; lon < 180; lon += 30) {
    const line: number[] = []
    for (let lat = -90; lat <= 90; lat += 6) line.push(lon, lat)
    lonLines.push(line)
  }
  return { latLines, lonLines }
}

export default function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const landPoints = buildLandPoints()
    const { latLines, lonLines } = buildGridLines()
    const DEG = Math.PI / 180
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let radius = 0
    let cx = 0
    let cy = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      radius = Math.min(width, height) / 2 - 4
      cx = width / 2
      cy = height / 2
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const project = (lon: number, lat: number, rotDeg: number) => {
      const lonRad = (lon + rotDeg) * DEG
      const latRad = lat * DEG
      return {
        x: Math.cos(latRad) * Math.sin(lonRad),
        y: Math.sin(latRad),
        z: Math.cos(latRad) * Math.cos(lonRad),
      }
    }

    let rotation = 0
    let raf = 0

    const draw = () => {
      if (width && height) {
        ctx.clearRect(0, 0, width, height)

        ctx.beginPath()
        ctx.arc(cx, cy, radius, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(52, 211, 153, 0.28)'
        ctx.lineWidth = 1
        ctx.stroke()

        ctx.strokeStyle = 'rgba(52, 211, 153, 0.14)'
        ctx.lineWidth = 1
        for (const line of [...latLines, ...lonLines]) {
          ctx.beginPath()
          let started = false
          for (let i = 0; i < line.length; i += 2) {
            const { x, y, z } = project(line[i], line[i + 1], rotation)
            if (z < -0.05) {
              started = false
              continue
            }
            const sx = cx + x * radius
            const sy = cy - y * radius
            if (!started) {
              ctx.moveTo(sx, sy)
              started = true
            } else {
              ctx.lineTo(sx, sy)
            }
          }
          ctx.stroke()
        }

        const rotRad = rotation * DEG
        const cos = Math.cos(rotRad)
        const sin = Math.sin(rotRad)
        for (const pt of landPoints) {
          const x = pt.x * cos + pt.z * sin
          const z = -pt.x * sin + pt.z * cos
          const y = pt.y
          if (z < -0.15) continue
          const sx = cx + x * radius
          const sy = cy - y * radius
          const depthOpacity = Math.max(0.15, Math.min(1, (z + 0.3) / 1.3))
          ctx.beginPath()
          ctx.arc(sx, sy, z > 0.5 ? 1.6 : 1.1, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(110, 231, 183, ${depthOpacity})`
          ctx.fill()
        }
      }

      if (!prefersReducedMotion) rotation += 0.1
      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className={className} style={{ width: '100%', height: '100%', display: 'block' }} aria-hidden="true" />
}
