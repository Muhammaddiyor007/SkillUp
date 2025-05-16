import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from 'react-router-dom'

const cards = [
  {
    id: 1,
    title: "Maqolalar",
    description: "Ushbu sahifada barcha maqolalaringizni ko’rishingiz va o’zgartirishingiz mumkin",
    link: "/articles",
    bg: "bg-orange-50",
    border: "border-[#F76B15]",
    btn: "bg-[#EC9455] text-white hover:bg-white hover:text-[#EC9455]",
  },
  {
    id: 2,
    title: "Kurslar",
    description: "Ushbu sahifada barcha kurslarni ko’rishingiz va o’zgartirishingiz mumkin",
    link: "/courses",
    bg: "bg-green-50",
    border: "border-[#047857]",
    btn: "bg-[#047857] text-white hover:bg-white hover:text-[#047857]",
  },
  {
    id: 3,
    title: "Mentorship",
    description: "Siz bilan online muloqot qilmoqchi bo’lganlar aynan shu sahifada ko’rinadi",
    link: "/mentorship",
    bg: "bg-purple-50",
    border: "border-[#5B5BD6]",
    btn: "bg-[#5B5BD6] text-white hover:bg-white hover:text-[#5B5BD6]",
  },
]

const Hero = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-6'>
      <h1 className="text-2xl font-bold mb-6">Muallifning dashboardi</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Card
            key={card.id}
            className={`w-full border ${card.border} ${card.bg}`}
          >
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter>
              <Link to={card.link}>
                <Button className={card.btn}>Sahifaga o'tish</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Hero
