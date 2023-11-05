import React, { useRef, useState } from 'react'

// components
import Circles from '@/components/Circles'

// icons
import { BsArrowRight } from 'react-icons/bs'

//framer
import { motion } from 'framer-motion'

import { fadeIn } from '@/variants'
import { constants } from 'fs'


function Contact() {

  // Ref
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [sentStat, setSentStat] = useState(false);

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(nameRef.current?.value);
    const formElement = document.getElementById('form1');

    let data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      subject: subjectRef.current?.value,
      message: messageRef.current?.value,
    }

    await fetch("api/sendMail", {
     method: "POST",
     headers: {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json",
     },
     body: JSON.stringify(data),
    }).then((res) => {
      if(res.status === 200) {
        console.log("メール送信成功");
        formElement?.remove();
        setSentStat(true);
      }
    })
  }

  const containerStyle = {
    display: 'flex', // コンテナの幅を設定
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left 
      flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <h2 className='h2 text-center mb-12'> 
            Let&apos;s <span className="text-accent">connect.</span>
          </h2>
          <form id="form1" name="form1" className='flex-1 flex flex-col gap-6 w^full mx-auto'
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
            {/* input group */}
            <div className='flex gap-x-6 w-full'>
              {/* name */}
              <input ref={nameRef} type='text' placeholder='name' className='input'></input>
              {/* sender's email */}
              <input ref={emailRef} type='text' placeholder='email' className='input'></input>
            </div>
            {/* subject */}
            <input ref={subjectRef} type='text' placeholder='Subject' className='input'></input>
            {/* message */}
            <textarea ref={messageRef} placeholder='message' className='textarea'></textarea>
            <button className='btn rounded-full border border-white/50 max-w-[170px]
            px-8 transition-all duration-300 flex items-center justify-center overflow-hidden
            hover:border-accent group' type='submit'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0
              transition-all duration-500'>Let&apos;s talk</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex
              group-hover:-translate-y-0 group-hover:opacity-100 stransition-all duration-300
              absolute text-[22px]'/>
            </button>
          </form>
          {/* form */}
          <div className={`${sentStat ? '' : 'hidden'} flex visible`}> 
            メッセージ送信完了しました。
            Message has been sent. 
          </div>
        </div>
      </div>          
    </div>
  )
}

export default Contact