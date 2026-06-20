import { useGSAP } from '@gsap/react'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Hero = () => {
  const paraRef= useRef()
  
  useEffect(()=>{
    gsap.from(paraRef.current,{
      x:100,
      duration:1,
      repeat:-1,
      yoyo:true,
    })
  })
  const mainHeadRef=useRef()
  useEffect(()=>{
    gsap.from(mainHeadRef.current,{
      duration:2,
      delay:0.5,
      y:-100,
      x:100,
      repeat:-1,
      yoyo:true,
    })
  })
  const childHeadRef=useRef()
  useEffect(()=>{
    gsap.from(childHeadRef.current,{
      duration:2,
      delay:0.5,
      y:-100,
      x:100,
      repeat:-1,
      yoyo:true,
    })
  })

  return (
    <div className='ml-[100px] mt-[80px]' >
      <h1 ref={mainHeadRef} className='text-[100px] font-serif font-semibold ' >BEYOND THE </h1>
      <h1 ref={childHeadRef} className='text-[100px]  ml-[0px] font-serif font-semibold'>STARTS</h1>
      <p ref={paraRef} className='font-semibold' >Experience the future of space tourism.
Travel across galaxies and discover
the unknown.</p>
    <div className='flex justify-between'>
      <button className='h-fit  cursor-pointer w-fit bg-amber-400 border-2 border-black px-4 py-1 font-bold rounded-2xl mt-[25px]' >Start Journey 🚀</button>
      <button className='h-fit cursor-pointer  w-fit bg-amber-400 border-2 border-black px-4 py-1 font-bold rounded-2xl mt-[25px]' >Watch Mission 🚀</button>
    </div>
    </div>
  )
}

export default Hero
