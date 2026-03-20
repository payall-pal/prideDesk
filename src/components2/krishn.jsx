
import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import krishnImg from '../assets/krishn-removebg-preview.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Krishn = () => {
    
    gsap.registerPlugin(ScrollTrigger)

    const krishnRef = useRef()
    const textRef = useRef()

    
    const tl = gsap.timeline()


    useGSAP(()=>{
      tl.to(krishnRef.current, {
            opacity: 0,
            duration:0.5,
            delay: 0.3,
            scrollTrigger: {
                trigger:".krishn",
                start: "top 30%",
                end: "top -20%",
                toggleActions: "play none none reverse",
                scrub:3
            }
        })

       
    })
     
    
    

  return (
    <div className='krishn relative h-[50vw] w-full  text-white/90 flex items-center justify-center p-[4vw]'>
      <img ref={krishnRef} className='absolute top-0 ] object-cover object-center' src={krishnImg} alt="" />
     


      {/* <img  className='h-[50vw] w-[70vw] object-cover ' src="https://i.pinimg.com/736x/a6/5b/5d/a65b5d6f508d8f2a34b5e6ccdd7e6fef.jpg" alt="" /> */}


    </div>
  )
}

export default Krishn