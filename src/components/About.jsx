import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'



gsap.registerPlugin(ScrollTrigger)
const About = () => {


  const sectionRef = useRef(null)
  // const textRef = useRef(null)

  useLayoutEffect(() => {

    const headings = sectionRef.current.querySelectorAll("h3")



    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:sectionRef.current,
        start:"top top",
        end:"bottom top",
        scrub:true,
        pin:true,
        markers:true,
      }
    })

    headings.forEach((heading) => {

      tl.to(heading, {
        color: "white",
        duration:1

      })
    })


  }, [])

  return (
    <div ref={sectionRef} className='h-screen w-full bg-black text-gray-500 flex flex-col items-center px-6 py-[12vw]'>
      <h3  className='text-6xl'>We transform ideas into Digital Experience that</h3>
      <h3  className='text-6xl'>helps you gain more Visibility</h3>
      <h3 className='text-6xl'>We transform ideas into Digital Experience </h3>
      <h3 className='text-6xl'>helps you gain </h3>
      <h3 className='text-6xl'>We transform ideas into Digital Experience that more Visibility</h3>
      <h3 className='text-6xl'>helps gain more Visibility</h3>

    </div>
  )
}

export default About
