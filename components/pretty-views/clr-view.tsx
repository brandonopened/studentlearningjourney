"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Calendar, AwardIcon, BriefcaseIcon, CheckCircle } from "lucide-react"

export default function ClrView({ data }: { data: any }) {
  // Helper function to format dates
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  // Group achievements by type
  const certifications = data.credentialSubject.achievements.filter((a: any) => a.achievementType === "Certification")
  const employment = data.credentialSubject.achievements.filter((a: any) => a.achievementType === "Employment")
  const professionalService = data.credentialSubject.achievements.filter(
    (a: any) => a.achievementType === "Professional Service",
  )

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Comprehensive Learner Record (CLR)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">Professional Portfolio</h4>
            <p className="text-sm leading-relaxed">{data.description}</p>
          </div>

          <Tabs defaultValue="certifications" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="certifications" className="text-xs md:text-sm">
                Certifications
              </TabsTrigger>
              <TabsTrigger value="employment" className="text-xs md:text-sm">
                Employment
              </TabsTrigger>
              <TabsTrigger value="service" className="text-xs md:text-sm">
                Professional Service
              </TabsTrigger>
            </TabsList>

            <TabsContent value="certifications" className="space-y-4 mt-4">
              {certifications.map((cert: any, index: number) => (
                <Card key={index} className="overflow-hidden">
                  <div className="p-4 border-b">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{cert.name}</h3>
                          <Badge variant="outline">{cert.achievementType}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Issued by {cert.creator.name} • {formatDate(cert.achievedDate)}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>Expires: {cert.expirationDate ? formatDate(cert.expirationDate) : "No expiration"}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <p className="text-sm">{cert.description}</p>

                      <div>
                        <h4 className="text-xs font-medium text-muted-foreground mb-1">Criteria</h4>
                        <p className="text-xs">{cert.criteria?.narrative || "No criteria specified"}</p>
                      </div>

                      <div>
                        <h4 className="text-xs font-medium text-muted-foreground mb-1">Competencies & Skills</h4>
                        <div className="flex flex-wrap gap-1">
                          {(cert.alignments || []).map((alignment: any, i: number) => (
                            <Badge
                              key={i}
                              variant={alignment.targetType === "Competency" ? "default" : "outline"}
                              className="text-xs"
                            >
                              {alignment.targetName}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-2">
                        <div className="flex items-center gap-1">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span className="text-xs">Verified</span>
                        </div>
                        <a
                          href={cert.sourceCredential}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs flex items-center gap-1 text-blue-600 hover:underline"
                        >
                          View on Credly <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="employment" className="space-y-4 mt-4">
              {employment.map((job: any, index: number) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{job.name}</h3>
                          <Badge variant="secondary">{job.creator.name}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {formatDate(job.achievedDate)} - {job.endDate ? formatDate(job.endDate) : "Present"}
                        </p>
                      </div>
                      <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
                    </div>

                    <div className="space-y-3 mt-3">
                      <p className="text-sm">{job.description}</p>

                      <div>
                        <h4 className="text-xs font-medium text-muted-foreground mb-1">Achievements</h4>
                        <p className="text-xs">{job.criteria?.narrative || "No achievements specified"}</p>
                      </div>

                      <div>
                        <h4 className="text-xs font-medium text-muted-foreground mb-1">Skills & Competencies</h4>
                        <div className="flex flex-wrap gap-1">
                          {(job.alignments || []).map((alignment: any, i: number) => (
                            <Badge
                              key={i}
                              variant={alignment.targetType === "Competency" ? "default" : "outline"}
                              className="text-xs"
                            >
                              {alignment.targetName}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="service" className="space-y-4 mt-4">
              {professionalService.map((service: any, index: number) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{service.name}</h3>
                          <Badge variant="outline">{service.creator.name}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {formatDate(service.achievedDate)} -{" "}
                          {service.endDate ? formatDate(service.endDate) : "Present"}
                        </p>
                      </div>
                      <AwardIcon className="h-4 w-4 text-muted-foreground" />
                    </div>

                    <div className="space-y-3 mt-3">
                      <p className="text-sm">{service.description}</p>

                      <div>
                        <h4 className="text-xs font-medium text-muted-foreground mb-1">Contributions</h4>
                        <p className="text-xs">{service.criteria?.narrative || "No contributions specified"}</p>
                      </div>

                      <div>
                        <h4 className="text-xs font-medium text-muted-foreground mb-1">Skills & Knowledge</h4>
                        <div className="flex flex-wrap gap-1">
                          {(service.alignments || []).map((alignment: any, i: number) => (
                            <Badge
                              key={i}
                              variant={
                                alignment.targetType === "Competency"
                                  ? "default"
                                  : alignment.targetType === "Knowledge Domain"
                                    ? "secondary"
                                    : "outline"
                              }
                              className="text-xs"
                            >
                              {alignment.targetName}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>

          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">Professional Profiles</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {data.credentialSubject.profiles.map((profile: any, index: number) => (
                <a
                  key={index}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded hover:bg-muted/80"
                >
                  {profile.name} <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">Issue Date</h4>
              <p className="text-sm">{formatDate(data.issuanceDate)}</p>
            </div>

            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">Issuer</h4>
              <p className="text-sm">{data.issuer.name}</p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t">
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-xs">Cryptographically Verified</span>
            </div>
            <Badge variant="outline" className="text-xs">
              CLR v2.0
            </Badge>
          </div>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md">
        <h4 className="font-medium mb-2">Comprehensive Learner Record (CLR) Context</h4>
        <p className="text-sm text-muted-foreground">
          The Comprehensive Learner Record (CLR) is a 1EdTech standard that provides a digital record of a learner's
          achievements, including courses, competencies, skills, and co-curricular activities. CLR extends beyond
          traditional transcripts by capturing and communicating a broader range of learning experiences and
          achievements in a verifiable digital format. This CLR showcases professional certifications, employment
          history, and professional service, with each achievement mapped to specific competencies and skills.
        </p>
      </div>
    </div>
  )
}
