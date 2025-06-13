import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function MiddleSchoolView({ data }: { data: any }) {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Student Academic Record</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">Student</h4>
              <p className="text-base">
                {data.student.firstName} {data.student.lastName}
              </p>
            </div>

            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">Grade Level</h4>
              <Badge variant="outline">{data.academicSession.name}</Badge>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">School</h4>
            <p className="text-base font-medium">{data.school.name}</p>
            <p className="text-sm text-muted-foreground">{data.school.district}</p>
            <p className="text-sm text-muted-foreground">{data.school.location}</p>
          </div>

          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">Academic Session</h4>
            <p className="text-sm">
              {data.academicSession.schoolYear} • {data.academicSession.type}
            </p>
            <p className="text-xs text-muted-foreground">
              {new Date(data.academicSession.startDate).toLocaleDateString()} -{" "}
              {new Date(data.academicSession.endDate).toLocaleDateString()}
            </p>
          </div>

          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">Courses</h4>
            <div className="space-y-2 mt-2">
              {data.courses.map((course: any, index: number) => (
                <Card key={index} className="p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{course.title}</p>
                      <p className="text-sm text-muted-foreground">{course.subject}</p>
                    </div>
                    <Badge>{course.grade}</Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md">
        <h4 className="font-medium mb-2">OneRoster Context</h4>
        <p className="text-sm text-muted-foreground">
          OneRoster is a standard for securely sharing class rosters, course information, and grades between systems.
          This example shows Brandon's academic record from La Joya Middle School in the Visalia Unified School
          District, demonstrating how student academic records are structured for seamless transfer of information
          between schools and educational platforms.
        </p>
      </div>
    </div>
  )
}
