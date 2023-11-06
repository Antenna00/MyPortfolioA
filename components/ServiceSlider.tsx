import React, { RefObject, createContext, createRef, useEffect, useRef, useState } from 'react'

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { type Swiper as SwiperRef } from 'swiper';

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
import  { Controller, Pagination } from 'swiper/modules';
import { clearLine } from 'readline';
import { useSwiper } from 'swiper/react';
import { useAnimationContext } from '@/pages/_app';
import { useRouter } from "next/router";


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
  const swiperRef = useRef<SwiperRef>()
  const {animationStat, setAnimationStat} = useAnimationContext();
  const router = useRouter();
  let beforeMount = false;

  const destoryProcess = () => {
    console.log("destroy")
    swiperRef.current?.destroy(true, true)
    swiperRef.current?.removeAllSlides();
  }
  useEffect(() => {

    return () => {
      router.events.off("routeChangeStart", destoryProcess);
      destoryProcess();
      console.log("unmounting component...");
    }
    //console.log("destroyed")
   //swiperRef.current?.destroy(true,true)
    }, []);
  

  return (
    <Swiper 
    id="swiper-container"
      spaceBetween={0}
      pagination={{
        clickable: true
      }}
      modules={[Controller, Pagination]}
      className='h-[240px] sm:h-[500px] xxl:h-[700px]'
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
    }}
      onBeforeDestroy={() => {
      beforeMount = true;}}
      key='swiper'
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