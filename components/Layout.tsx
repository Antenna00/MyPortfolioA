import React, { Component, ReactNode } from 'react'
//fonts
import {Sora} from '@next/font/google';

//font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

//components
import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';
import { AppProps } from 'next/app';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) { //ここのfont後で確認

  return (
    <div key="layout" className={'page bg-site text-white bg-cover bg-no-repeat font-sora relative' }> 
      <TopLeftImg/>
      <Nav />
      <Header />
      {children}
    </div>
  )
}

export default Layout