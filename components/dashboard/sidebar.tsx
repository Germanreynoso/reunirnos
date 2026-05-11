"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Map,
  Car,
  CloudSun,
  Users,
  Building2,
  AlertTriangle,
  BarChart3,
  Calendar,
  UsersRound,
  FileText,
  Settings,
  ChevronLeft,
  Leaf,
  Search,
  Menu,
  X,
} from "lucide-react"

const navItems = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: Map, label: "Diagnóstico Territorial", badge: "3" },
  { icon: Car, label: "Movilidad Urbana" },
  { icon: CloudSun, label: "Datos Climáticos", badge: "!" },
  { icon: Users, label: "Indicadores Sociales" },
  { icon: Building2, label: "Infraestructura" },
  { icon: AlertTriangle, label: "Riesgos", badge: "2" },
  { icon: BarChart3, label: "KPIs" },
  { icon: Calendar, label: "Cronograma" },
  { icon: UsersRound, label: "Stakeholders" },
  { icon: FileText, label: "Reportes" },
  { icon: Settings, label: "Configuración" },
]

interface DashboardSidebarProps {
  onCollapse?: (collapsed: boolean) => void
}

export function DashboardSidebar({ onCollapse }: DashboardSidebarProps) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("Overview")

  useEffect(() => {
    onCollapse?.(collapsed)
  }, [collapsed, onCollapse])

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground lg:hidden"
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300",
          collapsed ? "w-[72px]" : "w-[260px]",
          "max-lg:w-[260px]",
          mobileOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-full"
        )}
      >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
        <div className={cn("flex items-center gap-3", collapsed && "justify-center w-full")}>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Leaf className="h-5 w-5" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-sidebar-foreground">Tucumán 2030</span>
              <span className="text-[10px] text-muted-foreground">Smart City Platform</span>
            </div>
          )}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors",
            collapsed && "absolute -right-3 top-6 h-6 w-6 rounded-full border border-sidebar-border bg-sidebar shadow-md"
          )}
        >
          <ChevronLeft className={cn("h-4 w-4 transition-transform", collapsed && "rotate-180")} />
        </button>
      </div>

      {/* Search */}
      {!collapsed && (
        <div className="p-3">
          <div className="flex items-center gap-2 rounded-lg bg-sidebar-accent/50 px-3 py-2 text-muted-foreground">
            <Search className="h-4 w-4" />
            <span className="text-sm">Buscar...</span>
            <kbd className="ml-auto rounded bg-sidebar-accent px-1.5 py-0.5 text-[10px] font-medium">⌘K</kbd>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        <div className={cn("mb-2 px-2", collapsed && "hidden")}>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Navegación
          </span>
        </div>
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveItem(item.label)}
            className={cn(
              "group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
              activeItem === item.label
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground",
              collapsed && "justify-center px-2"
            )}
          >
            <item.icon className={cn(
              "h-5 w-5 shrink-0",
              activeItem === item.label ? "text-primary" : "text-muted-foreground group-hover:text-sidebar-foreground"
            )} />
            {!collapsed && (
              <>
                <span className="truncate">{item.label}</span>
                {item.badge && (
                  <span className={cn(
                    "ml-auto flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[10px] font-semibold",
                    item.badge === "!" 
                      ? "bg-yellow-500/20 text-yellow-400" 
                      : "bg-primary/20 text-primary"
                  )}>
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-sidebar-border p-3">
        <div className={cn(
          "flex items-center gap-3 rounded-lg bg-sidebar-accent/30 p-3",
          collapsed && "justify-center p-2"
        )}>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-xs font-semibold text-primary">
            C40
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-xs font-medium text-sidebar-foreground">C40 Cities</span>
              <span className="text-[10px] text-muted-foreground">Consultoría Técnica</span>
            </div>
          )}
        </div>
      </div>
    </aside>
    </>
  )
}
