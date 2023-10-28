import React, { useState, useEffect, MouseEventHandler, LinkHTMLAttributes, ReactPropTypes, useContext } from 'react'
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

export const navData = [
  { name: 'Home', path:'/', icon: <HiHome />},
  { name: 'About', path:'/about', icon: <HiUser />},
  { name: 'Services', path:'/services', icon: <HiRectangleGroup />},
  { name: 'Work', path:'/work', icon: <HiViewColumns />},
  { name: 'Testimonials', path:'/testimonials', icon: <HiChatBubbleBottomCenterText />},
  { name: 'Contact', path:'/contact', icon: <HiEnvelope />},
]

// next link
import Link from 'next/link';

// next router
import { useRouter } from 'next/router';
import { useAnimationContext } from '@/pages/_app';

function Nav() {
  const router = useRouter();
  const pathname = router.pathname;
  const { animationStat, setAnimationStat } = useAnimationContext();
  
  
  return (
    <nav className={`${animationStat ? 'hidden ' : ''} flex flex-col items-center gap-y-4 xl:justify-center 
    fixed h-max bottom-0 top-0 mt-auto xl:right-[2%] z-50 w-full 
    xl:w-16 xl:max-w-md xl:h-screen`}>
    {/* inner */}
      <div className='flex w-full items-center justify-between 
      xl:flex-col gap-y-10 px-4 xl:justify-center 
      md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/20 marker:backdrop-blur-sm  
      text-3xl xl:text-xl xl:rounded-full xl:w-[80px]'>
        {navData.map((link, i) => {
          return (
            <Link 
              className={
                `${link.path === pathname && 'text-accent ' 
              } relative flex items-center group hover:scale-150 hover:text-accent transition-all duration-300`}
              href={link.path} 
              key={i}
              shallow={true}
            >
              {/* tooltip */}
              <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                <div className='bg-white relative flex text-primary items-center p-[6px] pb-2 rounded-[2px] h-[20px]'>
                  {/* triangle */}
                  <div className='text-[12px]'>{link.name}</div>
                  <div className='border-solid border-l-white border-l-8 
                  border-y-transparent
                  border-y-[6px] border-r-0 absolute -right-2'>
                  </div>
                </div>              
                {/* triangle */}
              </div>
              {/* icon */}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  )

}

export default Nav