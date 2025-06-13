"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export default function CareerView({ data }: { data: any }) {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Professional Learning & Employment Record</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">Professional Summary</h4>
            <p className="text-sm leading-relaxed">{data.description}</p>
          </div>

          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">Professional Experience</h4>
            <div className="space-y-3 mt-2">
              {data.credentialSubject.experience.slice(0, 6).map((exp: string, index: number) => (
                <Card key={index} className="p-3">
                  <p className="text-sm font-medium">{exp}</p>
                </Card>
              ))}
            </div>
          </div>

          {data.credentialSubject.badges && data.credentialSubject.badges.length > 0 && (
            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">Professional Certifications & Badges</h4>
              <div className="space-y-3 mt-2">
                {data.credentialSubject.badges.map((badge: any, index: number) => (
                  <Card key={index} className="p-3">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium text-sm">{badge.name}</p>
                          <ExternalLink className="h-3 w-3 text-muted-foreground" />
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">
                          Issued by {badge.issuer} • {new Date(badge.issuedDate).toLocaleDateString()}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {badge.skills.map((skill: string, skillIndex: number) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">Core Skills</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {data.credentialSubject.skills.map((skill: string, index: number) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">Education</h4>
            <div className="space-y-2 mt-2">
              {data.credentialSubject.education.map((edu: string, index: number) => (
                <div key={index} className="flex items-center gap-2">
                  <Badge variant="outline">{edu}</Badge>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">Awards & Recognition</h4>
            <div className="space-y-2 mt-2">
              {data.credentialSubject.awards.map((award: string, index: number) => (
                <Card key={index} className="p-2">
                  <p className="text-sm">{award}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">Professional Profiles</h4>
            <div className="space-y-1 mt-2">
              {data.credentialSubject.profiles.map((profile: string, index: number) => (
                <div key={index}>
                  <Badge variant="secondary" className="text-xs">
                    {profile}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">Issue Date</h4>
              <p className="text-base">{new Date(data.issuanceDate).toLocaleDateString()}</p>
            </div>

            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">Record Type</h4>
              <Badge variant="outline">CLR Credential</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md">
        <h4 className="font-medium mb-2">LER-RS (Learning and Employment Record - Resume Standard) Context</h4>
        <p className="text-sm text-muted-foreground">
          LER-RS provides a standardized format for comprehensive learning and employment records. This format enables
          secure, verifiable sharing of professional experience, education, skills, certifications, and achievements
          across different platforms and organizations, supporting career mobility and professional development. The
          integration with Credly badges demonstrates how digital credentials can be incorporated into comprehensive
          professional records.
        </p>
      </div>
    </div>
  )
}
