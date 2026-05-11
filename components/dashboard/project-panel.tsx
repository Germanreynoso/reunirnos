"use client"

import { CheckCircle2, Circle, Clock, FileText, Users, GitBranch, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"

const phases = [
  { id: 1, name: "Diagnóstico Inicial", status: "completed", progress: 100, dueDate: "Ene 2026" },
  { id: 2, name: "Análisis Territorial", status: "completed", progress: 100, dueDate: "Feb 2026" },
  { id: 3, name: "Diseño de Estrategias", status: "in-progress", progress: 72, dueDate: "May 2026" },
  { id: 4, name: "Plan de Implementación", status: "pending", progress: 15, dueDate: "Jul 2026" },
  { id: 5, name: "Validación y Ajustes", status: "pending", progress: 0, dueDate: "Sep 2026" },
  { id: 6, name: "Documentación Final", status: "pending", progress: 0, dueDate: "Nov 2026" },
]

const recentTasks = [
  { id: 1, title: "Actualizar modelo de movilidad", assignee: "MR", status: "in-progress", priority: "high" },
  { id: 2, title: "Revisar datos de emisiones Q1", assignee: "JS", status: "completed", priority: "medium" },
  { id: 3, title: "Integrar sensores IoT", assignee: "AL", status: "pending", priority: "high" },
  { id: 4, title: "Validar proyecciones climáticas", assignee: "CP", status: "in-progress", priority: "medium" },
  { id: 5, title: "Preparar informe stakeholders", assignee: "MR", status: "pending", priority: "low" },
]

const documents = [
  { name: "Informe Diagnóstico v2.4", type: "PDF", size: "4.2 MB", date: "08 May" },
  { name: "Análisis Movilidad 2026", type: "XLSX", size: "12.8 MB", date: "05 May" },
  { name: "Presentación C40", type: "PPTX", size: "28.4 MB", date: "02 May" },
  { name: "Datos GIS Tucumán", type: "GDB", size: "156 MB", date: "28 Abr" },
]

export function ProjectPanel() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Phases Timeline */}
      <div className="lg:col-span-2 rounded-xl border border-border bg-card p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-semibold text-foreground">Fases del Proyecto</h3>
            <p className="text-xs text-muted-foreground">6 fases • 3 completadas</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Avance general:</span>
            <span className="text-sm font-bold text-primary">48%</span>
          </div>
        </div>

        <div className="space-y-3">
          {phases.map((phase, index) => (
            <div 
              key={phase.id}
              className={cn(
                "relative flex items-center gap-4 rounded-lg border p-3 transition-all",
                phase.status === "in-progress" 
                  ? "border-primary/30 bg-primary/5" 
                  : "border-border hover:border-border/80"
              )}
            >
              {/* Status icon */}
              <div className="flex-shrink-0">
                {phase.status === "completed" ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                ) : phase.status === "in-progress" ? (
                  <div className="relative">
                    <Circle className="h-5 w-5 text-primary" />
                    <div className="absolute inset-0.5 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                  </div>
                ) : (
                  <Circle className="h-5 w-5 text-muted-foreground/30" />
                )}
              </div>

              {/* Phase info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "text-sm font-medium",
                    phase.status === "completed" ? "text-muted-foreground" : "text-foreground"
                  )}>
                    {phase.name}
                  </span>
                  {phase.status === "in-progress" && (
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                      Activo
                    </span>
                  )}
                </div>
                <div className="mt-1.5">
                  <Progress value={phase.progress} className="h-1" />
                </div>
              </div>

              {/* Progress & date */}
              <div className="text-right flex-shrink-0">
                <span className={cn(
                  "text-sm font-semibold",
                  phase.status === "completed" ? "text-emerald-500" : "text-foreground"
                )}>
                  {phase.progress}%
                </span>
                <p className="text-[10px] text-muted-foreground">{phase.dueDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right column */}
      <div className="space-y-4">
        {/* Recent Tasks */}
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-foreground">Tareas Recientes</h3>
            <button className="text-xs text-primary hover:underline">Ver todas</button>
          </div>

          <div className="space-y-2">
            {recentTasks.slice(0, 4).map((task) => (
              <div 
                key={task.id}
                className="flex items-center gap-3 rounded-lg p-2 hover:bg-muted/50 transition-colors"
              >
                <div className={cn(
                  "h-5 w-5 rounded flex items-center justify-center flex-shrink-0",
                  task.status === "completed" 
                    ? "bg-emerald-500/20 text-emerald-400" 
                    : task.status === "in-progress"
                    ? "bg-cyan-500/20 text-cyan-400"
                    : "bg-muted text-muted-foreground"
                )}>
                  {task.status === "completed" ? (
                    <CheckCircle2 className="h-3 w-3" />
                  ) : (
                    <Circle className="h-3 w-3" />
                  )}
                </div>
                <span className={cn(
                  "text-xs flex-1 truncate",
                  task.status === "completed" ? "text-muted-foreground line-through" : "text-foreground"
                )}>
                  {task.title}
                </span>
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-[10px] font-semibold text-primary">
                  {task.assignee}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Documents */}
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-foreground">Documentación</h3>
            <button className="text-xs text-primary hover:underline">Ver todos</button>
          </div>

          <div className="space-y-2">
            {documents.map((doc) => (
              <div 
                key={doc.name}
                className="flex items-center gap-3 rounded-lg p-2 hover:bg-muted/50 transition-colors cursor-pointer group"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-foreground truncate">{doc.name}</p>
                  <p className="text-[10px] text-muted-foreground">{doc.type} • {doc.size}</p>
                </div>
                <span className="text-[10px] text-muted-foreground">{doc.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
