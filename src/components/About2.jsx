import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'

const About2 = () => {


    const aboutRef = useRef()
    useGSAP(() => {
        gsap.from(aboutRef.current,{
            y:-8,
            duration:0.7,
            delay:0.3,
            opacity:0,
            scrollTrigger:{
                trigger: ".main",
                start: "top 50%",
                end: "top 30%,",
                scrub:3
            }
        })
    })



    return (
        <div className='main min-h-screen w-screen bg-gray-200 py-[3vw] px-[7vw]'>
            <div className='h-[15vw] w-[93vw] text-black flex '>
                <div ref={aboutRef} className=' h-full w-1/4 flex  gap-4'>
                    {/* <div className='h-[0.5vw] w-[0.5vw] bg-black rounded-full mt-[0.44vw]'></div> */}
                    <div className='h-[1vw] w-[0.2vw] bg-orange-800 mt-[0.25vw]'></div>
                    <h4 className=' text-lg font-semibold '>About us</h4></div>


                <div className='h-full w-3/4 flex flex-col gap-[0.5vw]  mr-[5vw]'>
                    <h4 className='text-xl font-semibold ml-[0.3vw]'>Pridedesk</h4>

                    <h2 className='text-[2.8vw] font-medium leading-none mt-[0.5vw]' >How we launch <span className='text-gray-400'>websites<br />and marketing campaigns.</span></h2>
                    {/* <p className='text-[0.9vw] font-normal '>Lorem ipsum dolor sit amet consectetur, adipisicing  <br /></p> */}
                </div>

            </div>

            <div className='h-[7vw] w-full   flex gap-0.5'>
                <div className='h-full w-1/4 rounded-xl bg-gray-50 py-[0.5vw] px-[1.5vw] flex flex-col gap-5'>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-0.5'>
                            <div className='h-[0.5vw] w-[0.5vw] bg-black rounded-full mt-[0.44vw]'></div>
                            <div className='h-[0.5vw] w-[0.5vw] bg-gray-400 rounded-full mt-[0.44vw]'></div>
                            <div className='h-[0.5vw] w-[0.5vw] bg-gray-400 rounded-full mt-[0.44vw]'></div>
                            <div className='h-[0.5vw] w-[0.5vw] bg-gray-400 rounded-full mt-[0.44vw]'></div>
                        </div>
                        <h5 className='text-sm text-gray-400'>01</h5>
                    </div>
                    <div className='flex gap-6'>
                        <img className='h-[2.3vw] w-[2.6vw] rounded object-cover' 
                       src='https://images.unsplash.com/photo-1771777400683-8614965bfce5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D' alt="" />
                        <h5 className='text-[1vw] font-medium '>The team that communicates every step</h5>
                    </div>
                </div>

                <div className='h-full w-1/4 rounded-xl bg-gray-50 py-[0.5vw] px-[1.5vw] flex flex-col gap-5'>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-0.5'>
                            <div className='h-[0.5vw] w-[0.5vw] bg-black rounded-full mt-[0.44vw]'></div>
                            <div className='h-[0.5vw] w-[0.5vw] bg-black rounded-full mt-[0.44vw]'></div>
                            <div className='h-[0.5vw] w-[0.5vw] bg-gray-400 rounded-full mt-[0.44vw]'></div>
                            <div className='h-[0.5vw] w-[0.5vw] bg-gray-400 rounded-full mt-[0.44vw]'></div>
                        </div>
                        <h5 className='text-sm text-gray-400'>02</h5>
                    </div>
                    <div className='flex gap-6'>
                        <img className='h-[2.3vw] w-[2.6vw] rounded object-cover' 
                       src='https://plus.unsplash.com/premium_photo-1749666992791-53362d6dc507?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8' alt="" />
                        <h5 className='text-[1vw] font-medium '>Customized solution for your unique needs</h5>
                    </div>
                </div>

                <div className='h-full w-1/4 rounded-xl bg-gray-50 py-[0.5vw] px-[1.5vw] flex flex-col gap-5'>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-0.5'>
                            <div className='h-[0.5vw] w-[0.5vw] bg-black rounded-full mt-[0.44vw]'></div>
                            <div className='h-[0.5vw] w-[0.5vw] bg-black rounded-full mt-[0.44vw]'></div>
                            <div className='h-[0.5vw] w-[0.5vw] bg-black rounded-full mt-[0.44vw]'></div>
                            <div className='h-[0.5vw] w-[0.5vw] bg-gray-400 rounded-full mt-[0.44vw]'></div>
                        </div>
                        <h5 className='text-sm text-gray-400'>03</h5>
                    </div>
                    <div className='flex gap-6'>
                        <img className='h-[2.3vw] w-[2.6vw] rounded object-cover'
                        src='https://images.unsplash.com/photo-1771199918875-58c95dbee206?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D' alt="" />
                        <h5 className='text-[1vw] font-medium '>transparent pricing with no hidden fees</h5>
                    </div>
                </div>

                <div className='h-full w-1/4 rounded-xl bg-gray-50 py-[0.5vw] px-[1.5vw] flex flex-col gap-5'>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-0.5'>
                            <div className='h-[0.5vw] w-[0.5vw] bg-black rounded-full mt-[0.44vw]'></div>
                            <div className='h-[0.5vw] w-[0.5vw] bg-black rounded-full mt-[0.44vw]'></div>
                            <div className='h-[0.5vw] w-[0.5vw] bg-black rounded-full mt-[0.44vw]'></div>
                            <div className='h-[0.5vw] w-[0.5vw] bg-black rounded-full mt-[0.44vw]'></div>
                        </div>
                        <h5 className='text-sm text-gray-400'>04</h5>
                    </div>
                    <div className='flex gap-6'>
                        <img className='h-[2.3vw] w-[2.6vw] rounded object-cover'
                         src='https://images.unsplash.com/photo-1771340900977-d713d154f2ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D' alt="" />
                        <h5 className='text-[1vw] font-medium '>Proven track record with measurable results</h5>
                    </div>
                </div>

            </div>

            <div className='h-[40vw] w-full  mt-[2vw] relative '>
                <div className='absolute left-[36vw] top-[18vw] flex gap-[0.6vw]'>
                    <div className='h-[2vw] w-[2vw] bg-white text-black flex items-center justify-center cursor-pointer rounded-full'><i class="ri-play-fill"></i></div>
                    <div>
                        
                    <h3 className='text-xl  text-white font-medium'>Watch showreel</h3>
                    <h5 className='text-white/50 text-sm'>2006-235</h5>
                    </div>

                </div>
                
                <video autoPlay muted loop  className='h-[40vw] w-full rounded-3xl' src="https://www.pexels.com/download/video/5529079/"></video>
            </div>


        </div>
    )
}

export default About2


