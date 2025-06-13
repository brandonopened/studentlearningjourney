import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PreKView({ data }: { data: any }) {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Head Start Early Learning Outcome</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">Learning Goal</h4>
            <p className="text-base">{data.fullStatement}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">Coding Scheme</h4>
              <Badge variant="outline">{data.humanCodingScheme}</Badge>
            </div>

            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">Type</h4>
              <Badge variant="outline">{data.CFItemType}</Badge>
            </div>

            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">Education Level</h4>
              <Badge variant="outline">{data.educationLevel.join(", ")}</Badge>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">Last Updated</h4>
            <p className="text-sm">{new Date(data.lastChangeDateTime).toLocaleDateString()}</p>
          </div>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md">
        <h4 className="font-medium mb-2">CASE Framework Context</h4>
        <p className="text-sm text-muted-foreground">
          The Competency and Academic Standards Exchange (CASE) framework provides a way to exchange information about
          learning standards and competencies. This Head Start example shows how early childhood learning goals are
          structured in a standardized format.
        </p>
      </div>
    </div>
  )
}
