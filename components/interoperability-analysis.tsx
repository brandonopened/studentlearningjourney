"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle, AlertCircle, Database, Network, Users, TrendingUp } from "lucide-react"

interface InteroperabilityAnalysisProps {
  selectedState?: string
}

export default function InteroperabilityAnalysis({ selectedState = "national" }: InteroperabilityAnalysisProps) {
  // Define standards based on selected state
  const getStandards = () => {
    const baseStandards = [
      { name: "CASE Framework", color: "bg-blue-100 text-blue-800", focus: "Learning Standards" },
      { name: "Ed-Fi", color: "bg-green-100 text-green-800", focus: "Operational Data" },
      { name: "OneRoster", color: "bg-purple-100 text-purple-800", focus: "Roster Management" },
      { name: "Open Badge 3.0", color: "bg-orange-100 text-orange-800", focus: "Digital Credentials" },
      { name: "CTDL", color: "bg-red-100 text-red-800", focus: "Credential Transparency" },
      { name: "CLR", color: "bg-indigo-100 text-indigo-800", focus: "Comprehensive Records" },
      { name: "CEDS", color: "bg-teal-100 text-teal-800", focus: "Data Vocabulary" },
    ]

    if (selectedState === "washington") {
      return [
        ...baseStandards,
        { name: "P20W Data System", color: "bg-emerald-100 text-emerald-800", focus: "Longitudinal Data" },
      ]
    }

    return baseStandards
  }

  const standards = getStandards()

  // Data elements matrix
  const dataElements = [
    "Unique Identifiers",
    "Names/Descriptions",
    "Skills/Competencies",
    "Assessments/Grades",
    "Institutions/Organizations",
    "Dates/Timestamps",
    "Grade Levels",
    "Verification/Proof",
    "Metadata/Context",
    ...(selectedState === "washington" ? ["Longitudinal Tracking", "Cross-Agency Data"] : []),
  ]

  // Coverage matrix
  const getCoverageMatrix = () => {
    const baseMatrix = {
      "CASE Framework": [true, true, true, false, true, true, true, false, true],
      "Ed-Fi": [true, true, false, true, true, true, true, false, true],
      OneRoster: [true, true, false, true, true, true, true, false, true],
      "Open Badge 3.0": [true, true, true, false, true, true, false, true, true],
      CTDL: [true, true, true, false, true, true, false, true, true],
      CLR: [true, true, true, true, true, true, false, true, true],
      CEDS: [true, true, true, true, true, true, true, true, true],
    }

    if (selectedState === "washington") {
      return {
        ...baseMatrix,
        "P20W Data System": [true, true, true, true, true, true, true, true, true, true, true],
      }
    }

    return baseMatrix
  }

  const coverageMatrix = getCoverageMatrix()

  // Evolution timeline
  const getEvolutionData = () => {
    const baseEvolution = [
      { year: "2013", standard: "CASE Framework", milestone: "Learning standards exchange" },
      { year: "2015", standard: "Ed-Fi", milestone: "K-12 operational data standard" },
      { year: "2016", standard: "OneRoster", milestone: "Roster and gradebook interoperability" },
      { year: "2018", standard: "Open Badge 2.0", milestone: "Digital credential verification" },
      { year: "2019", standard: "CTDL", milestone: "Credential transparency language" },
      { year: "2020", standard: "CLR", milestone: "Comprehensive learner records" },
      { year: "2021", standard: "CEDS", milestone: "Common education data standards" },
      { year: "2022", standard: "Open Badge 3.0", milestone: "Enhanced digital credentials" },
    ]

    if (selectedState === "washington") {
      return [
        ...baseEvolution,
        { year: "2023", standard: "P20W Data System", milestone: "Washington state longitudinal data modernization" },
      ]
    }

    return baseEvolution
  }

  const evolutionData = getEvolutionData()

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Network className="h-5 w-5" />
            Interoperability Analysis
            {selectedState === "washington" && (
              <Badge variant="outline" className="ml-2">
                Washington State
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {selectedState === "washington"
              ? "Analysis of data interoperability standards used in Washington State's educational ecosystem, including the P20W longitudinal data system."
              : "Analysis of data interoperability standards across Brandon's educational journey, showing how different standards enable data exchange and portability."}
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="matrix" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="matrix">Data Elements Matrix</TabsTrigger>
          <TabsTrigger value="evolution">Evolution Timeline</TabsTrigger>
          <TabsTrigger value="crosswalk">Standards Crosswalk</TabsTrigger>
        </TabsList>

        <TabsContent value="matrix" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Data Elements Coverage Matrix</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left p-2 border-b font-medium">Standard</th>
                      {dataElements.map((element) => (
                        <th key={element} className="text-center p-2 border-b font-medium text-xs">
                          {element}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {standards.map((standard) => (
                      <tr key={standard.name}>
                        <td className="p-2 border-b">
                          <Badge className={standard.color}>{standard.name}</Badge>
                        </td>
                        {(coverageMatrix[standard.name] || []).map((covered, index) => (
                          <td key={index} className="text-center p-2 border-b">
                            {covered ? (
                              <CheckCircle className="h-4 w-4 text-green-600 mx-auto" />
                            ) : (
                              <XCircle className="h-4 w-4 text-red-400 mx-auto" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="evolution" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Standards Evolution Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {evolutionData.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 border rounded-lg">
                    <Badge variant="outline" className="min-w-16 text-center">
                      {item.year}
                    </Badge>
                    <Badge
                      className={standards.find((s) => s.name === item.standard)?.color || "bg-gray-100 text-gray-800"}
                    >
                      {item.standard}
                    </Badge>
                    <span className="text-sm">{item.milestone}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="crosswalk" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {standards.map((standard) => (
              <Card key={standard.name}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Badge className={standard.color}>{standard.name}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <span className="text-xs font-medium text-muted-foreground">Primary Focus:</span>
                      <p className="text-sm">{standard.focus}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-muted-foreground">Interoperability Strengths:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {getInteroperabilityStrengths(standard.name).map((strength, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {strength}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {selectedState === "washington" && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Washington State P20W Integration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                The Washington State P20W Data System demonstrates advanced interoperability by integrating multiple
                data standards and sources across the educational and workforce continuum.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-4 w-4" />
                    <h4 className="font-medium text-sm">Multi-Agency Integration</h4>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Combines data from DCYF, OSPI, WSAC, and ESD using standardized formats
                  </p>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-4 w-4" />
                    <h4 className="font-medium text-sm">Longitudinal Tracking</h4>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Follows students from pre-K through workforce using consistent identifiers
                  </p>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="h-4 w-4" />
                    <h4 className="font-medium text-sm">Future Modernization</h4>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Cloud-first architecture with enhanced data lakes and analytics capabilities
                  </p>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

function getInteroperabilityStrengths(standardName: string): string[] {
  const strengths: Record<string, string[]> = {
    "CASE Framework": ["Standards Alignment", "Competency Mapping", "Curriculum Exchange"],
    "Ed-Fi": ["Operational Data", "Assessment Results", "Student Information"],
    OneRoster: ["Class Rosters", "Grade Exchange", "LMS Integration"],
    "Open Badge 3.0": ["Credential Verification", "Skills Recognition", "Portable Achievements"],
    CTDL: ["Credential Discovery", "Quality Assurance", "Career Pathways"],
    CLR: ["Comprehensive Records", "Achievement Aggregation", "Competency Tracking"],
    CEDS: ["Data Vocabulary", "Element Definitions", "Cross-System Mapping"],
    "P20W Data System": ["Longitudinal Tracking", "Multi-Agency Data", "Policy Analytics"],
  }

  return strengths[standardName] || []
}
