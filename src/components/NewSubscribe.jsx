import React from 'react'
import { Button } from './ui/button'
import { LuArrowUpRight } from "react-icons/lu";
import Ramsey from '../assets/Ramsey.svg'
import Esonboyev from '../assets/Esonboyev.svg'
import Shoira from '../assets/Shoira.svg'
import Nargiza from '../assets/Nargiza.svg'

const subscribers = [
  {
    id: 1,
    name: 'Aaron Ramsey',
    time: '3 soat oldin qo’shildi',
    amount: '+ 20 000 so’m',
    purpose: 'Mentorship uchun to’lov',
    image: Ramsey
  },
  {
    id: 2,
    name: 'Jaloliddin Esonboyev',
    time: '5 soat oldin qo’shildi',
    amount: '+ 1 020 000 so’m',
    purpose: 'Kurs uchun to’lov',
    image: Esonboyev
  },
  {
    id: 3,
    name: 'Shoira Mamamamanazarova',
    time: '1 kun oldin qo’shildi',
    amount: '+ 5 000 so’m',
    purpose: 'Hamjamiyat uchun to’lov',
    image: Shoira
  },
  {
    id: 4,
    name: 'Nargiza',
    time: '1 kun oldin qo’shildi',
    amount: '+ 5 000 so’m',
    purpose: 'Hamjamiyat uchun to’lov',
    image: Nargiza
  }
]

const NewSubscribe = () => {
  return (
    <div className='border rounded-xl p-4'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='font-semibold text-lg'>Yangi obunachilar</h2>
        <Button className="border flex items-center gap-1">
          Batafsil <LuArrowUpRight />
        </Button>
      </div>

      <div>
        {subscribers.map((sub, index) => (
          <div
            key={sub.id}
            className={`flex justify-between items-center py-3 ${
              index !== subscribers.length - 1 ? 'border-b' : ''
            }`}
          >
            <div className='flex items-center gap-3'>
              <img src={sub.image} alt={sub.name} className='w-10 h-10 rounded-[5px]' />
              <div>
                <h2 className='font-semibold'>{sub.name}</h2>
                <p className='text-sm text-gray-500'>{sub.time}</p>
              </div>
            </div>
            <div className='text-right'>
              <h4 className='font-medium text-green-600'>{sub.amount}</h4>
              <p className='text-sm text-gray-500'>{sub.purpose}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewSubscribe
