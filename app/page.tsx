"use client"

import { useState } from "react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"
import { KPICards } from "@/components/dashboard/kpi-cards"
import { UrbanMap } from "@/components/dashboard/urban-map"
import { EmissionsChart, MobilityChart, ResilienceChart, ProgressChart } from "@/components/dashboard/charts"
import { AIWidgets } from "@/components/dashboard/ai-widgets"
import { ProjectPanel } from "@/components/dashboard/project-panel"
import { StakeholdersMatrix } from "@/components/dashboard/stakeholders"
import { ProjectTimeline } from "@/components/dashboard/timeline"
import { cn } from "@/lib/utils"

export default function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <DashboardSidebar onCollapse={setSidebarCollapsed} />

      {/* Main content */}
      <div className={cn(
        "transition-all duration-300 min-h-screen",
        sidebarCollapsed ? "lg:pl-[72px]" : "lg:pl-[260px]",
        "pl-0"
      )}>
        {/* Header */}
        <DashboardHeader />

        {/* Dashboard content */}
        <main className="p-4 sm:p-6 space-y-6">
          {/* KPI Cards */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold text-foreground">Indicadores Principales</h2>
                <p className="text-xs text-muted-foreground">Métricas clave del proyecto en tiempo real</p>
              </div>
              <button className="rounded-lg border border-border bg-muted/50 px-3 py-1.5 text-xs text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
                Exportar datos
              </button>
            </div>
            <KPICards />
          </section>

          {/* Map and Charts Row */}
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <UrbanMap />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <EmissionsChart />
              <MobilityChart />
              <ResilienceChart />
              <ProgressChart />
            </div>
          </section>

          {/* AI Modules */}
          <section>
            <AIWidgets />
          </section>

          {/* Project Management */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold text-foreground">Gestión del Proyecto</h2>
                <p className="text-xs text-muted-foreground">Fases, tareas y documentación</p>
              </div>
            </div>
            <ProjectPanel />
          </section>

          {/* Timeline and Stakeholders */}
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <ProjectTimeline />
            <StakeholdersMatrix />
          </section>

          {/* Footer */}
          <footer className="flex items-center justify-between border-t border-border pt-6 pb-4">
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground">
                © 2026 Plan Estratégico Tucumán 2030 • C40 Cities
              </span>
              <span className="text-xs text-muted-foreground">|</span>
              <span className="text-xs text-muted-foreground">
                Última actualización: 11 Mayo, 2026 - 14:32 ART
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Sistema operativo
              </span>
              <span className="text-xs text-muted-foreground">v2.4.1</span>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
