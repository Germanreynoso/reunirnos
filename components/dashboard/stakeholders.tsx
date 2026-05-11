"use client"

import { Building, Globe, Users, Landmark, GraduationCap, Factory, TreeDeciduous, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"

const stakeholders = [
  { 
    name: "Municipalidad de San Miguel de Tucumán", 
    type: "Gobierno Local", 
    role: "Ejecutor Principal",
    icon: Landmark,
    influence: "Alta",
    engagement: 95,
    color: "emerald"
  },
  { 
    name: "C40 Cities", 
    type: "Organismo Internacional", 
    role: "Financiador / Asesor",
    icon: Globe,
    influence: "Alta",
    engagement: 92,
    color: "cyan"
  },
  { 
    name: "Ministerio de Transporte", 
    type: "Gobierno Nacional", 
    role: "Regulador",
    icon: Building,
    influence: "Alta",
    engagement: 78,
    color: "blue"
  },
  { 
    name: "Universidad Nacional de Tucumán", 
    type: "Academia", 
    role: "Soporte Técnico",
    icon: GraduationCap,
    influence: "Media",
    engagement: 85,
    color: "violet"
  },
  { 
    name: "Cámara de Comercio", 
    type: "Sector Privado", 
    role: "Socio Estratégico",
    icon: Briefcase,
    influence: "Media",
    engagement: 68,
    color: "amber"
  },
  { 
    name: "ONGs Ambientales", 
    type: "Sociedad Civil", 
    role: "Veeduría",
    icon: TreeDeciduous,
    influence: "Media",
    engagement: 82,
    color: "green"
  },
]

const colorClasses = {
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30" },
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/30" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30" },
  violet: { bg: "bg-violet-500/10", text: "text-violet-400", border: "border-violet-500/30" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/30" },
  green: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/30" },
}

export function StakeholdersMatrix() {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div>
          <h3 className="text-sm font-semibold text-foreground">Matriz de Actores Clave</h3>
          <p className="text-xs text-muted-foreground">6 stakeholders activos en el proyecto</p>
        </div>
        <div className="flex items-center gap-4 text-[10px] text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            Alta influencia
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-amber-500" />
            Media influencia
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {stakeholders.map((stakeholder) => {
          const colors = colorClasses[stakeholder.color as keyof typeof colorClasses]
          return (
            <div 
              key={stakeholder.name}
              className={cn(
                "group relative overflow-hidden rounded-xl border p-4 transition-all hover:shadow-md cursor-pointer",
                colors.border,
                "hover:border-primary/30"
              )}
            >
              {/* Background glow */}
              <div className={cn(
                "absolute -right-6 -top-6 h-20 w-20 rounded-full blur-2xl opacity-20 transition-opacity group-hover:opacity-40",
                colors.bg
              )} />

              <div className="flex items-start gap-3">
                <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg", colors.bg)}>
                  <stakeholder.icon className={cn("h-5 w-5", colors.text)} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-semibold text-foreground truncate">{stakeholder.name}</h4>
                  <p className="text-[10px] text-muted-foreground">{stakeholder.type}</p>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-muted-foreground">Rol: </span>
                  <span className={cn("text-[10px] font-medium", colors.text)}>{stakeholder.role}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-foreground">{stakeholder.engagement}%</span>
                  <p className="text-[10px] text-muted-foreground">Engagement</p>
                </div>
              </div>

              {/* Engagement bar */}
              <div className="mt-2 h-1 w-full rounded-full bg-muted">
                <div 
                  className={cn("h-1 rounded-full", colors.text.replace("text-", "bg-"))}
                  style={{ width: `${stakeholder.engagement}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
