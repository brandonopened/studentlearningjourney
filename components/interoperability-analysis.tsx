"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Network, GitBranch, Database, ArrowRight, CheckCircle, AlertCircle, Info } from "lucide-react"

interface CommonElement {
  concept: string
  description: string
  specs: {
    [key: string]: {
      field: string
      example: string
      present: boolean
    }
  }
}

const commonDataElements: CommonElement[] = [
  {
    concept: "Unique Identifier",
    description: "Persistent identifier for the credential or achievement",
    specs: {
      "CASE Specification": { field: "identifier", example: "1ff5dc7c-cd2a-417a-a9a2-11124c69d5ce", present: true },
      "Open Badge 3.0": { field: "id", example: "urn:uuid:high-school-diploma-2024", present: true },
      CTDL: { field: "ceterms:ctid", example: "ce-8f5b4a2e-1d3c-4f7a-9b00-2fa8c7d5e4c1", present: true },
      "LER-RS": { field: "id", example: "urn:uuid:20060901000000000001", present: true },
      CLR: { field: "id", example: "urn:uuid:20230531000801107940", present: true },
    },
  },
  {
    concept: "Name/Title",
    description: "Human-readable name or title of the achievement",
    specs: {
      "CASE Specification": { field: "fullStatement", example: "Child attends to, understands...", present: true },
      "Open Badge 3.0": { field: "name", example: "High School Diploma", present: true },
      CTDL: { field: "ceterms:name", example: "Bachelor of Arts in Mathematics...", present: true },
      "LER-RS": { field: "name", example: "Brandon Dorman – Early Career Record", present: true },
      CLR: { field: "name", example: "Brandon Dorman - Professional Portfolio", present: true },
    },
  },
  {
    concept: "Description",
    description: "Detailed description of the achievement or learning outcome",
    specs: {
      "CASE Specification": {
        field: "fullStatement",
        example: "Interpret products of whole numbers...",
        present: true,
      },
      "Open Badge 3.0": { field: "description", example: "High School Diploma awarded upon...", present: true },
      CTDL: { field: "ceterms:description", example: "Awarded Bachelor of Arts from...", present: true },
      "LER-RS": { field: "description", example: "Beginning mathematics educator...", present: true },
      CLR: { field: "description", example: "Comprehensive Learner Record...", present: true },
    },
  },
  {
    concept: "Issue/Effective Date",
    description: "Date when the credential was issued or became effective",
    specs: {
      "CASE Specification": { field: "lastChangeDateTime", example: "2023-07-03T21:21:14+00:00", present: true },
      "Open Badge 3.0": { field: "issuanceDate", example: "2024-05-30T00:00:00Z", present: true },
      CTDL: { field: "ceterms:dateEffective", example: "2005-05-05", present: true },
      "LER-RS": { field: "issuanceDate", example: "2006-09-01T00:00:00.000Z", present: true },
      CLR: { field: "issuanceDate", example: "2023-05-31T00:08:01.108152Z", present: true },
    },
  },
  {
    concept: "Skills/Competencies",
    description: "Skills, competencies, or learning outcomes associated with the achievement",
    specs: {
      "CASE Specification": { field: "CFItemType", example: "Goal/Standard", present: true },
      "Open Badge 3.0": { field: "skillsEarned", example: "Critical Thinking, Mathematical Reasoning", present: true },
      CTDL: { field: "ceterms:teaches", example: "Mathematical Analysis, Educational Psychology", present: true },
      "LER-RS": { field: "skills", example: "Mathematics Education, Classroom Management", present: true },
      CLR: { field: "alignments", example: "Data Science, Python Programming", present: true },
    },
  },
  {
    concept: "Issuing Organization",
    description: "Organization that issued or granted the credential",
    specs: {
      "CASE Specification": { field: "uri (authority)", example: "satchelcommons.com", present: true },
      "Open Badge 3.0": { field: "issuer", example: "Washington High School", present: true },
      CTDL: { field: "ceterms:ownedBy", example: "Fresno Pacific University", present: true },
      "LER-RS": { field: "implicit", example: "Professional Portfolio Services", present: false },
      CLR: { field: "issuer", example: "Professional Portfolio Services", present: true },
    },
  },
  {
    concept: "Language",
    description: "Language in which the credential is expressed",
    specs: {
      "CASE Specification": { field: "language", example: "en", present: true },
      "Open Badge 3.0": { field: "implicit", example: "en", present: false },
      CTDL: { field: "ceterms:inLanguage", example: "en", present: true },
      "LER-RS": { field: "implicit", example: "en", present: false },
      CLR: { field: "implicit", example: "en", present: false },
    },
  },
  {
    concept: "Verification/Proof",
    description: "Cryptographic or other verification mechanism",
    specs: {
      "CASE Specification": { field: "uri", example: "HTTPS URI", present: true },
      "Open Badge 3.0": { field: "proof (implicit)", example: "Cryptographic verification", present: true },
      CTDL: { field: "registry", example: "Credential Engine Registry", present: true },
      "LER-RS": { field: "implicit", example: "Digital signature", present: false },
      CLR: { field: "proof", example: "Ed25519Signature2020", present: true },
    },
  },
]

const specColors = {
  "CASE Specification": "bg-blue-100 text-blue-800",
  "Open Badge 3.0": "bg-purple-100 text-purple-800",
  CTDL: "bg-orange-100 text-orange-800",
  "LER-RS": "bg-red-100 text-red-800",
  CLR: "bg-indigo-100 text-indigo-800",
}

