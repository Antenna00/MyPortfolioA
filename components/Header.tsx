import React from 'react'

// next image
  import Image from "next/image";

// next link
  import Link from "next/link";

// components
import Socials from '../components/Socials';
import LamguageButton from './LanguageButton';

function Header() {
  return (
    <header className='absolute z-20 w-full flex items-center px-16 xl:top-0 -top-8 xl:h-[90px] '>
      <div className='container mx-auto'> 
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-4 py-8'>
          {/* logo */}
          <Link className='' href='/'><Image src={'/logo.svg'} alt='' width={300} height={50}></Image></Link>
          <Socials />
        </div>
      </div>
    </header>
  )
}

export default Header