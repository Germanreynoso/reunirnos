"use client"

import { AreaChart, Area, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, RadialBarChart, RadialBar, Legend } from "recharts"

const emissionsData = [
  { month: "Ene", actual: 420, target: 450, previous: 480 },
  { month: "Feb", actual: 398, target: 440, previous: 470 },
  { month: "Mar", actual: 385, target: 430, previous: 465 },
  { month: "Abr", actual: 362, target: 420, previous: 458 },
  { month: "May", actual: 348, target: 410, previous: 452 },
  { month: "Jun", actual: 325, target: 400, previous: 448 },
  { month: "Jul", actual: 312, target: 390, previous: 445 },
  { month: "Ago", actual: 298, target: 380, previous: 440 },
  { month: "Sep", actual: 285, target: 370, previous: 435 },
  { month: "Oct", actual: 268, target: 360, previous: 430 },
  { month: "Nov", actual: 252, target: 350, previous: 425 },
  { month: "Dic", actual: 240, target: 340, previous: 420 },
]

const mobilityData = [
  { name: "Transporte Público", value: 35, color: "#10b981" },
  { name: "Bicicleta", value: 18, color: "#22d3ee" },
  { name: "Peatonal", value: 22, color: "#3b82f6" },
  { name: "Vehículo Privado", value: 25, color: "#f59e0b" },
]

const resilienceData = [
  { name: "Infraestructura", value: 78, fill: "#10b981" },
  { name: "Medio Ambiente", value: 65, fill: "#22d3ee" },
  { name: "Socioeconómico", value: 72, fill: "#3b82f6" },
  { name: "Gobernanza", value: 85, fill: "#8b5cf6" },
]

const monthlyProgress = [
  { name: "Ene", completed: 12, planned: 15 },
  { name: "Feb", completed: 28, planned: 30 },
  { name: "Mar", completed: 45, planned: 45 },
  { name: "Abr", completed: 58, planned: 60 },
  { name: "May", completed: 72, planned: 75 },
  { name: "Jun", completed: 82, planned: 90 },
]

export function EmissionsChart() {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-foreground">Reducción de Emisiones CO₂</h3>
        <p className="text-xs text-muted-foreground">Toneladas métricas mensuales (×1000)</p>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-[10px] text-muted-foreground">2026 (Actual)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-cyan-500" />
          <span className="text-[10px] text-muted-foreground">Meta</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-muted-foreground/50" />
          <span className="text-[10px] text-muted-foreground">2025</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={emissionsData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
          <defs>
            <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#6b7280' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: '#6b7280' }} axisLine={false} tickLine={false} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(15, 23, 42, 0.9)', 
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              fontSize: '12px'
            }} 
          />
          <Area type="monotone" dataKey="previous" stroke="rgba(107, 114, 128, 0.5)" fill="none" strokeDasharray="5 5" />
          <Area type="monotone" dataKey="target" stroke="#22d3ee" fill="none" strokeWidth={2} />
          <Area type="monotone" dataKey="actual" stroke="#10b981" fillOpacity={1} fill="url(#colorActual)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export function MobilityChart() {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-foreground">Distribución Modal de Movilidad</h3>
        <p className="text-xs text-muted-foreground">Porcentaje de viajes por tipo de transporte</p>
      </div>
      <div className="flex items-center justify-between">
        <ResponsiveContainer width="50%" height={180}>
          <PieChart>
            <Pie
              data={mobilityData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
              paddingAngle={2}
              dataKey="value"
            >
              {mobilityData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                fontSize: '12px'
              }} 
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-col gap-2">
          {mobilityData.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-[10px] text-muted-foreground">{item.name}</span>
              <span className="text-xs font-semibold text-foreground ml-auto">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ResilienceChart() {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-foreground">Índice de Resiliencia Urbana</h3>
        <p className="text-xs text-muted-foreground">Evaluación por dimensión (0-100)</p>
      </div>
      <ResponsiveContainer width="100%" height={180}>
        <RadialBarChart 
          cx="50%" 
          cy="50%" 
          innerRadius="20%" 
          outerRadius="90%" 
          data={resilienceData} 
          startAngle={180} 
          endAngle={0}
        >
          <RadialBar
            background={{ fill: 'rgba(255,255,255,0.05)' }}
            dataKey="value"
            cornerRadius={4}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(15, 23, 42, 0.9)', 
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              fontSize: '12px'
            }} 
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-4 mt-2">
        {resilienceData.map((item) => (
          <div key={item.name} className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.fill }} />
            <span className="text-[10px] text-muted-foreground">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ProgressChart() {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-foreground">Avance del Proyecto</h3>
        <p className="text-xs text-muted-foreground">Hitos completados vs planificados</p>
      </div>
      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={monthlyProgress} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#6b7280' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: '#6b7280' }} axisLine={false} tickLine={false} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(15, 23, 42, 0.9)', 
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              fontSize: '12px'
            }} 
          />
          <Bar dataKey="planned" fill="rgba(255,255,255,0.1)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="completed" fill="#10b981" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-6 mt-2">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-[10px] text-muted-foreground">Completado</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-muted" />
          <span className="text-[10px] text-muted-foreground">Planificado</span>
        </div>
      </div>
    </div>
  )
}
