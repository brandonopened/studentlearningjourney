import type { ReactNode } from "react"

export interface JourneyData {
  id: string
  title: string
  year: string
  description: string
  standard: string
  icon: ReactNode
  prettyView: ReactNode
  rawData: any
}
