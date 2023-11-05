import React from 'react'
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import { BsArrowRight } from 'react-icons/bs';

// next image
import Image from 'next/image';
const workSlider = {
    slides: [
      {
        images: [
          {
            title: 'title',
            path: '/Maintenance.jpg',
          },
          {
            title: 'title',
            path: '/Maintenance.jpg',
          },
          {
            title: 'title',
            path: '/Maintenance.jpg',
          },
          {
            title: 'title',
            path: '/Maintenance.jpg',
          },
        ],
      },
      {
        images: [
          {
            title: 'title',
            path: '/Maintenance.jpg',
          },
          {
            title: 'title',
            path: '/Maintenance.jpg',
          },
          {
            title: 'title',
            path: '/Maintenance.jpg',
          },
          {
            title: 'title',
            path: '/Maintenance.jpg',
          },
        ],
      },
    ],
  };

function WorkSlider() {
  return (
    <Swiper 
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className='h-[240px] sm:h-[500px] xxl:h-[700px]'
      >
        {
          workSlider.slides.map((item, index) => {
            return (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                {item.images.map((image, index) => {
                  return (
                  <div key={index} 
                  className='relative rounded-lg overflow-hidden flex
                  items-center justify-center group'>
                    <div className="flex items-center justify-center relative
                    overflow-hidden group"> 
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt='' />
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent
                       via-[#E612DF] to-[#4A0A83] opacity-0 group-hover:opacity-50
                       transition-all duration-700 drop-shadow-md'> 
                      </div>

                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10
                      group-hover:xl:-translate-y-20 group-hover:xxl:-translate-y-36
                      transition-all duration-300'>
                        {/* title */}
                        <div className="flex items-center gap-x-2 text-white font-bold font-bo
                        text-[30px] tracking-[0.2rem]">
                          {/* title 1 */}
                          <div className='delay-100'>LIVE</div>
                          {/* title 2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0
                          transition-all duration-300 delay-150'>PROJECT</div>
                          <div className='text-[40px] translate-y-[500%] group-hover:translate-y-0
                          transition-all duration-300 delay-200 text-accent'><BsArrowRight /></div>
                        </div>
                      </div>
                  
                    </div>
                  </div>
                  )
                })}
              </div>
            </SwiperSlide>
          )})
        }
      </Swiper>
  )
}

export default WorkSlider