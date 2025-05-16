import React from 'react'
import {
  Card,
  CardDescription,
} from "@/components/ui/card"

const reports = [
  {
    id: 1,
    description: "Umumiy obunachilar",
    amount: "1200 ta",
  },
  {
    id: 2,
    description: "Bugungi obunachilar",
    amount: "2 ta ",
  },
  {
    id: 3,
    description: "Umumiy ishlangan pul",
    amount: "2 430 000 so'm",
  },
  {
    id: 4,
    description: "Bugungi ishlangan pul",
    amount: "20 000 so'm",
  },
]

const Report = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-6'>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {reports.map((report) => (
      <Card key={report.id} className="bg-[#FAFBFC] p-4">
        <div className="flex flex-col gap-3">
          <CardDescription className="flex-1">
            {report.description}
          </CardDescription>
          <CardDescription className="font-semibold whitespace-nowrap">
            {report.amount}
          </CardDescription>
        </div>
      </Card>
    ))}
  </div>
</div>

  )
}

export default Report
