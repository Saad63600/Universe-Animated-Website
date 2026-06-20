import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const DestinationsCard = (props) => {
  

  return (
    <div className='mt-[150px] '>
      <div className='  hover:border-red-500 flex flex-col gap-[25px] justify-center items-center   rounded-3xl border-2 border-white  h-[200px] w-[300px]'>
        <h1 className='text-3xl font-extrabold' >{props.name}</h1>
        <img className='h-[100px] w-[100px]' src={props.img} />
      </div>
    </div>
  )
}

export default DestinationsCard
