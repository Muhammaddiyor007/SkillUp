import React from 'react'
import Chart from './Chart'
import NewSubscribe from './NewSubscribe'

const Statistics = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-6 flex justify-between gap-4'>
      <div className='w-[60%]'>
        <Chart />
      </div>
      <div className='w-[40%]'>
        <NewSubscribe />
      </div>
    </div>
  )
}

export default Statistics
