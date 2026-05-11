"use client"

import { Brain, Activity, MapPinned, CloudSun, Sparkles, ArrowRight, RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"

const aiModules = [
  {
    id: "impact",
    icon: Brain,
    title: "Predicción de Impacto Urbano",
    status: "Procesando",
    statusColor: "emerald",
    result: "Alto impacto positivo proyectado en zona centro-oeste. Reducción estimada de 18% en tiempos de traslado.",
    confidence: 94,
    lastUpdate: "Hace 12 min",
  },
  {
    id: "mobility",
    icon: Activity,
    title: "Análisis Automático de Movilidad",
    status: "Actualizado",
    statusColor: "cyan",
    result: "Flujo vehicular optimizado en corredores principales. Detección de 3 puntos de congestión recurrente.",
    confidence: 87,
    lastUpdate: "Hace 5 min",
  },
  {
    id: "critical",
    icon: MapPinned,
    title: "Detección de Zonas Críticas",
    status: "Alerta",
    statusColor: "amber",
    result: "2 áreas identificadas con vulnerabilidad alta: Barrio Sur (inundaciones) y Zona Industrial (calidad del aire).",
    confidence: 92,
    lastUpdate: "Hace 2 min",
  },
  {
    id: "climate",
    icon: CloudSun,
    title: "Simulación Climática",
    status: "Completado",
    statusColor: "blue",
    result: "Escenario 2030: Incremento de 1.2°C. Recomendación: expandir corredores verdes en 15% para mitigación.",
    confidence: 89,
    lastUpdate: "Hace 28 min",
  },
]

const statusColors = {
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    dot: "bg-emerald-500",
    border: "border-emerald-500/30",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    dot: "bg-cyan-500",
    border: "border-cyan-500/30",
  },
  amber: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    dot: "bg-amber-500",
    border: "border-amber-500/30",
  },
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    dot: "bg-blue-500",
    border: "border-blue-500/30",
  },
}

export function AIWidgets() {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Módulos de Inteligencia Artificial</h3>
            <p className="text-xs text-muted-foreground">Análisis predictivo en tiempo real</p>
          </div>
        </div>
        <button className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
          <RefreshCw className="h-3 w-3" />
          Actualizar
        </button>
      </div>

      {/* Modules grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {aiModules.map((module) => {
          const colors = statusColors[module.statusColor as keyof typeof statusColors]
          return (
            <div 
              key={module.id}
              className={cn(
                "group relative overflow-hidden rounded-xl border p-4 transition-all hover:shadow-lg cursor-pointer",
                colors.border,
                "hover:border-primary/30"
              )}
            >
              {/* Background effect */}
              <div className={cn(
                "absolute -right-8 -top-8 h-32 w-32 rounded-full blur-3xl opacity-10 transition-opacity group-hover:opacity-20",
                colors.bg
              )} />
              
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={cn("flex h-9 w-9 items-center justify-center rounded-lg", colors.bg)}>
                    <module.icon className={cn("h-4 w-4", colors.text)} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-foreground">{module.title}</h4>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <div className={cn("h-1.5 w-1.5 rounded-full animate-pulse", colors.dot)} />
                      <span className={cn("text-[10px] font-medium", colors.text)}>{module.status}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-foreground">{module.confidence}%</div>
                  <span className="text-[10px] text-muted-foreground">Confianza</span>
                </div>
              </div>

              {/* Result */}
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                {module.result}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground">{module.lastUpdate}</span>
                <button className="flex items-center gap-1 text-[10px] font-medium text-primary opacity-0 transition-all group-hover:opacity-100">
                  Ver detalles
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>

              {/* Confidence bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-muted">
                <div 
                  className={cn("h-full transition-all", colors.dot.replace('bg-', 'bg-'))}
                  style={{ width: `${module.confidence}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
