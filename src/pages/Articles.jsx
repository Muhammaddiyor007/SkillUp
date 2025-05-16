import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { FaChevronRight, FaPencilAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "Salom, mening ismim Abstraction",
    description:
      "Kompyuter bilan 0 va 1 lar orqali emas, odam tilida muloqot qilish uchun Assembly tili o’ylab topilgan. Bu dasturchilar hayotini juda osonlashtirgan. Bu menga, yani abstractionga, bitta misol.",
  },
  {
    id: 2,
    title: "Salom, mening ismim Abstraction",
    description:
      "Kompyuter bilan 0 va 1 lar orqali emas, odam tilida muloqot qilish uchun Assembly tili o’ylab topilgan. Bu dasturchilar hayotini juda osonlashtirgan. Bu menga, yani abstractionga, bitta misol.",
  },
  {
    id: 3,
    title: "Salom, mening ismim Abstraction",
    description:
      "Kompyuter bilan 0 va 1 lar orqali emas, odam tilida muloqot qilish uchun Assembly tili o’ylab topilgan. Bu dasturchilar hayotini juda osonlashtirgan. Bu menga, yani abstractionga, bitta misol.",
  },
];

function Articles() {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-6">
      <h3 className="flex font-bold mb-4 items-center gap-2">
        <Link to="/" className="text-[#97989a] hover:underline">
         Dashboard
        </Link>
        <FaChevronRight className="text-[#97989a]" />
        <span>Maqolalar</span>
      </h3>

      <div className="max-w-[800px] mx-auto flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-xl">Maqolalar</h1>
          <Button className="bg-[#0090FF] text-white flex items-center gap-2">
            <FaPlus /> Yangi maqola yozish
          </Button>
        </div>

        {articles.map((article) => (
          <Card key={article.id}>
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{article.description}</CardDescription>
            </CardContent>
            <CardFooter className="gap-3">
              <Link to={""}>
                <Button className="bg-[#EDEDED] flex items-center gap-2">
                  <FaPencilAlt /> O'zgartirish
                </Button>
              </Link>
              <Link to={""}>
                <Button className="bg-[#EDEDED] flex items-center gap-2">
                  View publicly <LuArrowUpRight />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Articles;
