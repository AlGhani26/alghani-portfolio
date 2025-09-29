import React from 'react'
import { Button } from './ui/MovingBorders'
import { workExperience } from '@/data'

const Experience = () => {
  return (
    <div className='py-15' id='experience'>
      <h1 className='heading'>
        My 
        <span className="text-purple"> Work Experience
        </span>
      </h1>
      <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
        {workExperience.map((card) => (
            <Button
                key={card.id}
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius='1.75rem'
                className='flex-1 text-white border-neutral-200 dark:border-slate-800'
            >
                <div className='flex lg:flex-row flex-col lg:item-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                    <img src={card.thumbnail} alt={card.title} className='lg:w-36 md:w-20 w-16 object-contain'/>
                    <div className='lg:ms-5'>
                        <h1 className='text-start text-xl md:text-2xl font-bold'>
                            {card.title}
                        </h1>
                        <p className='text-start text-white-100 mt-3 font-semibold'>
                            {card.desc}
                        </p>
                        <p className="text-start text-sm text-purple-300 italic mt-2">
                            {card.date}
                        </p>
                        </div>
                </div>
            </Button>
        ))}
      </div>
    </div>
  )
}

export default Experience
