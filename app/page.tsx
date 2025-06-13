import Timeline from "@/components/timeline"
import { educationalJourneyData } from "@/lib/data"

export default function Home() {
  return (
    <div className="container mx-auto py-10 px-4">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Educational Journey Timeline</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Exploring data interoperability standards across a student's educational journey from Pre-K through career
        </p>
      </header>
      <main>
        <Timeline journeyData={educationalJourneyData} />
      </main>
    </div>
  )
}
