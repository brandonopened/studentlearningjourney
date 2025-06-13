import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HighSchoolView({ data }: { data: any }) {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">High School Diploma Badge</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">Recipient</h4>
              <p className="text-base">{data.credentialSubject.name}</p>
            </div>

            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">School</h4>
              <p className="text-base">{data.issuer.name}</p>
              <p className="text-sm text-muted-foreground">
                {data.issuer.address.locality}, {data.issuer.address.region}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">Years Attended</h4>
            <p className="text-base">{data.credentialSubject.result.yearsAttended}</p>
          </div>

          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">Achievement</h4>
            <p className="text-base">{data.credentialSubject.achievement.name}</p>
            <p className="text-sm text-muted-foreground mt-1">{data.credentialSubject.achievement.description}</p>
          </div>

          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">Academic Performance</h4>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <p className="text-sm text-muted-foreground">GPA</p>
                <p className="font-medium">{data.credentialSubject.result.gpa}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Class Rank</p>
                <p className="font-medium">
                  {data.credentialSubject.result.classRank} of {data.credentialSubject.result.classSize}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Credits Earned</p>
                <p className="font-medium">{data.credentialSubject.result.creditsEarned}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Graduation Date</p>
                <p className="font-medium">
                  {new Date(data.credentialSubject.result.graduationDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">Skills Demonstrated</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {data.credentialSubject.achievement.skillsEarned?.map((skill: string, index: number) => (
                <Badge key={index} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">Issue Date</h4>
              <p className="text-base">{new Date(data.issuanceDate).toLocaleDateString()}</p>
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

      <div className="bg-muted p-4 rounded-md">
        <h4 className="font-medium mb-2">Open Badge 3.0 Context</h4>
        <p className="text-sm text-muted-foreground">
          Open Badge 3.0 provides a standard for digital credentials that can be verified and shared across platforms.
          This high school diploma badge from Mt Whitney High School (1997-2001) demonstrates academic achievement with
          a class rank of 16 out of 400 students, and can be verified by colleges, employers, and other institutions
          through cryptographic verification.
        </p>
      </div>
    </div>
  )
}
