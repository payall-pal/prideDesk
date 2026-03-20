

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

const images = [
    "https://images.unsplash.com/photo-1773686044655-892102615409?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1773613007108-59908c91e6c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1744607693346-5d31a2a15733?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1773167558749-ab4443c75f37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1773423389979-b28b469967f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1773686044655-892102615409?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1773613007108-59908c91e6c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1744607693346-5d31a2a15733?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1773167558749-ab4443c75f37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1773423389979-b28b469967f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",

]

const CircularGallery = () => {

    const circleRef = useRef(null)

    useEffect(()=>{
        const el = circleRef.current
   


    gsap.fromTo(
        el,
        {
            scale: 0.6,
            rotate: 0,
            opacity: 0,
        },
        {
            scale:1.2,
            rotate:360,
            opacity: 100,
            ease: 'none',
            scrollTrigger: {
                trigger:el,
                start: "top 80%",
                end: "top 20%",
                scrub: true
            }
        }
    )

 }, [])

        const radius = 180
        const total = images.length




    return (
        <div className="h-screen flex items-center justify-center bg-black">
        <div ref={circleRef} className='relative w-125  h-125'>


           <div className="absolute inset-0 flex  items-center justify-center text-white text-center">
                 <p className="text-xl font-semibold">1st time creating </p>
             </div>

             {images.map((img, index) =>{
                const angle = (index / total ) * 360

                return (
                    <div key={index} className="absolute top-1/2 left-1/2  transition-all duration-300" style={{transform: `rotate(${angle}deg)  translate(${radius}px) rotate(-${angle}deg)`,}}>
                        <img src={img} alt="" className="w-16 h-16 object-cover rounded-lg hover:scale-125 hover:z-10 transition-transform duration-300 cursor-pointer shadow-lg " />
                    </div>
                 )
            })}
         </div>
      
     </div>

         )
}

export default CircularGallery




// const CircularGallery = () => {

    

//     const radius = 200
//     const total = images.length


//   return (
//     
//   )
// }

// export default CircularGallery
