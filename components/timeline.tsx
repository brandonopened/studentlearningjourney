"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TimelineItem from "@/components/timeline-item"
import DetailPanel from "@/components/detail-panel"
import InteroperabilityAnalysis from "@/components/interoperability-analysis"
import type { JourneyData } from "@/lib/types"

interface TimelineProps {
  journeyData: JourneyData[]
}

export default function Timeline({ journeyData }: TimelineProps) {
  const [selectedItem, setSelectedItem] = useState<JourneyData | null>(journeyData[0])

  return (
    <Tabs defaultValue="timeline" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-6">
        <TabsTrigger value="timeline">Educational Journey</TabsTrigger>
        <TabsTrigger value="interoperability">Interoperability Analysis</TabsTrigger>
      </TabsList>

      <TabsContent value="timeline">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="p-6">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
                <div className="space-y-8">
                  {journeyData.map((item, index) => (
                    <TimelineItem
                      key={item.id}
                      item={item}
                      isActive={selectedItem?.id === item.id}
                      onClick={() => setSelectedItem(item)}
                      isLast={index === journeyData.length - 1}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </div>
          <div className="lg:col-span-2">{selectedItem && <DetailPanel item={selectedItem} />}</div>
        </div>
      </TabsContent>

      <TabsContent value="interoperability">
        <InteroperabilityAnalysis />
      </TabsContent>
    </Tabs>
  )
}
