import Bulb from '@/components/Bulb'
import Circles from '@/components/Circles'
import ServiceSlider from '@/components/ServiceSlider'
import React from 'react'

function work() {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8 px-20">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left 
          mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-8">
              My Work <span className='text-accent'>.</span>
            </h2>
            <p className='mb-4 max-w-[400px] mx-auto lg:mx-8'>
            
            </p>
          </div>
          <div className="w-full xl:max-w-[65%]">
            {/* Slider */}
            <ServiceSlider />
          </div>
        </div>
      </div>
      <Bulb />
    </div>
  )
}

export default work