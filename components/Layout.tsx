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
import LamguageButton from './LanguageButton';
import { AppProps } from 'next/app';
import LanguageButton from './LanguageButton';
import { Analytics } from '@vercel/analytics/react';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) { //ここのfont後で確認

  return (
    <div key="layout" className={'page bg-site text-white bg-cover bg-no-repeat font-sora relative' }> 
      <TopLeftImg/>
      <Nav />
      <Header />
      <LanguageButton />
      {children}
      <Analytics />
    </div>
  )
}

export default Layout