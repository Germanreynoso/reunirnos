"use client"

import { useState } from "react"
import { Layers, ZoomIn, ZoomOut, Maximize2, MapPin, Thermometer, Wind, Droplets } from "lucide-react"
import { cn } from "@/lib/utils"

const mapLayers = [
  { id: "density", label: "Densidad Urbana", active: true, color: "emerald" },
  { id: "mobility", label: "Flujo de Movilidad", active: true, color: "cyan" },
  { id: "pollution", label: "Contaminación", active: false, color: "amber" },
  { id: "green", label: "Áreas Verdes", active: true, color: "green" },
]

const mapIndicators = [
  { icon: Thermometer, label: "Temp.", value: "28°C", color: "text-amber-400" },
  { icon: Wind, label: "AQI", value: "42", color: "text-emerald-400" },
  { icon: Droplets, label: "Humedad", value: "65%", color: "text-cyan-400" },
]

const hotspots = [
  { id: 1, x: 35, y: 30, label: "Centro Histórico", type: "high-density", pulse: true },
  { id: 2, x: 55, y: 45, label: "Terminal Buses", type: "mobility-hub", pulse: true },
  { id: 3, x: 25, y: 60, label: "Zona Industrial", type: "pollution", pulse: false },
  { id: 4, x: 70, y: 35, label: "Parque 9 de Julio", type: "green-area", pulse: false },
  { id: 5, x: 45, y: 70, label: "Av. Mate de Luna", type: "mobility-hub", pulse: true },
]

export function UrbanMap() {
  const [layers, setLayers] = useState(mapLayers)
  const [zoom, setZoom] = useState(1)
  const [hoveredSpot, setHoveredSpot] = useState<number | null>(null)

  const toggleLayer = (id: string) => {
    setLayers(layers.map(l => l.id === id ? { ...l, active: !l.active } : l))
  }

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div>
          <h3 className="text-sm font-semibold text-foreground">Mapa Urbano Inteligente</h3>
          <p className="text-xs text-muted-foreground">San Miguel de Tucumán • Vista en tiempo real</p>
        </div>
        <div className="flex items-center gap-1">
          <button 
            onClick={() => setZoom(Math.min(zoom + 0.2, 2))}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
          <button 
            onClick={() => setZoom(Math.max(zoom - 0.2, 0.6))}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <ZoomOut className="h-4 w-4" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Map Area */}
      <div className="relative h-[400px] bg-[#0a1628] overflow-hidden">
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 transition-transform duration-300"
          style={{ transform: `scale(${zoom})` }}
        >
          {/* Background grid pattern */}
          <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(34, 211, 238, 0.1)" strokeWidth="0.5"/>
              </pattern>
              <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(16, 185, 129, 0.4)" />
                <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
              </radialGradient>
              <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(34, 211, 238, 0.4)" />
                <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
              </radialGradient>
              <radialGradient id="glow3" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(245, 158, 11, 0.3)" />
                <stop offset="100%" stopColor="rgba(245, 158, 11, 0)" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Urban zones - stylized representation */}
            <ellipse cx="35%" cy="35%" rx="15%" ry="12%" fill="url(#glow1)" opacity="0.6" />
            <ellipse cx="55%" cy="50%" rx="18%" ry="15%" fill="url(#glow2)" opacity="0.5" />
            <ellipse cx="25%" cy="65%" rx="12%" ry="10%" fill="url(#glow3)" opacity="0.4" />
            <ellipse cx="70%" cy="40%" rx="10%" ry="12%" fill="url(#glow1)" opacity="0.7" />
            
            {/* Roads - main arteries */}
            <path d="M 10% 50% Q 30% 45% 50% 50% T 90% 55%" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="3" fill="none" />
            <path d="M 50% 10% Q 45% 30% 50% 50% T 55% 90%" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="3" fill="none" />
            <path d="M 20% 20% Q 40% 35% 60% 45% T 85% 75%" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="2" fill="none" />
            <path d="M 15% 70% Q 35% 60% 55% 55% T 80% 35%" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="2" fill="none" />
          </svg>

          {/* Hotspots */}
          {hotspots.map((spot) => (
            <div
              key={spot.id}
              className="absolute cursor-pointer group"
              style={{ left: `${spot.x}%`, top: `${spot.y}%`, transform: 'translate(-50%, -50%)' }}
              onMouseEnter={() => setHoveredSpot(spot.id)}
              onMouseLeave={() => setHoveredSpot(null)}
            >
              {/* Pulse effect */}
              {spot.pulse && (
                <div className={cn(
                  "absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full animate-ping",
                  spot.type === "high-density" && "bg-emerald-500/30",
                  spot.type === "mobility-hub" && "bg-cyan-500/30",
                  spot.type === "pollution" && "bg-amber-500/30",
                  spot.type === "green-area" && "bg-green-500/30"
                )} />
              )}
              
              {/* Marker */}
              <div className={cn(
                "relative flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all group-hover:scale-125",
                spot.type === "high-density" && "bg-emerald-500/20 border-emerald-500 text-emerald-400",
                spot.type === "mobility-hub" && "bg-cyan-500/20 border-cyan-500 text-cyan-400",
                spot.type === "pollution" && "bg-amber-500/20 border-amber-500 text-amber-400",
                spot.type === "green-area" && "bg-green-500/20 border-green-500 text-green-400"
              )}>
                <MapPin className="h-3 w-3" />
              </div>

              {/* Tooltip */}
              {hoveredSpot === spot.id && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap rounded-lg bg-card border border-border px-3 py-1.5 text-xs font-medium text-foreground shadow-xl z-10">
                  {spot.label}
                  <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-card" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Real-time indicators overlay */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {mapIndicators.map((ind) => (
            <div key={ind.label} className="flex items-center gap-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border px-3 py-1.5">
              <ind.icon className={cn("h-3.5 w-3.5", ind.color)} />
              <span className="text-[10px] text-muted-foreground">{ind.label}</span>
              <span className={cn("text-xs font-semibold", ind.color)}>{ind.value}</span>
            </div>
          ))}
        </div>

        {/* Layer controls */}
        <div className="absolute bottom-4 left-4 flex flex-col gap-2 rounded-xl bg-card/90 backdrop-blur-sm border border-border p-3">
          <div className="flex items-center gap-2 text-xs font-medium text-foreground mb-1">
            <Layers className="h-3.5 w-3.5 text-primary" />
            Capas
          </div>
          {layers.map((layer) => (
            <button
              key={layer.id}
              onClick={() => toggleLayer(layer.id)}
              className={cn(
                "flex items-center gap-2 rounded-lg px-2 py-1 text-[10px] transition-all",
                layer.active 
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <div className={cn(
                "h-2 w-2 rounded-full",
                layer.active ? "bg-primary" : "bg-muted"
              )} />
              {layer.label}
            </button>
          ))}
        </div>

        {/* Scale indicator */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border px-3 py-1.5">
          <div className="h-0.5 w-12 bg-foreground/50" />
          <span className="text-[10px] text-muted-foreground">500m</span>
        </div>
      </div>
    </div>
  )
}
