import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function CollegeView({ data }: { data: any }) {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">College Degree Badge</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">Recipient</h4>
              <p className="text-base">{data.credentialSubject?.name || data.recipient?.identity}</p>
            </div>

            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">Institution</h4>
              <p className="text-base">{data.badge?.issuer?.name}</p>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">Degree</h4>
            <p className="text-base">{data.badge?.name}</p>
            <p className="text-sm text-muted-foreground mt-1">{data.badge?.description}</p>
          </div>

          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">Criteria</h4>
            <p className="text-sm">{data.badge?.criteria?.narrative}</p>
          </div>

          {data.credentialSubject?.result && (
            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">Academic Performance</h4>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div>
                  <p className="text-sm text-muted-foreground">GPA</p>
                  <p className="font-medium">{data.credentialSubject.result.gpa}</p>
                </div>
                {data.credentialSubject.result.honors && (
                  <div>
                    <p className="text-sm text-muted-foreground">Honors</p>
                    <p className="font-medium">{data.credentialSubject.result.honors}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm text-muted-foreground">Credits</p>
                  <p className="font-medium">{data.credentialSubject.result.creditsEarned}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Major</p>
                  <p className="font-medium">{data.credentialSubject.result.major}</p>
                </div>
              </div>
            </div>
          )}

          {data.credentialSubject?.achievement?.skillsEarned && (
            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">Skills & Competencies</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {data.credentialSubject.achievement.skillsEarned.map((skill: string, index: number) => (
                  <Badge key={index} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">Issue Date</h4>
              <p className="text-base">{new Date(data.issuedOn || data.issuanceDate).toLocaleDateString()}</p>
            </div>

            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">Verification</h4>
              <Badge variant="outline" className="cursor-pointer">
                Verify Badge
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div className="bg-muted p-4 rounded-md">
          <h4 className="font-medium mb-2">Open Badge v3 Context</h4>
          <p className="text-sm text-muted-foreground">
            Open Badge v3 provides a standard for digital academic credentials. This bachelor's degree badge includes
            detailed achievement information, criteria for earning the degree, and can be cryptographically verified and
            shared with employers, graduate schools, and professional organizations.
          </p>
        </div>

        <Card className="overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Open Badges Specification</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Image
              src="/images/open-badges-spec.png"
              alt="Open Badges Specification"
              width={800}
              height={400}
              className="w-full object-contain"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
