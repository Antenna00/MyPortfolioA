import React from 'react'


// swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,

} from 'react-icons/rx';

// modules
import  { Pagination } from 'swiper/modules';

// interface
interface serviceInfo {
  icon: JSX.Element,
  title: String,
  description: String,
}

// service data
export const serviceData:serviceInfo[] = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Lorem ipsum"
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Lorem ipsum"
  },
  {
    icon: <RxReader />,
    title: "Development",
    description: "Lorem ipsum"
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Lorem ipsum"
  },
]

function ServiceSlider() {
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
          serviceData.map((item, index) => {
            return (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
                {/* Icon */}
                <div className="text-4xl text-accent mb-4">{item.icon}</div>
                {/* title & description */}
                <div className="mb-8">
                  <div>{item.title}</div>
                  <p>{item.description}</p> 
                </div>
                {/* arrow */}
                <div className='text-3xl'>
                  <RxArrowTopRight className="group-hover:rotate-45
                  group-hover:text-accent transition-all duration-300"/>
                </div>
              </div>
            </SwiperSlide>
          )})
        }
      </Swiper>
  )
}

export default ServiceSlider