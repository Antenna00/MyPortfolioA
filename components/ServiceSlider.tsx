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
              <div className="bg-[rgba(65,47,123,0.15)] h-[500px] rounded-lg px-6 py-8 flex xl:flex-col 
              gap-x-6 xl:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
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