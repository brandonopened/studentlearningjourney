import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ElementaryView({ data }: { data: any }) {
  // Function to render mathematical expressions
  const renderMathExpression = (text: string) => {
    return text.replace(/\$\\times\$/g, "×").replace(/\*/g, "")
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">CASE Network Learning Standard</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">School</h4>
            <p className="text-base font-medium">{data.school.name}</p>
            <p className="text-sm text-muted-foreground">{data.school.district}</p>
            <p className="text-sm text-muted-foreground">{data.school.location}</p>
          </div>

          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">Learning Standard</h4>
            <p className="text-base leading-relaxed">{renderMathExpression(data.fullStatement)}</p>
          </div>

          <div className="flex flex-wrap gap-4">
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
              <Badge variant="outline">Grade {data.educationLevel[0]}</Badge>
            </div>

            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">Language</h4>
              <Badge variant="outline">{data.language.toUpperCase()}</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">Identifier</h4>
              <p className="text-xs font-mono bg-muted p-2 rounded">{data.identifier}</p>
            </div>

            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">Last Updated</h4>
              <p className="text-sm">{new Date(data.lastChangeDateTime).toLocaleDateString()}</p>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">URI</h4>
            <p className="text-xs font-mono bg-muted p-2 rounded break-all">{data.uri}</p>
          </div>

          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">Item Type Details</h4>
            <Card className="p-3">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Title:</span>
                  <Badge variant="secondary">{data.CFItemTypeURI.title}</Badge>
                </div>
                <div>
                  <span className="text-sm font-medium">Type URI:</span>
                  <p className="text-xs font-mono mt-1 break-all">{data.CFItemTypeURI.uri}</p>
                </div>
              </div>
            </Card>
          </div>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md">
        <h4 className="font-medium mb-2">CASE Network (1EdTech) Context</h4>
        <p className="text-sm text-muted-foreground">
          The Competency and Academic Standards Exchange (CASE) Network, developed by 1EdTech, provides a standardized
          way to represent and exchange learning standards and competencies. This 3rd grade mathematics standard from
          Community Christian Elementary School demonstrates how educational standards are structured with unique
          identifiers, detailed statements, and metadata for interoperability across educational systems and platforms.
        </p>
      </div>
    </div>
  )
}
