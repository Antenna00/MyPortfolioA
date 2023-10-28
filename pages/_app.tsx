import { AppProps } from 'next/app';
import '../styles/globals.css';
import Layout from '../components/Layout';
import Transition from '../components/Transition';

//router
import {useRouter} from 'next/router';

import {AnimatePresence, motion} from 'framer-motion';
import { MouseEventHandler, ReactNode, createContext, useContext, useEffect, useState } from 'react';

const AnimationContext = createContext<{ animationStat: boolean; setAnimationStat: React.Dispatch<React.SetStateAction<boolean>> } | undefined>(undefined);

export function useAnimationContext() {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimationContext must be used within an AnimationContextProvider');
  }
  return context;
}

function MyApp({ Component, pageProps }: AppProps) {
   const router = useRouter();
   // const [animationComplete, setAnimationComplete] = useState(false);

   // const handleLinkClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
   //    if (!animationComplete) {
   //    e.preventDefault();
   //    }
   // };

//   const handleAnimationStart = () => {
//       setAnimationComplete(true);
//       animationStat = true;
//    };
const [animationStat, setAnimationStat] = useState(false);

// const animationStart = () => {
//     setAnimationStat(true);
//     console.log("animation start");
// }
// const animationEnd = () => {
//     setAnimationStat(false);
//     console.log("animation end");
// }

   return ( 
   <AnimationContext.Provider value={{ animationStat, setAnimationStat }}>
   <Layout>
      <AnimatePresence mode="wait">
         <motion.div key={router.route} className='h-full'>  
            {/* <Transition />    */}
            <Component {...pageProps} />
         </motion.div>
      </AnimatePresence>
   </Layout>
   </AnimationContext.Provider>
   )
}

export default MyApp;
