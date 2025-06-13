"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, MapPin, Calendar, Award, BookOpen, Target } from "lucide-react"

export default function CtdlView({ data }: { data: any }) {
  // Helper function to extract language-specific text
  const getText = (obj: any) => {
    if (typeof obj === "string") return obj
    if (obj && obj.en) return obj.en
    return ""
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Credential Transparency Description Language (CTDL)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">Credential Name</h4>
            <p className="text-base font-medium">{getText(data["ceterms:name"])}</p>
          </div>

          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">Description</h4>
            <p className="text-sm leading-relaxed">{getText(data["ceterms:description"])}</p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview" className="text-xs">
                Overview
              </TabsTrigger>
              <TabsTrigger value="requirements" className="text-xs">
                Requirements
              </TabsTrigger>
              <TabsTrigger value="competencies" className="text-xs">
                Competencies
              </TabsTrigger>
              <TabsTrigger value="pathways" className="text-xs">
                Pathways
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-4 w-4" />
                      <h4 className="font-medium text-sm">Credential Type</h4>
                    </div>
                    <Badge variant="outline">{data["@type"].replace("ceterms:", "")}</Badge>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4" />
                      <h4 className="font-medium text-sm">Date Effective</h4>
                    </div>
                    <p className="text-sm">{new Date(data["ceterms:dateEffective"]).toLocaleDateString()}</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4" />
                    <h4 className="font-medium text-sm">Issuing Organization</h4>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">{getText(data["ceterms:ownedBy"][0]["ceterms:name"])}</p>
                    <div className="text-sm text-muted-foreground">
                      <p>
                        {data["ceterms:ownedBy"][0]["ceterms:address"][0]["ceterms:streetAddress"]},{" "}
                        {data["ceterms:ownedBy"][0]["ceterms:address"][0]["ceterms:addressLocality"]},{" "}
                        {data["ceterms:ownedBy"][0]["ceterms:address"][0]["ceterms:addressRegion"]}{" "}
                        {data["ceterms:ownedBy"][0]["ceterms:address"][0]["ceterms:postalCode"]}
                      </p>
                      <a
                        href={data["ceterms:ownedBy"][0]["ceterms:subjectWebpage"]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 hover:underline"
                      >
                        Visit Website <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div>
                <h4 className="font-medium text-sm text-muted-foreground mb-2">Degree Concentrations</h4>
                <div className="flex flex-wrap gap-2">
                  {data["ceterms:degreeConcentration"].map((concentration: any, index: number) => (
                    <Badge key={index} variant="secondary">
                      {getText(concentration)}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-sm text-muted-foreground mb-2">Accreditation</h4>
                <Card>
                  <CardContent className="p-3">
                    <p className="font-medium text-sm">{getText(data["ceterms:accreditedBy"][0]["ceterms:name"])}</p>
                    <a
                      href={data["ceterms:accreditedBy"][0]["ceterms:subjectWebpage"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:underline inline-flex items-center gap-1"
                    >
                      View Accreditor <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="requirements" className="space-y-4 mt-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="h-4 w-4" />
                    <h4 className="font-medium">Completion Requirements</h4>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm">{getText(data["ceterms:requires"][0]["ceterms:description"])}</p>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Credit Hours Required</p>
                        <p className="font-medium">{data["ceterms:requires"][0]["ceterms:creditHourValue"]}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Credit Type</p>
                        <p className="font-medium">
                          {getText(data["ceterms:requires"][0]["ceterms:creditHourType"]["ceterms:termName"])}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">Estimated Duration</p>
                      <p className="font-medium">
                        {getText(data["ceterms:estimatedDuration"][0]["ceterms:description"])}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="competencies" className="space-y-4 mt-4">
              <div>
                <h4 className="font-medium text-sm text-muted-foreground mb-3">Knowledge, Skills, and Abilities</h4>
                <div className="space-y-3">
                  {data["ceterms:teaches"].map((competency: any, index: number) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-2">
                          <Target className="h-4 w-4 mt-0.5 text-muted-foreground" />
                          <div>
                            <h5 className="font-medium text-sm">{getText(competency["ceterms:targetName"])}</h5>
                            <p className="text-xs text-muted-foreground mt-1">
                              {getText(competency["ceterms:targetDescription"])}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="pathways" className="space-y-4 mt-4">
              <div>
                <h4 className="font-medium text-sm text-muted-foreground mb-3">Career Pathways</h4>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <h5 className="font-medium text-sm mb-2">Industry Alignment</h5>
                      <div className="space-y-2">
                        {data["ceterms:industryType"].map((industry: any, index: number) => (
                          <div key={index} className="flex items-center justify-between">
                            <span className="text-sm">{getText(industry["ceterms:targetName"])}</span>
                            <a
                              href={industry["ceterms:targetNode"]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-blue-600 hover:underline"
                            >
                              BLS Reference
                            </a>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h5 className="font-medium text-sm mb-2">Occupation Types</h5>
                      <div className="space-y-2">
                        {data["ceterms:occupationType"].map((occupation: any, index: number) => (
                          <div key={index} className="flex items-center justify-between">
                            <span className="text-sm">{getText(occupation["ceterms:targetName"])}</span>
                            <a
                              href={occupation["ceterms:targetNode"]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-blue-600 hover:underline"
                            >
                              BLS SOC Code
                            </a>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">CTID</h4>
              <p className="text-xs font-mono bg-muted p-2 rounded">{data["ceterms:ctid"]}</p>
            </div>

            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">Language</h4>
              <Badge variant="outline">{data["ceterms:inLanguage"][0].toUpperCase()}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md">
        <h4 className="font-medium mb-2">CTDL (Credential Transparency Description Language) Context</h4>
        <p className="text-sm text-muted-foreground">
          CTDL is a structured vocabulary developed by Credential Engine to describe credentials, competencies, and
          related entities in a machine-readable format. This standard enables credential transparency by providing
          detailed information about requirements, competencies, career pathways, and quality assurance. CTDL supports
          credential discovery, comparison, and verification across different systems and platforms.
        </p>
      </div>
    </div>
  )
}
