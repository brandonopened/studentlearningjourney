"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Target, BarChart3, School, Calendar, Database } from "lucide-react"

export default function EdFiView({ data }: { data: any }) {
  const assessment = data.assessments[0]
  const studentAssessment = data.studentAssessments[0]

  // Helper function to get performance level color
  const getPerformanceLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "advanced":
        return "bg-green-100 text-green-800"
      case "proficient":
        return "bg-blue-100 text-blue-800"
      case "basic":
        return "bg-yellow-100 text-yellow-800"
      case "below basic":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Helper function to extract performance level from URI
  const extractPerformanceLevel = (uri: string) => {
    return uri.split("#")[1] || uri
  }

  // Calculate overall performance
  const overallScore = studentAssessment.scoreResults.find((score: any) =>
    score.assessmentReportingMethodDescriptor.includes("Percentage"),
  )?.result

  const overallPerformanceLevel = extractPerformanceLevel(
    studentAssessment.performanceLevels[0]?.performanceLevelDescriptor || "",
  )

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Ed-Fi Assessment Record</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">Student</h4>
              <p className="text-base">
                {data.student.firstName} {data.student.lastSurname}
              </p>
              <p className="text-xs text-muted-foreground">ID: {data.student.studentUniqueId}</p>
            </div>

            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">School</h4>
              <p className="text-base">{data.school.nameOfInstitution}</p>
              <p className="text-sm text-muted-foreground">
                {data.school.addresses[0].city}, {data.school.addresses[0].stateAbbreviationDescriptor.split("#")[1]}
              </p>
            </div>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview" className="text-xs md:text-sm">
                Overview
              </TabsTrigger>
              <TabsTrigger value="objectives" className="text-xs md:text-sm">
                Objectives
              </TabsTrigger>
              <TabsTrigger value="details" className="text-xs md:text-sm">
                Assessment Details
              </TabsTrigger>
              <TabsTrigger value="ceds" className="text-xs md:text-sm">
                CEDS Mapping
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4 mt-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart3 className="h-4 w-4" />
                    <h4 className="font-medium">Overall Performance</h4>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Overall Score</span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{overallScore}%</span>
                        <Badge className={getPerformanceLevelColor(overallPerformanceLevel)}>
                          {overallPerformanceLevel}
                        </Badge>
                      </div>
                    </div>

                    <Progress value={Number.parseInt(overallScore)} className="h-2" />

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Raw Score:</span>
                        <span className="ml-1 font-medium">
                          {
                            studentAssessment.scoreResults.find((score: any) =>
                              score.assessmentReportingMethodDescriptor.includes("Raw score"),
                            )?.result
                          }
                          /{assessment.maxRawScore}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Scale Score:</span>
                        <span className="ml-1 font-medium">
                          {
                            studentAssessment.scoreResults.find((score: any) =>
                              score.assessmentReportingMethodDescriptor.includes("Scale score"),
                            )?.result
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4" />
                      <h4 className="font-medium text-sm">Assessment Info</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Date:</span>
                        <span className="ml-1">
                          {new Date(studentAssessment.administrationDate).toLocaleDateString()}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Grade Level:</span>
                        <span className="ml-1">{studentAssessment.whenAssessedGradeLevelDescriptor.split("#")[1]}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Session:</span>
                        <span className="ml-1">{data.sessionName}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <School className="h-4 w-4" />
                      <h4 className="font-medium text-sm">Assessment Type</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Category:</span>
                        <span className="ml-1">State Summative</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Subject:</span>
                        <span className="ml-1">Mathematics</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Form:</span>
                        <span className="ml-1">{assessment.assessmentForm}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="objectives" className="space-y-4 mt-4">
              <div>
                <h4 className="font-medium text-sm text-muted-foreground mb-3">Performance by Learning Objective</h4>
                <div className="space-y-3">
                  {studentAssessment.studentObjectiveAssessments.map((objective: any, index: number) => {
                    const objectiveInfo = assessment.objectiveAssessments.find(
                      (obj: any) => obj.identificationCode === objective.identificationCode,
                    )
                    const percentageScore = objective.scoreResults.find((score: any) =>
                      score.assessmentReportingMethodDescriptor.includes("Percentage"),
                    )?.result
                    const rawScore = objective.scoreResults.find((score: any) =>
                      score.assessmentReportingMethodDescriptor.includes("Raw score"),
                    )?.result
                    const performanceLevel = extractPerformanceLevel(
                      objective.performanceLevels[0]?.performanceLevelDescriptor || "",
                    )

                    return (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <div className="flex items-center gap-2">
                                <Target className="h-4 w-4" />
                                <h5 className="font-medium text-sm">{objectiveInfo?.description}</h5>
                              </div>
                              <p className="text-xs text-muted-foreground mt-1">
                                {objectiveInfo?.percentOfAssessment}% of assessment
                              </p>
                            </div>
                            <Badge className={getPerformanceLevelColor(performanceLevel)}>{performanceLevel}</Badge>
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between items-center text-sm">
                              <span>Score: {percentageScore}%</span>
                              <span className="text-muted-foreground">
                                {rawScore}/{objectiveInfo?.maxRawScore}
                              </span>
                            </div>
                            <Progress value={Number.parseInt(percentageScore)} className="h-2" />
                          </div>

                          {objective.performanceLevels[0]?.performanceLevelMet && (
                            <div className="flex items-center gap-1 mt-2">
                              <CheckCircle className="h-3 w-3 text-green-600" />
                              <span className="text-xs text-green-600">Performance Level Met</span>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="details" className="space-y-4 mt-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-3">{assessment.assessmentTitle}</h4>

                  <div className="space-y-3">
                    <div>
                      <h5 className="text-sm font-medium text-muted-foreground mb-1">Assessment Identifier</h5>
                      <p className="text-xs font-mono bg-muted p-2 rounded">{assessment.assessmentIdentifier}</p>
                    </div>

                    <div>
                      <h5 className="text-sm font-medium text-muted-foreground mb-1">Namespace</h5>
                      <p className="text-xs font-mono bg-muted p-2 rounded">{assessment.namespace}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-medium text-muted-foreground mb-1">Max Raw Score</h5>
                        <p className="text-sm">{assessment.maxRawScore}</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-muted-foreground mb-1">Assessment Period</h5>
                        <p className="text-sm">End of Year</p>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm font-medium text-muted-foreground mb-1">Serial Number</h5>
                      <p className="text-xs font-mono bg-muted p-2 rounded">{studentAssessment.serialNumber}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ceds" className="space-y-4 mt-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Database className="h-4 w-4" />
                    <h4 className="font-medium">CEDS Data Vocabulary Mappings</h4>
                  </div>

                  <div className="space-y-4">
                    {Object.entries(data.cedsMapping).map(([key, mapping]: [string, any]) => (
                      <Card key={key} className="p-3">
                        <div className="space-y-2">
                          <div className="flex justify-between items-start">
                            <h5 className="font-medium text-sm">{mapping.cedsElementName}</h5>
                            <Badge variant="outline" className="text-xs">
                              ID: {mapping.cedsElementId}
                            </Badge>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                            <div>
                              <span className="text-muted-foreground">CEDS Value:</span>
                              <p className="font-medium">{mapping.cedsValue}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Option Set ID:</span>
                              <p className="font-mono text-xs">{mapping.cedsOptionSetId}</p>
                            </div>
                          </div>

                          <div>
                            <span className="text-muted-foreground text-xs">Definition:</span>
                            <p className="text-xs mt-1">{mapping.cedsDefinition}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md">
        <h4 className="font-medium mb-2">Ed-Fi Data Standard with CEDS Context</h4>
        <p className="text-sm text-muted-foreground">
          The Ed-Fi Data Standard provides a comprehensive framework for K-12 education data exchange, enhanced by CEDS
          (Common Education Data Standards) vocabulary mappings. CEDS provides standardized definitions and option sets
          that ensure consistent interpretation of data elements across different systems. This 3rd grade mathematics
          assessment demonstrates how Ed-Fi operational data is enriched with CEDS vocabulary to improve data quality,
          comparability, and interoperability across educational platforms and reporting systems.
        </p>
      </div>
    </div>
  )
}
