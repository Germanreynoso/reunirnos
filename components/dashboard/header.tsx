"use client"

import { Bell, Search, ChevronDown, Calendar, Circle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/80 backdrop-blur-md px-4 sm:px-6">
      {/* Left section */}
      <div className="flex items-center gap-3 pl-12 lg:pl-0">
        <div className="flex flex-col">
          <h1 className="text-sm sm:text-lg font-bold text-foreground leading-tight truncate max-w-[150px] sm:max-w-none">
            Tucumán 2030
          </h1>
          <p className="text-[10px] sm:text-xs text-muted-foreground hidden xs:block">
            Smart City Platform
          </p>
        </div>
        <Badge className="bg-emerald-500/15 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20 px-1.5 py-0 sm:px-2.5 sm:py-0.5">
          <Circle className="h-1.5 w-1.5 fill-emerald-400 mr-1 sm:mr-1.5" />
          <span className="text-[10px] sm:text-xs">Vivo</span>
        </Badge>
      </div>

      {/* Center - Search */}
      <div className="hidden md:flex items-center">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-4 py-2 text-muted-foreground transition-colors hover:bg-muted">
          <Search className="h-4 w-4" />
          <span className="text-sm">Buscar en el proyecto...</span>
          <div className="flex items-center gap-1 ml-8">
            <kbd className="rounded bg-background px-1.5 py-0.5 text-[10px] font-medium border border-border">⌘</kbd>
            <kbd className="rounded bg-background px-1.5 py-0.5 text-[10px] font-medium border border-border">K</kbd>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Date */}
        <div className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>11 Mayo, 2026</span>
        </div>

        {/* Notifications */}
        <button className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted/50 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
          <Bell className="h-4 w-4" />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
            3
          </span>
        </button>

        {/* Profile */}
        <button className="flex items-center gap-3 rounded-lg border border-border bg-muted/50 px-3 py-1.5 transition-colors hover:bg-muted">
          <Avatar className="h-7 w-7">
            <AvatarImage src="/placeholder-user.jpg" alt="Consultor" />
            <AvatarFallback className="bg-primary/20 text-primary text-xs">DR</AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-xs font-medium text-foreground">Dr. Rodríguez</span>
            <span className="text-[10px] text-muted-foreground">Consultor Senior</span>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </header>
  )
}
