import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'




const Why = () => {

    const divRef = useRef()
    useGSAP(()=>{
        gsap.from(divRef.current,{
            y:-20,
            duration:1,
            delay:0.5,
            opacity:0,
            scrollTrigger:{
                trigger: ".trigger",
                start: "top 55%",
                end:"top 10%",
                scrub:3
            }
            
        })
    })

    return (
        <div className='h-[55vw] w-full bg-gray-300 rounded-2xl px-[7vw] py-[2vw]'>
            <div  className='h-1/3 w-full flex'>
                <div ref={divRef} className='trigger h-full w-1/4 p-[2vw] flex gap-2'><div className='h-[1vw] w-[0.2vw] bg-orange-800'></div> <h4 className='text-[0.9vw] text-xl font-medium'>Why choose us???</h4></div>
                <div className='h-full w-3/4 flex flex-col p-[2vw]'><h5 className='text-xl font-medium'>Pridedesk</h5> <p className='text-[2.4vw] font-normal w-[45vw]'>Proven results for every project,<br /> with a focus on creativity and <br />performance.</p></div>
            </div>




            <div className='h-2/3 w-full flex mt-[2vw]  justify-between'>

                <div className=' h-[30vw] w-1/4 rounded-xl bg-amber-950'>
                    <img  className='h-full w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1770045232274-062363f2bb9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>


                <div className='h-[30vw] w-2/4  text-black flex flex-col gap-6 pt-5'>
                    <p className='w-[35vw] ml-3 text-[1.02vw] font-medium text-gray-600 text-end'>
                        No fluff, just smart solutions. We combine strategy, design, and technology to build brands that grow and digital products that perform.
                    </p>


                    <div className='h-[24vw] w-full  flex gap-2  text-white/80 rounded-2xl'>


                        <div className='h-full w-1/2  rounded-xl flex flex-col bg-black gap-2'>


                            <div className='h-[4vw] w-full  rounded-xl flex items-center justify-between px-5'>
                                <h2 className='text-4xl font-semibold'>50+</h2>
                            </div>

                            <div className='h-[20vw] w-full  rounded-xl flex flex-col justify-between px-4 py-2'>
                                <h4 className='text-end text-2xl font-medium'>Successful projects <br />completed</h4>
                                <h5 className='text-base'>Lorem ipsum dolor sit amet consectetur adipi<br />sicing elit. Ipsa aliquid autem illo?</h5>
                            </div>


                        </div>



                        <div className='h-full w-1/2  rounded-xl flex flex-col gap-1 bg-[black]'>
                            <div className='h-[4vw] w-full  rounded-xl flex items-center justify-between  px-5'>
                                <h2 className='text-4xl  font-semibold'>95%</h2>
                            </div>
                            <div className='h-[20vw] w-full   rounded-xl flex flex-col justify-between px-4 py-2'>
                                <h4 className='text-end text-2xl font-medium'>Customer <br />satisfaction rate</h4>
                                <div className='flex justify-around items-center text-sm'><div className='flex flex-col'><h4>SEO</h4><h4>pride</h4></div><h4>Warden</h4> <h4>logo</h4></div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Why
