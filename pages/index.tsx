// next image
import Image from "next/image";

// components
import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from "../variants";

// variants

export default function Home() {
  return (
    <div className='bg-primary/60 h-full'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto xl:mx-[120px] xxl:ml-[300px]'>
          {/* title */}
          <motion.div variants={fadeIn('down', 0.2)} 
          initial='hidden' animate='show' exit='hidden' className='xl:flex xl:text-center z-[5]'>
            <h1 className='h1'>
              <span className='underline'>Rin Kitajima</span> <br /> 
              <span className='text-accent bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_6px] bg-no-repeat bg-bottom'>Portofolio</span>
            </h1>
          </motion.div>
          {/* subtitle */}
          <motion.p variants={fadeIn('down', 0.3)} 
          initial='hidden' animate='show' exit='hidden' 
          className='max-w-sm x:max-w-xl mx-auto xl:mx-0 mb-6 xl:mb-16 z-[5]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Amet assumenda illum, similique reiciendis facere necessitatibus 
            illo velit quasi enim natus, sequi impedit eligendi ratione totam cupiditate 
            ipsum laboriosam odio eaque.
          </motion.p>
          {/* btn */}
          <div className='flex justify-center xl:hidden z-[5]'>
            <ProjectsBtn />
          </div>
          <motion.div variants={fadeIn('down', 0.4)} 
          initial='hidden' animate='show' exit='hidden' className='hidden xl:flex z-[5]'>
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className='w-full h-full absolute right-0 bottom-0'>
        {/* bg-img */}
        <div className="bg-none xxl:bg-paintsplash xl:bg-paintsplash1200  xxl:bg-cover
        xl:bg-right xl:bg-contain xl:bg-no-repeat absolute 
        w-full h-full mix-blend-color-dodge hue-rotate-90"></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img == none for now*/}
        
      </div>
    </div>
  )
}