export default function InteroperabilityAnalysis() {
  const [selectedElement, setSelectedElement] = useState<string | null>(null)

  const specs = Object.keys(specColors)

  // Calculate interoperability score
  const calculateInteroperabilityScore = () => {
    const totalPossible = commonDataElements.length * specs.length
    const totalPresent = commonDataElements.reduce((acc, element) => {
      return acc + Object.values(element.specs).filter((spec) => spec.present).length
    }, 0)
    return Math.round((totalPresent / totalPossible) * 100)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Network className="h-5 w-5" />
            Interoperability Analysis
          </CardTitle>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              <span className="text-sm text-muted-foreground">{commonDataElements.length} Common Data Elements</span>
            </div>
            <div className="flex items-center gap-2">
              <GitBranch className="h-4 w-4" />
              <span className="text-sm text-muted-foreground">{specs.length} Specifications</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium">{calculateInteroperabilityScore()}% Interoperability Score</span>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="matrix" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="matrix">Data Elements Matrix</TabsTrigger>
          <TabsTrigger value="evolution">Data Evolution</TabsTrigger>
          <TabsTrigger value="crosswalk">Standards Crosswalk</TabsTrigger>
        </TabsList>

        <TabsContent value="matrix" className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-3 border-b font-medium">Data Element</th>
                  {specs.map((spec) => (
                    <th key={spec} className="text-center p-2 border-b text-xs">
                      <Badge className={specColors[spec as keyof typeof specColors]}>{spec}</Badge>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {commonDataElements.map((element, index) => (
                  <tr key={index} className="hover:bg-muted/50">
                    <td className="p-3 border-b">
                      <div>
                        <div className="font-medium text-sm">{element.concept}</div>
                        <div className="text-xs text-muted-foreground">{element.description}</div>
                      </div>
                    </td>
                    {specs.map((spec) => {
                      const specData = element.specs[spec]
                      return (
                        <td key={spec} className="text-center p-2 border-b">
                          {specData.present ? (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                              onClick={() => setSelectedElement(`${element.concept}-${spec}`)}
                            >
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            </Button>
                          ) : (
                            <AlertCircle className="h-4 w-4 text-gray-400 mx-auto" />
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {selectedElement && (
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Field Details</h4>
                  <Button variant="ghost" size="sm" onClick={() => setSelectedElement(null)}>
                    ×
                  </Button>
                </div>
                {(() => {
                  const [concept, spec] = selectedElement.split("-")
                  const element = commonDataElements.find((e) => e.concept === concept)
                  const specData = element?.specs[spec]

                  return specData ? (
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm font-medium">Field: </span>
                        <code className="text-xs bg-muted px-1 rounded">{specData.field}</code>
                      </div>
                      <div>
                        <span className="text-sm font-medium">Example: </span>
                        <span className="text-xs">{specData.example}</span>
                      </div>
                    </div>
                  ) : null
                })()}
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="evolution" className="space-y-4">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Data Element Evolution Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {commonDataElements.slice(0, 3).map((element, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-medium text-sm">{element.concept}</h4>
                      <div className="flex items-center gap-2 overflow-x-auto pb-2">
                        {specs.map((spec, specIndex) => {
                          const specData = element.specs[spec]
                          return (
                            <div key={spec} className="flex items-center gap-2 flex-shrink-0">
                              <div
                                className={`px-2 py-1 rounded text-xs ${specColors[spec as keyof typeof specColors]}`}
                              >
                                {spec}
                              </div>
                              <div className="text-xs">
                                {specData.present ? (
                                  <code className="bg-muted px-1 rounded">{specData.field}</code>
                                ) : (
                                  <span className="text-muted-foreground">Not present</span>
                                )}
                              </div>
                              {specIndex < specs.length - 1 && <ArrowRight className="h-3 w-3 text-muted-foreground" />}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="crosswalk" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  Interoperability Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm mb-1">Strongest Common Elements</h4>
                  <div className="space-y-1">
                    {commonDataElements
                      .sort((a, b) => {
                        const aCount = Object.values(a.specs).filter((s) => s.present).length
                        const bCount = Object.values(b.specs).filter((s) => s.present).length
                        return bCount - aCount
                      })
                      .slice(0, 3)
                      .map((element, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-xs">{element.concept}</span>
                          <Badge variant="outline" className="text-xs">
                            {Object.values(element.specs).filter((s) => s.present).length}/{specs.length}
                          </Badge>
                        </div>
                      ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-sm mb-1">Interoperability Gaps</h4>
                  <div className="space-y-1">
                    {commonDataElements
                      .sort((a, b) => {
                        const aCount = Object.values(a.specs).filter((s) => s.present).length
                        const bCount = Object.values(b.specs).filter((s) => s.present).length
                        return aCount - bCount
                      })
                      .slice(0, 3)
                      .map((element, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-xs">{element.concept}</span>
                          <Badge variant="destructive" className="text-xs">
                            {specs.length - Object.values(element.specs).filter((s) => s.present).length} missing
                          </Badge>
                        </div>
                      ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Mapping Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="p-3 bg-green-50 rounded-md">
                    <h4 className="font-medium text-sm text-green-800">Strong Alignment</h4>
                    <p className="text-xs text-green-700">
                      Identifiers and names are consistently represented across most specifications
                    </p>
                  </div>

                  <div className="p-3 bg-yellow-50 rounded-md">
                    <h4 className="font-medium text-sm text-yellow-800">Partial Alignment</h4>
                    <p className="text-xs text-yellow-700">
                      Skills/competencies use different structures but similar concepts
                    </p>
                  </div>

                  <div className="p-3 bg-red-50 rounded-md">
                    <h4 className="font-medium text-sm text-red-800">Alignment Opportunity</h4>
                    <p className="text-xs text-red-700">
                      Verification mechanisms could be standardized across specifications
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
