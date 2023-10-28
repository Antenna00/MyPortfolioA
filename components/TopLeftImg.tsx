import React from 'react';
import Image from "next/image";

function TopLeftImg() {
  return (
    <div className='absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] select-none'>
      <Image src='/top-left-img.png' width={400} height={400} alt=''/>
    </div>
  )
}

export default TopLeftImg