import React from 'react'
import Image from 'next/image'

function Bulb() {
  return (
    <div className='absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge 
    animate-pulse duration-75 z-10 w-[200]px xl:w-[260px]'>
      <Image src={"/bulb.png"} alt="" 
      width={260} height={200} className=''/>
    </div>
  )
}

export default Bulb