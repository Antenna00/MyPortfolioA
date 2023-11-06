import React from 'react'

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,

} from 'react-icons/rx';

//components
import ServiceSlider from '@/components/ServiceSlider';
import Bulb from '@/components/Bulb';

//framer motion
import {motion} from 'framer-motion';
import { fadeIn } from '@/variants';
import Circles from '@/components/Circles';

function services() {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:items-start items-center gap-x-8 px-20">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left 
          mb-4 xl:mb-0">
            <motion.h2 
            variants = {
              fadeIn('up', 0.3)
            }
            initial = "hidden"
            animate = "show"
            
            className = "h2 xl:mt-6">
              My services <span className='text-accent'>.</span>
            </motion.h2>
            {/* English */}
            <motion.p 
            variants = {
              fadeIn('up', 0.4)
            }
            initial = "hidden"
            animate = "show"

            className='mb-4 max-w-[400px] mx-auto lg:mx-8'>
              Here are my providable services.
            </motion.p>

            {/* Japanese */}
            <motion.p 
            variants = {
              fadeIn('up', 0.4)
            }
            initial = "hidden"
            animate = "show"

            className='mb-4 max-w-[400px] mx-auto lg:mx-8'>
              提供可能サービスの一覧：
            </motion.p>
          </div>
          <motion.div 
            variants = {
              fadeIn('up', 0.6)
            }
            initial = "hidden"
            animate = "show"
            className="w-full xl:max-w-[65%]">
            {/* Slider */}
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  )
}

export default services