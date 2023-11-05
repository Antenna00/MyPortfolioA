/* eslint-disable react/jsx-key */

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaWordpress,
    FaFigma,
    FaJava,
    FaRust
  } from "react-icons/fa";
  
  import {
    SiNextdotjs,
    SiFramer,
    SiAdobexd,
    SiAdobephotoshop,
    SiSpringboot,
    SiPostgresql,
    SiTypescript,
    SiCsharp
  } from "react-icons/si";

  import {
    GrMysql
  } from "react-icons/gr"
  
  interface InfoWithIcons {
    id: number;
    title: string;
    info: {
      title: string;
      icons: JSX.Element[];
    }[]
  }
  
  interface InfoWithTitleAndStage {
    id: number;
    title: string;
    info: {
      title: string;
      stage: string;
    }[]
  }

  //  data
  const aboutData: (InfoWithIcons | InfoWithTitleAndStage)[] = [
    {
      id: 0,
      title: 'skills',
      info: [
        {
          title: 'Web Development',
          icons: [
            <FaHtml5 />,
            <FaCss3 />,
            <FaJs />,
            <SiTypescript />,
            <FaReact />,
            <SiNextdotjs />,
            <SiFramer />,
          ],
        },
        {
          title: 'Backend Development',
          icons: [<FaJava />, <SiCsharp />, <FaRust />, <SiPostgresql />, <GrMysql />],
        },
      ],
    },
    
    {
      id: 1,
      title: 'awards',
      info: [
        {
          title: '',
          stage: '',
        },
        {
          title: '',
          stage: '',
        },
      ],
    },
    {
      id: 2,
      title: 'experience',
      info: [
        {
          title: 'IT Consultant & ServiceNow Engineer',
          stage: '2010 - 2012',
        },
        {
          title: 'Java Web Application Engineer',
          stage: '2020 - 2022',
        },
        {
          title: 'English Tutor',
          stage: '2017 - 2020',
        },
      ],
    },
    {
      id: 3,
      title: 'education',
      info: [
        {
          title: 'BSc Env Science - University of East Anglia',
          stage: '2017-2020',
        },
        {
          title: 'International Baccalaureate',
          stage: '2012-2017',
        },
      ],
    },
  ];
  
  // components
  import Avatar from "@/components/Avatar";
  import Circles from "@/components/Circles";
  import CountUp from "react-countup";

  // framer motion
  import { motion } from "framer-motion";
  import { fadeIn } from "@/variants";

  import { useRef, useState } from "react";
  import { IconType } from "react-icons";
import { useLanguageContext } from "../_app";

  const About = () => {
    const [index, setIndex] = useState(0);
    const {languageStat, setLanguageStat} = useLanguageContext();

    return (
      <div className='h-full bg-primary/30 py-32 text-center xl:text-left select-none'>
        <Circles />
        <motion.div className='hidden xl:flex absolute bottom-0 xl:z-10' variants={fadeIn('right', 0.2)}
        initial='hidden' animate='show' exit='hidden'>
          <Avatar />
        </motion.div>
        {/* Main Contents */}
        <div className="container mx-auto ssm:pb-5 h-full xl:gap-x-[10rem] flex relative flex-col items-center justify-center xl:flex-row xxl:px-[25rem] xl:px-[7rem] xl:z-40 gap-x-6">
          {/* Text */}
          <div className="xl:flex-1 flex flex-col justify-center xl:justify-center">
            <motion.h2 className="h2" variants={fadeIn('right', 0.2)}
            initial='hidden' animate='show' exit='hidden'>
              About <span className="text-accent">Me</span>
            </motion.h2>
            <motion.p className="max-w-[500px] xl:max-w-[800px] xl:mx-0 xl:text-left xl:px-0 mb-6 mx-auto ssm:text-base sssm:text-sm"
            variants={fadeIn('right', 0.4)}
            initial='hidden' animate='show' exit='hidden'>
              Three years ago, I began my career as a developer. <br />
              Since then, I have been exploring the fascinating world of software development.
              I have built up my developer experiences in multiple projects in Japanese Companies and some consultancy experience in current project.
              And also in my personal time, I spend substantial amount of time improving my skill sets to improve my development skill.
              I currently have strong interest in web development and frontend field.
            </motion.p>
            {/* counters */}
            <motion.div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
            variants={fadeIn('right', 0.6)}
            initial='hidden' animate='show' exit='hidden'>
              <div className="flex flex-1 xl:gap-x-6">
                {/* experience */}
                <div className="relative flex-1 after:w-[1px] after:h-full">
                  <div className="relative text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] top-[2.0rem]">
                    English & Japanese Bilingual
                  </div>
                </div>
                <div className="relative flex-1 after:w-[1px] after:h-full">
                  <div className="relative text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  <div className="text-2xl xl:text-4xl font-extrabold text-yellow-300 mb-2">
                    S
                  </div>
                    Rank in Paiza
                  </div>
                </div>
                <div className="relative flex-1 after:w-[1px] after:h-full
                after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={3} duration={5}></CountUp>+ 
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Years of experience
                  </div>
                </div>
              </div>
            </motion.div>
                       
          </div>
          {/* info */}

          {/*I could add border line here */}

          <motion.div className="flex flex-col w-full max-w-[48%] xl:pb-[100px]"
           variants={fadeIn('left', 0.6)}
           initial='hidden' animate='show' exit='hidden'>
            <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 relative sm:-left-0 ssm:-left-[2.5rem] sssm:-left-[4rem] items-start'>
              {aboutData.map((item, itemIndex) => {
                return (
                  <div key={item.id} 
                    className={`
                    ${index === item.id && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} 
                    cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
                    after:absolute after:bg-white after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(item.id)}
                  >
                    {item.title}
                  </div>
                )
              })}
            </div>
            <div className='py-2 xl:py-6 flex flex-col gap-y-2 
            xl:gap-y-4 items-center xl:items-start'>
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                <div key={itemIndex} className="flex-1 flex flex-col md:flex-row 
                max-w-max gap-x-2 items-center text-white/60">
                  {/* title */}
                  <div>{item.title}</div>
                  <div className="hidden md:flex">:</div>
                  <div>{("stage" in item) && (
                      <div>
                        {item.stage}
                      </div>
                    )}
                  </div>
                  <div className="flex gap-x-4">
                    {/*icons */}
                    {("icons" in item) && (
                      item.icons.map((icon, itemIndex) => {
                        return <div key={itemIndex} className="text-2xl text-white">{icon}</div>
                      })
                    )}
                  </ div>
                </div>
                )
              })}
            </div>
          </motion.div>
        </div>       
      </div>
    )
  };
  
  export default About;