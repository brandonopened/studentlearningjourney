"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, Users, TrendingUp, Shield, Cloud } from "lucide-react"

export default function WashingtonP20WView({ data }: { data: any }) {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Washington State P20W Data System</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">System Overview</h4>
            <p className="text-sm leading-relaxed">{data.description}</p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview" className="text-xs">
                Overview
              </TabsTrigger>
              <TabsTrigger value="architecture" className="text-xs">
                Architecture
              </TabsTrigger>
              <TabsTrigger value="governance" className="text-xs">
                Governance
              </TabsTrigger>
              <TabsTrigger value="roadmap" className="text-xs">
                Roadmap
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="h-4 w-4" />
                      <h4 className="font-medium text-sm">Data Sources</h4>
                    </div>
                    <div className="space-y-2">
                      {data.dataSources.map((source: string, index: number) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {source}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4" />
                      <h4 className="font-medium text-sm">Stakeholders</h4>
                    </div>
                    <div className="space-y-2">
                      {data.stakeholders.map((stakeholder: string, index: number) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {stakeholder}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="h-4 w-4" />
                    <h4 className="font-medium">Vision Statement</h4>
                  </div>
                  <p className="text-sm italic bg-muted p-3 rounded">"{data.visionStatement}"</p>
                </CardContent>
              </Card>

              <div>
                <h4 className="font-medium text-sm text-muted-foreground mb-2">Strategic Goals</h4>
                <div className="space-y-2">
                  {data.strategicGoals.map((goal: string, index: number) => (
                    <Card key={index} className="p-3">
                      <p className="text-sm">{goal}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="architecture" className="space-y-4 mt-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Cloud className="h-4 w-4" />
                    <h4 className="font-medium">Proposed Future State Architecture</h4>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm">{data.futureStateArchitecture.description}</p>

                    <div>
                      <h5 className="text-sm font-medium text-muted-foreground mb-2">Key Components</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {data.futureStateArchitecture.components.map((component: any, index: number) => (
                          <Card key={index} className="p-3">
                            <h6 className="font-medium text-sm">{component.name}</h6>
                            <p className="text-xs text-muted-foreground mt-1">{component.description}</p>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-3">Technology Investments</h4>
                  <div className="space-y-2">
                    {data.technologyInvestments.map((investment: string, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {investment}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="governance" className="space-y-4 mt-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="h-4 w-4" />
                    <h4 className="font-medium">Operating Model</h4>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="text-sm font-medium text-muted-foreground mb-2">Staffing Requirements</h5>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground">Additional Persisting FTEs</p>
                          <p className="font-medium">{data.operatingModel.additionalFTEs.persisting}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Temporary Implementation FTEs</p>
                          <p className="font-medium">{data.operatingModel.additionalFTEs.temporary}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm font-medium text-muted-foreground mb-2">Priority Process Areas</h5>
                      <div className="space-y-2">
                        {data.operatingModel.priorityProcesses.map((process: string, index: number) => (
                          <Badge key={index} variant="secondary" className="text-xs mr-2">
                            {process}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm font-medium text-muted-foreground mb-2">Governance Improvements</h5>
                      <div className="space-y-2">
                        {data.operatingModel.governanceImprovements.map((improvement: string, index: number) => (
                          <Card key={index} className="p-2">
                            <p className="text-xs">{improvement}</p>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="roadmap" className="space-y-4 mt-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-3">Implementation Roadmap</h4>
                  <p className="text-sm text-muted-foreground mb-4">{data.implementationPlan.description}</p>

                  <div className="space-y-4">
                    {data.implementationPlan.phases.map((phase: any, index: number) => (
                      <Card key={index} className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-medium text-sm">{phase.name}</h5>
                          <Badge variant="outline" className="text-xs">
                            {phase.duration}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{phase.description}</p>
                        <div className="space-y-1">
                          {phase.keyActivities.map((activity: string, actIndex: number) => (
                            <div key={actIndex} className="text-xs">
                              • {activity}
                            </div>
                          ))}
                        </div>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-3">Next Steps</h4>
                  <div className="space-y-2">
                    {data.nextSteps.map((step: string, index: number) => (
                      <Card key={index} className="p-3">
                        <p className="text-sm">{step}</p>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">Study Date</h4>
              <p className="text-sm">{data.studyDate}</p>
            </div>

            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">Organization</h4>
              <p className="text-sm">{data.organization}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md">
        <h4 className="font-medium mb-2">Washington State P20W Data System Context</h4>
        <p className="text-sm text-muted-foreground">
          The Washington State P20W (Preschool through 20 and Workforce) Data System represents a comprehensive
          longitudinal data system that tracks student progress from early learning through postsecondary education and
          into the workforce. Managed by the Education Research & Data Center (ERDC), this system integrates data from
          multiple state agencies to provide insights for policy development, program evaluation, and educational
          improvement. The 2023 Gartner study provides a roadmap for modernizing the system's architecture, governance,
          and capabilities to better serve stakeholders and improve data accessibility.
        </p>
      </div>
    </div>
  )
}
