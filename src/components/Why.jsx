import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'




const Why = () => {

    const divRef = useRef()
    useGSAP(() => {
        gsap.from(divRef.current, {
            y: -20,
            duration: 1,
            delay: 0.5,
            opacity: 0,
            scrollTrigger: {
                trigger: ".trigger",
                start: "top 55%",
                end: "top 10%",
                scrub: 3
            }

        })
    })

    return (
        <div className='lg:h-[55vw] h-[120vw] w-full  rounded-2xl text-white lg:px-[7vw] px-[4vw] pr-[1vw] py-[2vw]'>
            <div className='h-1/3 w-full flex gap-2'>
                <div ref={divRef} className='trigger h-full lg:w-1/4 w-[29vw]  p-[2vw] flex gap-2'>
                    <div className='lg:h-[1vw] h-[3.5vw] w-[0.8vw] lg:w-[0.2vw] bg-orange-800'></div>
                    <h4 className='lg:text-[0.9vw]  text-[3vw] lg:font-medium'>Why choose us???</h4>
                </div>
                <div className='h-full w-3/4  flex flex-col  lg:p-[2vw] lg:px-[2vw]'>
                    <p className='lg:text-[2.4vw] lg:mt-[1vw] mt-[16vw] text-[2.8vw] lg:block hidden font-normal lg:w-[45vw] w-full'> &nbsp; &nbsp;&nbsp; &nbsp;  Proven results for every project,  with a focus on creativity and performance.</p>
                    <p className='lg:text-[2.4vw] lg:mt-0 mt-[16vw] text-[2.8vw] lg:hidden block font-normal lg:w-[45vw] w-full'> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Proven results for every project,  with a focus on creativity and performance.</p>
                </div>
            </div>




            <div className='h-2/3 w-full flex lg:mt-[2vw] mt-[4vw] justify-between'>

                <div className='lg:h-[30vw] lg:w-1/4 h-[60vw] w-[40vw] rounded-xl '>
                    <img className='h-full w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1770045232274-062363f2bb9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>


                <div className='lg:h-[30vw] lg:w-2/4 h-[50vw]  w-[50vw] text-black flex flex-col gap-6 pt-5'>
                    <p className='lg:w-[35vw]  lg:ml-3  lg:text-[1.02vw] text-[3vw]  lg:font-medium text-white/50 text-end'>
                        No fluff, just smart solutions. We combine strategy, design, and technology to build brands that grow and digital products that perform.
                    </p>


                    <div className='h-[24vw] w-full  flex gap-2  text-white/80 rounded-2xl'>


                        <div className='h-full w-1/2  rounded-xl flex flex-col bg-white/50 lg:gap-2  gap-1'>


                            <div className='lg:h-[4vw] w-full  rounded-xl flex items-center justify-between px-5'>
                                <h2 className='lg:text-4xl text-[3.7vw] lg:font-semibold'>50+</h2>
                            </div>

                            <div className='h-[20vw] w-full  rounded-xl flex flex-col justify-between px-4 lg:py-2'>
                                <h4 className='lg:text-end lg:text-2xl text-[3.7vw] lg:font-medium'>Successful projects <br />completed</h4>
                                {/* <h5 className='text-base'>Lorem ipsum dolor sit amet consectetur adipi<br />sicing elit. Ipsa aliquid autem illo?</h5> */}
                            </div>

                        </div>


                        <div className='h-full w-1/2  rounded-xl flex flex-col lg:gap-1 leading-tight lg:leading-normal bg-white/50'>
                            <div className='lg:h-[4vw] w-full  rounded-xl flex items-center justify-between  px-5'>
                                <h2 className='lg:text-4xl text-[3.7vw]  lg:font-semibold'>95%</h2>
                            </div>
                            <div className='h-[20vw] w-full   rounded-xl flex flex-col justify-between px-4 py-2'>
                                <h4 className='lg:text-end lg:text-2xl text-[3.7vw] lg:font-medium'>Customer <br />satisfaction rate</h4>
                                <div className='flex flex-col justify-center items-end gap-8  w-full h-[15vw] lg:block md:hidden sm:hidden hidden text-[0.97vw]'>
                                    <div className='flex flex-col items-end '>
                                        <h4>4.5/5</h4>
                                        <h4 className='text-[0.9vw] font-medium text-white/80'>rating</h4>
                                    </div>
                                    <div className='flex flex-col items-end '>
                                        <h4>300+</h4>
                                        <h4 className='text-[0.9vw] font-medium text-white/80'>Happy Clients</h4>
                                    </div>
                                    <div className='flex flex-col items-end '>
                                        <h4>10+ Brands</h4>
                                        <h4 className='text-[0.9vw] font-medium text-white/80'>we've Worked with</h4>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Why
