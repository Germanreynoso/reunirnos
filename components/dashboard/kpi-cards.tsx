"use client"

import { TrendingUp, TrendingDown, Minus, Leaf, Car, MapPin, Users, AlertTriangle, DollarSign, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"

const kpis = [
  {
    label: "Reducción CO₂",
    value: "-24.8%",
    target: "Meta: -30%",
    trend: "up",
    change: "+3.2%",
    icon: Leaf,
    color: "emerald",
    progress: 82,
  },
  {
    label: "Índice Movilidad Sostenible",
    value: "67.4",
    target: "Meta: 80",
    trend: "up",
    change: "+5.8",
    icon: Car,
    color: "cyan",
    progress: 84,
  },
  {
    label: "Cobertura Territorial",
    value: "78.2%",
    target: "Meta: 95%",
    trend: "up",
    change: "+2.1%",
    icon: MapPin,
    color: "blue",
    progress: 82,
  },
  {
    label: "Impacto Social",
    value: "342K",
    target: "Beneficiarios",
    trend: "up",
    change: "+18K",
    icon: Users,
    color: "violet",
    progress: 71,
  },
  {
    label: "Riesgo Climático",
    value: "Moderado",
    target: "Índice: 4.2/10",
    trend: "down",
    change: "-0.8",
    icon: AlertTriangle,
    color: "amber",
    progress: 58,
  },
  {
    label: "Inversión Proyectada",
    value: "$48.5M",
    target: "USD Total",
    trend: "neutral",
    change: "0%",
    icon: DollarSign,
    color: "emerald",
    progress: 65,
  },
  {
    label: "Participación Ciudadana",
    value: "12.4K",
    target: "Interacciones",
    trend: "up",
    change: "+892",
    icon: MessageSquare,
    color: "cyan",
    progress: 89,
  },
]

const colorClasses = {
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    progress: "bg-emerald-500",
    border: "border-emerald-500/30",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    progress: "bg-cyan-500",
    border: "border-cyan-500/30",
  },
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    progress: "bg-blue-500",
    border: "border-blue-500/30",
  },
  violet: {
    bg: "bg-violet-500/10",
    text: "text-violet-400",
    progress: "bg-violet-500",
    border: "border-violet-500/30",
  },
  amber: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    progress: "bg-amber-500",
    border: "border-amber-500/30",
  },
}

export function KPICards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
      {kpis.map((kpi) => {
        const colors = colorClasses[kpi.color as keyof typeof colorClasses]
        return (
          <div
            key={kpi.label}
            className={cn(
              "group relative overflow-hidden rounded-xl border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
              colors.border
            )}
          >
            {/* Background glow */}
            <div className={cn(
              "absolute -right-4 -top-4 h-24 w-24 rounded-full blur-2xl opacity-20 transition-opacity group-hover:opacity-40",
              colors.bg
            )} />
            
            {/* Icon */}
            <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg mb-3", colors.bg)}>
              <kpi.icon className={cn("h-5 w-5", colors.text)} />
            </div>

            {/* Value */}
            <div className="mb-1">
              <span className="text-xl sm:text-2xl font-bold text-foreground">{kpi.value}</span>
            </div>

            {/* Label */}
            <p className="text-xs font-medium text-muted-foreground mb-2">{kpi.label}</p>

            {/* Progress bar */}
            <div className="mb-2">
              <div className="h-1 w-full rounded-full bg-muted">
                <div
                  className={cn("h-1 rounded-full transition-all", colors.progress)}
                  style={{ width: `${kpi.progress}%` }}
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-muted-foreground">{kpi.target}</span>
              <div className={cn(
                "flex items-center gap-1 text-[10px] font-medium",
                kpi.trend === "up" ? "text-emerald-400" : kpi.trend === "down" ? "text-red-400" : "text-muted-foreground"
              )}>
                {kpi.trend === "up" ? (
                  <TrendingUp className="h-3 w-3" />
                ) : kpi.trend === "down" ? (
                  <TrendingDown className="h-3 w-3" />
                ) : (
                  <Minus className="h-3 w-3" />
                )}
                {kpi.change}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
