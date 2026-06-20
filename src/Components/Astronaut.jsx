import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Astronaut = () => {
  const newGsap = useRef()

  useEffect(() => {
    if (newGsap.current) {
      gsap.to(newGsap.current, {
        opacity:0,
        y: -100,
        x:60,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
        delay:0.5
      })
    }
  }, [])



  return (
    <div>
      <div ref={newGsap}  className=" mt-[30px] bg-[url('https://plus.unsplash.com/premium_photo-1685682269454-56667b373aac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXN0cm9uYXV0JTIwYmFja2dyb3VuZCUyMGJsYWNrfGVufDB8fDB8fHww')] rounded-4xl bg-cover  ml-[190px] h-[700px] w-[400px]">

      </div>
    </div>
  )
}

export default Astronaut
