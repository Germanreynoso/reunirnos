"use client"

import { CheckCircle2, Circle, Clock, ArrowRight, Flag } from "lucide-react"
import { cn } from "@/lib/utils"

const milestones = [
  { 
    id: 1, 
    date: "Ene 2026", 
    title: "Kick-off del Proyecto", 
    description: "Inicio oficial con firma de convenio C40",
    status: "completed",
    type: "milestone"
  },
  { 
    id: 2, 
    date: "Feb 2026", 
    title: "Diagnóstico Base Completado", 
    description: "Levantamiento de datos GIS y análisis inicial",
    status: "completed",
    type: "deliverable"
  },
  { 
    id: 3, 
    date: "Mar 2026", 
    title: "Workshop Stakeholders", 
    description: "Taller participativo con 45 representantes",
    status: "completed",
    type: "event"
  },
  { 
    id: 4, 
    date: "May 2026", 
    title: "Modelo de Movilidad v1.0", 
    description: "Primera versión del modelo predictivo IA",
    status: "in-progress",
    type: "deliverable"
  },
  { 
    id: 5, 
    date: "Jul 2026", 
    title: "Revisión Intermedia C40", 
    description: "Evaluación de avances con comité técnico",
    status: "upcoming",
    type: "milestone"
  },
  { 
    id: 6, 
    date: "Sep 2026", 
    title: "Plan Estratégico Draft", 
    description: "Entrega de documento preliminar",
    status: "upcoming",
    type: "deliverable"
  },
  { 
    id: 7, 
    date: "Nov 2026", 
    title: "Validación Final", 
    description: "Aprobación por autoridades locales",
    status: "upcoming",
    type: "milestone"
  },
  { 
    id: 8, 
    date: "Dic 2026", 
    title: "Cierre y Entrega", 
    description: "Presentación oficial del Plan Tucumán 2030",
    status: "upcoming",
    type: "milestone"
  },
]

const typeColors = {
  milestone: { bg: "bg-primary/10", text: "text-primary", icon: Flag },
  deliverable: { bg: "bg-cyan-500/10", text: "text-cyan-400", icon: CheckCircle2 },
  event: { bg: "bg-violet-500/10", text: "text-violet-400", icon: Clock },
}

export function ProjectTimeline() {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold text-foreground">Cronograma de Implementación</h3>
          <p className="text-xs text-muted-foreground">8 hitos principales • 2026</p>
        </div>
        <div className="flex items-center gap-3 text-[10px]">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-muted-foreground">Hito</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-cyan-500" />
            <span className="text-muted-foreground">Entregable</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-violet-500" />
            <span className="text-muted-foreground">Evento</span>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Progress line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-border" />
        <div 
          className="absolute left-[19px] top-0 w-0.5 bg-primary transition-all"
          style={{ height: '40%' }}
        />

        <div className="space-y-4">
          {milestones.map((milestone, index) => {
            const typeStyle = typeColors[milestone.type as keyof typeof typeColors]
            const Icon = typeStyle.icon
            
            return (
              <div 
                key={milestone.id}
                className={cn(
                  "relative flex gap-4 pl-2",
                  milestone.status === "in-progress" && "animate-pulse"
                )}
              >
                {/* Status indicator */}
                <div className={cn(
                  "relative z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 flex-shrink-0",
                  milestone.status === "completed" 
                    ? "bg-primary/20 border-primary" 
                    : milestone.status === "in-progress"
                    ? "bg-primary/10 border-primary animate-pulse"
                    : "bg-card border-border"
                )}>
                  {milestone.status === "completed" ? (
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  ) : milestone.status === "in-progress" ? (
                    <Circle className="h-4 w-4 text-primary fill-primary/30" />
                  ) : (
                    <Icon className={cn("h-4 w-4", typeStyle.text)} />
                  )}
                </div>

                {/* Content */}
                <div className={cn(
                  "flex-1 rounded-lg border p-3 transition-all",
                  milestone.status === "in-progress" 
                    ? "border-primary/30 bg-primary/5" 
                    : milestone.status === "completed"
                    ? "border-border bg-muted/30"
                    : "border-border hover:border-border/80"
                )}>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={cn(
                          "text-xs font-semibold",
                          milestone.status === "completed" ? "text-muted-foreground" : "text-foreground"
                        )}>
                          {milestone.title}
                        </span>
                        {milestone.status === "in-progress" && (
                          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                            En curso
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{milestone.description}</p>
                    </div>
                    <span className={cn(
                      "text-[10px] font-medium whitespace-nowrap",
                      milestone.status === "completed" ? "text-emerald-400" : "text-muted-foreground"
                    )}>
                      {milestone.date}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
