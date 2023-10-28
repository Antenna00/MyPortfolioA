import React, { useEffect, useState } from 'react'
import Image from 'next/image';

function Avatar() {

  const [imageLayout, setImageLayout] = useState('responsive');

  useEffect(() => {
    // Add an event listener for the 'load' event on the window
    window.addEventListener('load', handlePageReload);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('load', handlePageReload);
    };
  }, []);

  const handlePageReload = () => {
    // Set the image layout to 'responsive' when the page is reloaded
    setImageLayout('responsive');
  };

  
  return (
    <div className='w-full h-full flex my-auto items-center xxl:max-w-[250px] xl:max-w-[200px]'>
      <Image className='relative reflect backdrop-filter' src={'/cat-peek2.png'} width={500} height={800} alt='' ></Image>
    </div>
  )
}

export default Avatar