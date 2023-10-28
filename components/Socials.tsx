import React from 'react'

// Link
import Link from 'next/link';

// icons
import {RiLinkedinLine, RiFacebookLine, RiGithubLine, RiBallPenLine, RiDiscordLine} from 'react-icons/ri'

const socialGroup = [
  {path: 'https://www.linkedin.com/in/凛-北島-8a802523b/', icon: <RiLinkedinLine />},
  {path: 'https://www.facebook.com/profile.php?id=100008473665545', icon: <RiFacebookLine />},
  {path: 'https://github.com/Antenna00', icon: <RiGithubLine />},
  {path: 'https://discordapp.com/users/275674762410196994', icon: <RiDiscordLine />}, 
  {path: '/', icon: <RiBallPenLine />},
]


function Socials() {
  return (
    <div key="socials" className='flex items-center gap-x-5 text-lg'>
      {socialGroup.map((link, i) => {
        return (<Link target="_blank" key={i} className='hover:text-accent transition-all text-lg' href={link.path}>{link.icon}</Link>)
      })}
      {/* <Link herf=''></Link> */}
    </div>
  )
}

export default Socials