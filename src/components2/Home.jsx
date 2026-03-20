import image from '../assets/Homepage.png'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef, useState } from "react"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Home = () => {
    
    gsap.registerPlugin(ScrollTrigger)

    const homeRef = useRef(null)
    const imgRef = useRef(null)

    const tl = gsap.timeline()

    useGSAP(()=>{
        tl.from(homeRef.current,{
            scale:0.9,
            opacity:0,
            duration:1.4,
            delay:3,
        })

        tl.to(imgRef.current, {
            opacity: 0,
            duration:0.5,
            delay: 0.3,
            scrollTrigger: {
                trigger:".krishn",
                start: "top 80%",
                end: "top 40%",
                toggleActions: "play none none reverse",
                scrub:3
            }
        })

    })
  return (
    <div ref={homeRef} className='fixed home flex items-center lg:h-[50vw] lg:w-full  justify-center  '>
      <img ref={imgRef} className=' lg:h-[50vw] lg:w-full object-cover' src={image} alt="" />
    </div>
  )
}

export default Home






















// //Krishn.jsx



// //Loader.jsx

// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import { useRef } from 'react'

// const Loader2 = (props) => {


//     const stairParentRef = useRef(null)
//     const pageRef = useRef(null)
//     useGSAP(() => {



//         const tl = gsap.timeline()

//         tl.to(stairParentRef.current,{
//             display: "block"
//         })

//         tl.from(".stair",{
//             height:0,
//             duration:0.3

//         })

//         tl.from(".loader", {
//             y: -20,
//             stagger:{
//                 amount:0.3
//             },
//             opacity:0,
//             delay: 0.1
//         })

//         tl.to(".stair",{
//             y:'-100%',
//             duration: 1,
//             delay: 0.2

//         })

//         tl.to(stairParentRef.current,{
//             display: "none"
//         })

        

//         gsap.from(pageRef.current,{
//         opacity:0,
//         delay:1
//         })
        
//     },stairParentRef.current)

//     return (

//         <div className='bg-black'>
//             <div ref={stairParentRef} className='fixed z-20 stair h-screen w-screen flex gap-2 items-center justify-center text-white  bg-black'>

//             <div className=' h-full w-full items-center justify-center gap-2 flex'>
//                 <div className='loader h-[3vw] w-[1vw] text-xl font-semibold flex items-center justify-center '> P </div>
//                 <div className='loader h-[3vw] w-[1vw] text-xl font-semibold flex items-center justify-center '> R </div>
//                 <div className='loader h-[3vw] w-[1vw] text-xl font-semibold flex items-center justify-center '> I </div>
//                 <div className='loader h-[3vw] w-[1vw] text-xl font-semibold flex items-center justify-center '> D </div>
//                 <div className='loader h-[3vw] w-[1vw] text-xl font-semibold flex items-center justify-center '> E </div>

//                 <div className='loader h-[3vw] w-[1vw] text-xl font-semibold flex items-center justify-center '> D </div>
//                 <div className='loader h-[3vw] w-[1vw] text-xl font-semibold flex items-center justify-center '> E </div>
//                 <div className='loader h-[3vw] w-[1vw] text-xl font-semibold flex items-center justify-center '> S </div>
//                 <div className='loader h-[3vw] w-[1vw] text-xl font-semibold flex items-center justify-center '> K </div>
//             </div>

//             </div>
//             <div ref={pageRef}>{props.children}</div>
//         </div>
        
//     )
// }

// export default Loader2

















// // Quote.jsx


// import React from 'react'

// const Quote = () => {
//   return (
//     <div className='relative lg:h-[38vw] h-[140vw] w-full text-white/72 bg-black p-[9vw] lg:p-[8vw] flex '>
        
//       <div className='absolute top-[-0.7vw] left-0 bg-black rounded-3xl w-full h-[10vw] '></div>
//       <h4 className=' relative lg:text-[3.2vw] text-[9vw] font-sans tracking-wide lg:text-start text-end '>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
//         Who are the divine form of <span className='text-white/85'>Love</span>, their love is beyond the world it's <span className='text-white/90'>internal</span> and comes from <span className='text-white/90'>soul</span>. Who came to &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
//         <div className='absolute lg:right-[38vw] lg:top-[10.7vw]  right-[5.7vw] bottom-[30vw]  lg:w-[8vw] w-[11vw] rounded-4xl'> <img className='  lg:h-[5vw] lg:w-[8vw] h-[7.5vw] w-[11vw] rounded-4xl object-cover object-bottom' src="https://i.pinimg.com/736x/c9/7d/04/c97d04707a4089cb37f61e28419fcc35.jpg" alt="" /></div>
//        just to teach the world <span className='text-white/90'>how to love!</span></h4>
//     </div>
//   )
// }

// export default Quote












// //App.jsx


 