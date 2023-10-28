import React from 'react'

// next image
import Image from 'next/image';

// next link
import Link
 from 'next/link';
// icons
import { HiArrowRight } from 'react-icons/hi2';

function ProjectsBtn() {
  return ( //ここもう少しcircled-text細くしたほうがきれいかも？
    <div className='mx-auto xl:mx-0 relative -top-8'>　
      <Link href='/work' 
      className='w-[185px] h-[185px] flex justify-center items-center 
      bg-circleStar bg-cover bg-center bg-no-repeat group'>
        <Image src='/circled-text.png' 
        width={141} 
        height={148} 
        alt=''
        className='animate-spin-slooow mix-blend-color-dodge h-full w-full max-w-[141px] max-h-[150px]'/>
        <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 group-hover:text-accent transition-all duration-300'/>
      </Link>
    </div>
  )
}

export default ProjectsBtn