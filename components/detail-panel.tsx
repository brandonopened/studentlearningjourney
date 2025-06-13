"use client"

import { useState } from "react"
import type { JourneyData } from "@/lib/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Eye } from "lucide-react"

interface DetailPanelProps {
  item: JourneyData
}

export default function DetailPanel({ item }: DetailPanelProps) {
  const [activeTab, setActiveTab] = useState("pretty")

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">{item.title}</CardTitle>
        <CardDescription>
          {item.standard} - {item.year}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="pretty" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="pretty" className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span>Pretty View</span>
            </TabsTrigger>
            <TabsTrigger value="raw" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span>Raw JSON</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="pretty" className="space-y-4">
            <div className="space-y-4">{item.prettyView}</div>
          </TabsContent>
          <TabsContent value="raw">
            <pre className="bg-muted p-4 rounded-md overflow-auto text-sm max-h-[500px]">
              {JSON.stringify(item.rawData, null, 2)}
            </pre>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
