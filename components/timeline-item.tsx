"use client"

import { cn } from "@/lib/utils"
import type { JourneyData } from "@/lib/types"
import { Badge } from "@/components/ui/badge"

interface TimelineItemProps {
  item: JourneyData
  isActive: boolean
  onClick: () => void
  isLast: boolean
}

export default function TimelineItem({ item, isActive, onClick, isLast }: TimelineItemProps) {
  return (
    <div className={cn("relative pl-8", !isLast && "pb-8")}>
      <div
        className={cn(
          "absolute left-0 top-1 h-8 w-8 rounded-full border flex items-center justify-center cursor-pointer transition-colors",
          isActive
            ? "bg-primary border-primary text-primary-foreground"
            : "bg-background border-border hover:border-primary/50",
        )}
        onClick={onClick}
      >
        {item.icon}
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <h3 className="font-medium leading-none">{item.title}</h3>
          <Badge variant="outline" className="text-xs">
            {item.year}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{item.description}</p>
        <Badge variant="secondary" className="mt-1">
          {item.standard}
        </Badge>
      </div>
    </div>
  )
}
