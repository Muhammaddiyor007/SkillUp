import { Link } from "react-router-dom";
import { FaChevronRight, FaPencilAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { LuArrowUpRight } from "react-icons/lu";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Banner from "../assets/Banner.png";

function Course() {
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
          <h1 className="font-semibold text-xl">Kurslar</h1>
          <Link to={'/new-course'}>
            <Button className="bg-[#0090FF] text-white flex items-center gap-2">
              <FaPlus /> Yangi kurs qo'shish
            </Button>
          </Link>
        </div>
        <Card>
          <CardHeader className="flex gap-4">
            <img src={Banner} alt="" />
            <div className="flex flex-col gap-2">
              <CardTitle>Dizaynda karyera va UX tadqiqotlar</CardTitle>
              <CardDescription>
                Kompyuter bilan 0 va 1 lar orqali emas, odam tilida muloqot
                qilish uchun Assembly tili o’ylab topilgan. Bu dasturchilar
                hayotini juda osonlashtirgan. Bu menga, yani abstractionga,
                bitta misol.
              </CardDescription>
            </div>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <div className="flex gap-3">
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
            </div>
            <div>
              <h2 className="text-[#0090FF] font-semibold">12 000 so'm</h2>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Course;
