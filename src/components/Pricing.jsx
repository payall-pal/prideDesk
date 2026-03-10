import { useGSAP } from '@gsap/react'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)
const Pricing = () => {

    

    const [active, setActive] = useState(false)
    const isactive = active === true
    
    function change() {
        setActive(isactive ? false : true)
    }
    


    const pricingRef = useRef(null)
    const textRef = useRef(null)

    useGSAP(() => {
        gsap.from(pricingRef.current, {
            y: -7,
            duration: 0.9,
            delay: 0.3,
            opacity: 0,
            scrollTrigger: {
                trigger: ".main6",
                start: "top 50%",
                end: "top 20%",
                scrub: 3
            }
        })
    })







    return (
        <div className='main6 min-h-screen w-full bg-black rounded-2xl px-[7vw] py-[5vw]'>
            <div className='h-[15vw] w-[93vw] text-white flex '>

                <div ref={pricingRef} className='h-full w-1/4 flex gap-4'>
                    <div className='h-[1vw] w-[0.2vw] bg-orange-800 mt-[0.23vw]'></div>
                    <h4 className=' text-lg font-semibold '>Simple. Transparent. Flexible</h4>
                </div>

                <div className='h-full w-3/4 flex flex-col gap-[0.5vw]  mr-[5vw]'>
                    <h2 className='text-[6vw] font-medium leading-none mt-[0.5vw]'>Pricing.</h2>
                </div>

            </div>

            <div className='h-[19vw] w-full text-white flex gap-1.5 '>

                <div className='h-full w-[21vw] bg-white/30 rounded flex flex-col justify-between p-[2vw]'>

                    <div>
                        <h5 className='font-medium text-xl'>Want more traffic and leads?</h5>
                        <h6 className='text-gray-200 w-[11vw] font-medium'>Get marketing and SEO that starts with your goals.</h6>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div onClick={change} className={` transition-all ease duration-75 h-[1.8vw] w-[3vw] relative cursor-pointer rounded-3xl  flex items-center justify-start px-1 ${active ? ["bg-white/40",] : "bg-black"}`}>
                            <div className={`absolute transition-all ease duration-75 h-[1.28vw] w-[1.28vw] rounded-full bg-black left-1 ${active ? "opacity-100" : "opacity-0"}`}></div>
                            <div className={`absolute transition-all ease duration-75  h-[1.82vw] w-[1.82vw] rounded-full bg-white/40 z-10 right-0 top-0 ${active ? "opacity-0" : "opacity-100"} `}></div>
                        </div>
                        <h3 className='font-semibold text-xl'>+$1,490</h3>
                    </div>

                </div>

                <div className='h-full w-[57vw] bg-white/30 rounded flex gap-2'>
                    <div className='h-full w-1/2 p-[1vw] py-[2vw] flex flex-col justify-between'>

                        <div className='flex items-end'>
                            <h2 className='text-4xl font-semibold'>$2,490</h2>
                            <h5 className='text-gray-200'>/project</h5>
                        </div>
                        <div className='border-b border-gray-200 flex items-center justify-between'>
                            <h5 className='text-gray-300 text-[0.8vw] font-medium'>Delivery time</h5>
                            <h5 className='font-medium'>3-4 weeks</h5>

                        </div>
                    </div>

                    <div className='h-full w-1/2 p-[2vw] pt-[2vw] flex flex-col justify-between'>
                        <div className='font-medium'>

                            <div className='flex items-center gap-2'>
                                <div className='h-[0.36vw] w-[0.36vw] rounded-full bg-white'></div>
                                <h4>Homepage + up to 4 inner pages</h4>
                            </div>

                            <div className='flex items-center gap-2'>
                                <div className='h-[0.36vw] w-[0.36vw] rounded-full bg-white'></div>
                                <h4>Design and Development</h4>
                            </div>

                            <div className='flex items-center gap-2'>
                                <div className='h-[0.36vw] w-[0.36vw] rounded-full bg-white'></div>
                                <h4>Mobile-Optimized Design</h4>
                            </div>

                        </div>
                        <button className='bg-white/90 inline-block rounded-4xl py-2 font-medium text-black'>Get in touch</button>
                    </div>
                </div>
            </div>

            <div className='main7 h-[15vw] w-[93vw] text-white flex  py-[5vw]'>

                <div className='h-full w-1/4'>
                    <h4 className=' text-lg text-gray-200'>Looking for more?</h4>
                </div>

                <div className='h-full w-3/4 flex flex-col gap-[0.5vw]  mr-[5vw]'>

                    <h5  className=' text-[2vw] leading-none mt-[0.5vw] text-white/40 w-[45vw]'> <span className='text-white'>Add marketing, SEO or content creation</span> flexible tools  to strengthen your project. We'll shape a solution that fits your business, not ours</h5>

                    <div className='flex gap-2 mt-[2vw]'>
                        <img className='h-[2vw] w-[2vw] rounded-full object-cover' src="https://i.pinimg.com/736x/eb/5e/7a/eb5e7add0f20a41b3c12845b404670b9.jpg" alt="" />
                        <div>
                            <h4 className='text-lg font-medium'>Khushi Saini</h4>
                            <p className='text-sm text-white/70'>Business Manager at Pridedesk</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Pricing
