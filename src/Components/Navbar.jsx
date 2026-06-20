import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Navbar = () => {
    const navRef = useRef()

    useEffect(() => {
        if (navRef.current) {
            gsap.from(navRef.current.children, {
                y: -80,
                delay: 0.5,
                opacity: 0,
                duration: 2,
                ease: 'power2.out',
                stagger: 0.2,
            })
        }
    }, [])
    


    return (
        <div  className='flex m-15 gap-20 justify-end '>
            <div ref={navRef} className="navbars font-semibold cursor-pointer flex gap-[30px] ">
                <h4 className='hover:border-2 h-fit w-fit px-3 py-1 rounded-4xl border-red-500 hover:bg-pink-400' >Home</h4>
                <h4 className='hover:border-2 h-fit w-fit px-3 py-1 rounded-4xl border-red-500 hover:bg-pink-400' >Destinations</h4>
                <h4 className='hover:border-2 h-fit w-fit px-3 py-1 rounded-4xl border-red-500 hover:bg-pink-400' >Missions</h4>
                <h4 className='hover:border-2 h-fit w-fit px-3 py-1 rounded-4xl border-red-500 hover:bg-pink-400' >Gallery</h4>
                <h4 className='hover:border-2 h-fit w-fit px-3 py-1 rounded-4xl border-red-500 hover:bg-pink-400' >About</h4>
                <h4 className='hover:border-2 h-fit w-fit px-3 py-1 rounded-4xl border-red-500 hover:bg-pink-400' >Contact</h4>
            </div>
            <button className='h-fit cursor-pointer active:scale-95 w-fit border-2 border-black rounded-2xl bg-orange-300 px-4 py-2'>Book Journey </button>

        </div>
    )
}

export default Navbar
