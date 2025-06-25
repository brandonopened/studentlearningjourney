"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import TimelineItem from "@/components/timeline-item"
import DetailPanel from "@/components/detail-panel"
import InteroperabilityAnalysis from "@/components/interoperability-analysis"
import type { JourneyData } from "@/lib/types"
import { educationalJourneyData, washingtonStateJourneyData } from "@/lib/data"

interface TimelineProps {
  journeyData: JourneyData[]
}

export default function Timeline({ journeyData }: TimelineProps) {
  const [selectedItem, setSelectedItem] = useState<JourneyData | null>(journeyData[0])
  const [selectedState, setSelectedState] = useState<string>("national")

  // Get the appropriate data based on selected state
  const getJourneyData = () => {
    switch (selectedState) {
      case "washington":
        return washingtonStateJourneyData
      default:
        return educationalJourneyData
    }
  }

  const currentJourneyData = getJourneyData()

  // Update selected item when state changes
  const handleStateChange = (value: string) => {
    setSelectedState(value)
    const newData = value === "washington" ? washingtonStateJourneyData : educationalJourneyData
    setSelectedItem(newData[0])
  }

  return (
    <Tabs defaultValue="timeline" className="w-full">
      <div className="flex justify-between items-center mb-6">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="timeline">Educational Journey</TabsTrigger>
          <TabsTrigger value="interoperability">Interoperability Analysis</TabsTrigger>
        </TabsList>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">State:</span>
          <Select value={selectedState} onValueChange={handleStateChange}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select a state" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="national">National Standards</SelectItem>
              <SelectItem value="washington">Washington State</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <TabsContent value="timeline">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="p-6">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
                <div className="space-y-8">
                  {currentJourneyData.map((item, index) => (
                    <TimelineItem
                      key={item.id}
                      item={item}
                      isActive={selectedItem?.id === item.id}
                      onClick={() => setSelectedItem(item)}
                      isLast={index === currentJourneyData.length - 1}
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
        <InteroperabilityAnalysis selectedState={selectedState} />
      </TabsContent>
    </Tabs>
  )
}
