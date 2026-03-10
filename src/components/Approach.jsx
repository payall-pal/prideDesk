import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'

const Approach = () => {

    const approachRef = useRef([])
    const chartRef = useRef([])
    useGSAP(() => {
        gsap.from(approachRef.current, {
            opacity: 0,
            duration: 0.4,
            delay: 0.3,
            scrollTrigger: {
                trigger: ".main4",
                start: "top 84%",
                end: "top 20%",
                scrub: 3
            }
        })
    })

    useGSAP(() => {
        gsap.from(chartRef.current, {
            y: -15,
            opacity: 0,
            duration: 0.4,
            delay: 0.3,
            scrollTrigger: {
                trigger: ".main4",
                start: "top 64%",
                end: "top 20%",
                scrub: 3,
                stagger: 0.4
            }
        })
    })

    return (
        <div className='h-screen w-full text-black bg-gray-100 px-[4vw] py-[3vw] '>


            <div className='h-[15vw] w-[93vw] pl-[1vw] flex '>

                <div className='h-full w-1/4 flex gap-4'>
                    <div className='h-[1vw] w-[0.2vw] bg-orange-800 mt-[0.7vw]'></div>
                    <h4 className='text-[1.4vw] font-medium'>pridedesk</h4>
                </div>


                <div className='h-full w-3/4 flex flex-col gap-[1.2vw]  mr-[vw]'>
                    <h2 className='w-[55vw] text-[1.9vw] font-medium leading-none mt-[0.5vw] text-black/15'> &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;Our approach is simple: <span className='text-black'>we focus on functionality, speed, clarity, ensuring that every project serves a clear <br /> purpose without unnecessary complexity.</span></h2>
                </div>

            </div>

            <div className='h-[29vw] w-full  rounded-xl flex gap-1'>
                <div className='main4 h-full w-1/2 rounded-xl bg-white/70 p-[2vw] flex flex-col justify-between'>
                    <div className='flex items-start justify-between'>
                        <div>
                            <h4 ref={el => approachRef.current[0] = el} className='text-xl font-medium'>Case study</h4>
                            <p ref={el => approachRef.current[1] = el} className='text-[0.76vw] text-black/40'>UI/UX redesign,performance Optimization</p>
                        </div>
                        <i ref={el => approachRef.current[2] = el} class="ri-add-large-line"></i>
                    </div>

                    <h1 ref={el => approachRef.current[3] = el} className='text-6xl font-medium'>Pridedesk</h1>

                    <div className='flex items-center justify-between'>
                        <h4 ref={el => approachRef.current[4] = el} className='text-lg font-medium'>Let's Know <i class="ri-arrow-right-up-line"></i></h4>
                        <div className='text-end'>
                            <h4 ref={el => approachRef.current[5] = el} className='font-medium text-3xl '>From branding to web <br />development and marketing</h4>
                            <h5 ref={el => approachRef.current[6] = el} className=' text-sm '>We do it all</h5>
                        </div>
                    </div>
                </div>

                <div className='h-full w-1/2 text-white flex gap-0.5  '>
                    <div className='w-full h-full bg-black p-[1vw] rounded-xl'>

                        <div className='h-1/2 w-full flex flex-col gap-6'>
                            <div>
                                <h5 className='text-[0.8vw] text-gray-300'>Performance Boost</h5>
                                <h4 className='text-2xl font-medium'>Page speed +48%, <br />Bounce rate -23%</h4>
                            </div>
                            <div>
                                <h5 className=' text-[0.8vw] text-gray-300'>Conversation Rate Improvement</h5>
                                <h4 className='text-2xl font-medium'>4.2%  <i class="ri-arrow-right-line"></i> 5.9% </h4>
                            </div>
                        </div>
                        <div className='h-1/2 w-full flex flex-col justify-end gap-1'>
                            <div className='flex text-yellow-600'><i class="ri-star-s-fill"></i> <i class="ri-star-s-fill"></i> <i class="ri-star-s-fill"></i> <i class="ri-star-s-fill"></i> <i class="ri-star-half-s-fill"></i></div>
                            <p className='text-lg text-gray-200 mb-4 mr-6'>"Thanks to the redesign. we've already seen 60% increase in leads"</p>
                            <div className='flex gap-3 items-start '>
                                <img className='h-[1.5vw] w-[1.5vw] rounded-full object-cover' src="https://i.pinimg.com/474x/eb/5e/7a/eb5e7add0f20a41b3c12845b404670b9.jpg" alt="" />
                                <h5 className='font-medium text-lg'>Anjali Singhal</h5>
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-full  rounded-xl flex flex-col gap-0.5'>
                        <div className='h-1/2 w-full rounded-xl bg-black flex flex-col items-center gap-1 p-[2vw]'>
                            <div className='h-[5vw] w-[5vw] bg-white/30 rounded-full flex items-center justify-center'>
                                <div className='h-[4vw] w-[4vw] bg-black rounded-full flex items-center justify-center'> 
                                    <h4 className='text-[1.3vw] font-semibold'>100</h4></div>
                            </div>
                            <h4 className='font-medium mt-[1vw] text-lg'>Pagespeed score</h4>
                            <p className='text-[0.8vw] text-gray-300'>Lorem ipsum dolor sit consectetur adipisicing <br /> elit. Quia architecto veniam doloremque expedita!</p>
                        </div>

                        <div className='h-1/2 w-full relative rounded-xl bg-black flex items-end gap-4 px-[1.8vw] py-[1vw]'>

                            <div className='absolute top-[2vw] flex'>
                                <div>
                                    <h2 className='text-4xl font-bold ml-1'>38k</h2>
                                    <h5 className='text-gray-300 text-[0.7vw]'>Currently value</h5>
                                </div>
                                <div>
                                    <h6 className='absolute font-medium top-3 left-[4.4vw]'>30%</h6>
                                </div>
                            </div>


                            <div className='flex flex-col items-center gap-0.5'>
                                <div ref={el => chartRef.current[0] = el} className='h-[4vw] w-[2.2vw] bg-white/30 rounded'></div>
                                <h4 className='text-gray-300 text-sm'>Dec</h4>
                            </div>

                            <div className='flex flex-col items-center gap-0.5'>
                                <div ref={el => chartRef.current[1] = el} className='h-[4.4vw] w-[2.2vw] bg-white/30 rounded'></div>
                                <h4 className='text-gray-300 text-sm'>Jan</h4>
                            </div>

                            <div className='flex flex-col items-center gap-0.5'>
                                <div ref={el => chartRef.current[2] = el} className='h-[4.2vw] w-[2.2vw] bg-white/30 rounded'></div>
                                <h4 className='text-gray-300 text-sm'>Feb</h4>
                            </div>

                            <div className='flex flex-col items-center gap-0.5'>
                                <div ref={el => chartRef.current[3] = el} className='h-[5vw] w-[2.2vw] bg-white/30 rounded'></div>
                                <h4 className='text-gray-300 text-sm'>Mar</h4>
                            </div>

                            <div className='flex flex-col items-center gap-0.5'>
                                <div ref={el => chartRef.current[4] = el} className='h-[7vw] w-[2.2vw] bg-white/30 rounded'></div>
                                <h4 className='text-gray-300 text-sm'>Apr</h4>
                            </div>

                            <div className='flex flex-col items-center gap-0.5'>
                                <div ref={el => chartRef.current[5] = el} className='h-[10vw] w-[2.2vw] bg-gray-200 rounded'></div>
                                <h4 className='text-gray-300 text-sm'>May</h4>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Approach
