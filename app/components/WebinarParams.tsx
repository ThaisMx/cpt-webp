"use client"

import { useState, useEffect } from "react"
import { Copy, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

function getNextTimeSlot() {
  const now = new Date()
  const minutes = now.getMinutes()
  const roundedMinutes = Math.ceil(minutes / 15) * 15
  const nextSlot = new Date(now)
  nextSlot.setMinutes(roundedMinutes)
  nextSlot.setSeconds(0)
  
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  }
  
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "2-digit",
    month: "2-digit"
  }
  
  const dateStr = nextSlot.toLocaleDateString('pt-BR', dateOptions).replace(',', '')
  const timeStr = nextSlot.toLocaleTimeString('pt-BR', timeOptions)
    .replace(':00', ':00')
    .toUpperCase()
  
  const diffMinutes = Math.ceil((nextSlot.getTime() - now.getTime()) / (1000 * 60))
  
  return `${dateStr}, ${timeStr} GMT-3 - Em ${diffMinutes} ${diffMinutes === 1 ? 'minuto' : 'minutos'}`
}

export function WebinarParams() {
  const [timeSlot, setTimeSlot] = useState(getNextTimeSlot())

  useEffect(() => {
    // Atualiza o horário imediatamente
    setTimeSlot(getNextTimeSlot())

    // Configura o intervalo para atualizar a cada minuto
    const interval = setInterval(() => {
      setTimeSlot(getNextTimeSlot())
    }, 60 * 1000) // 1 minuto em milissegundos

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gray-50 rounded-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#0096FF]" />
          <span className="text-gray-600">{timeSlot}</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
          onClick={() => {
            navigator.clipboard.writeText(timeSlot)
          }}
        >
          <Copy className="w-4 h-4" />
          <span>Copiar Horário</span>
        </Button>
      </div>
    </div>
  )
} 