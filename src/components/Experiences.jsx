import { useGSAP } from '@gsap/react'
import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Experiences = () => {


    const expRef = useRef(null)
    const textRef = useRef([])

    useGSAP(() => {
        gsap.from(".main2", {
            y: -7,
            duration: 0.9,
            delay: 0.3,
            opacity: 0,
            scrollTrigger: {
                trigger: ".main2",
                start: "top 50%",
                end: "top 20%",
                scrub: 3
            }
        })
    })

    useGSAP(() => {
        gsap.from(".main3", {
            x: -7,
            duration: 0.9,
            delay: 0.3,
            opacity: 0,
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".main3",
                start: "top 50%",
                end: "top 20%",
                scrub: 3
            }
        })
    })
    

    const [hover, setHover]= useState(false)
    

    return (
        <div className='min-h-screen w-full bg-gray-100 px-[7vw] py-[3vw]'>
            <div className='h-[15vw] w-[93vw] text-black flex '>
                <div ref={expRef} className='main2 h-full w-1/4 flex gap-4'>
                    <div className='h-[1vw] w-[0.2vw] bg-orange-800 mt-[0.23vw]'></div>
                    <h4 className='text-lg font-semibold '>Testimonials</h4>
                </div>


                <div className='h-full w-3/4 flex flex-col gap-[0.5vw]  mr-[5vw]'>


                    <h4  className=' text-xl font-semibold ml-[0.3vw]'>2025</h4>
                    <h2 ref={el => textRef.current[0] = el} className='main3 text-[6vw] font-medium leading-none mt-[0.5vw]'>Experiences.</h2>
                </div>

            </div>

            <div className='h-[27vw] w-[full] flex gap-2'>

                <div className='h-full w-1/4  flex flex-col gap-1'>

                    <div className='h-[17vw] w-full bg-gray-200 rounded-xl flex items-start justify-between gap-[1vw] p-[1.5vw]'>
                        <div className='flex items-end'><h4 className='text-4xl font-semibold'>4.9</h4><h6 className='text-semibold text-sm text-gray-400'>/5</h6></div>
                        <p className='w-[12vw] font-medium text-gray-600 text-lg'>Lorem, ipsum dolor <span className='text-black'>sit  amet </span>consectetur adipisicing elit. Id, culpa?</p>
                    </div>

                    <div onMouseMove={() =>{setHover(true)}} onMouseLeave={() =>{setHover(false)}} className={` transition-all ease duration-75 h-[10vw] w-full ${hover ? "scale-[1.005]" :"scale-100"}  ${hover ? "bg-gray-300" : "bg-gray-200"} cursor-pointer rounded-xl relative flex flex-col gap-2 pt-[1vw] px-[2vw]`}>
                        <h4 className='font-medium text-lg'>Pridedesk</h4>
                        <div className='flex items-end'>
                            <div className='flex'>
                                <div className=' h-[2vw] w-[2vw] rounded-xl bg-black '></div>
                                <div className='left-[1vw] absolute h-[2vw] w-[2vw] rounded-xl  border-2 border-white'><img className='h-[2vw] w-[2vw] rounded-xl' src="https://plus.unsplash.com/premium_photo-1771650827375-181d37a27ed1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                                <div className='left-[2.2vw] absolute h-[2vw] w-[2vw] rounded-xl bg-black border-2 border-white'><img className='h-[2vw] w-[2vw] rounded-xl' src="https://images.unsplash.com/photo-1772242859562-124ab5ab2c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                                <div className='left-[3.4vw] absolute h-[2vw] w-[2vw] rounded-xl bg-black border-2 border-white'><img className='h-[2vw] w-[2vw] rounded-xl' src="https://plus.unsplash.com/premium_photo-1771650827375-181d37a27ed1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                                <div className='left-[4.6vw] absolute h-[2vw] w-[2vw] rounded-xl bg-black border-2 border-white'><img className='h-[2vw] w-[2vw] rounded-xl' src="https://images.unsplash.com/photo-1772107756927-a3975482b1ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                                <div className='left-[5.8vw] absolute h-[2vw] w-[2vw] rounded-xl bg-black border-2 border-white'><img className='h-[2vw] w-[2vw] rounded-xl' src="https://plus.unsplash.com/premium_photo-1771650827599-33e046949bad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                            </div>
                            <div className='absolute left-[8.4vw]'>
                                <div className='text-yellow-400 flex'>
                                    <i class="ri-star-s-fill"></i>
                                    <i class="ri-star-s-fill"></i>
                                    <i class="ri-star-s-fill"></i>
                                    <i class="ri-star-s-fill"></i>
                                    <i class="ri-star-s-fill"></i>
                                </div>
                                <h5 className=' font-medium'>Trusted by <span className='text-gray-500'>4.8k people</span></h5></div>
                        </div>
                        <button className='cursor-pointer active:scale-95 bg-black text-white inline-block px-[2vw] py-[0.5vw] rounded-4xl'>Leave a review</button>
                    </div>
                </div>



                <div className='h-full w-1/4  flex flex-col gap-1'>
                    <div className='h-[6vw] w-full bg-gray-200 rounded-xl px-[2vw] py-[1.5vw] flex gap-2 items-center'>
                        <img className='h-[3vw] w-[3vw] object-cover rounded' src="https://plus.unsplash.com/premium_photo-1771650827599-33e046949bad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div>
                            <h5 className='text-xl font-medium'>Emly Devis</h5>
                            <h6 className='text-sm text-gray-500 '>England hub</h6>
                        </div>
                    </div>


                    <div className='h-[21vw] w-full bg-gray-200 rounded-xl flex flex-col justify-between px-[1.6vw] py-[1vw]'>
                        <div className='flex items-center justify-between '>
                            <div className='flex text-yellow-500'><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i></div>
                            <div className='text-gray-200'><i class="ri-shining-fill"></i></div>
                        </div>

                        <div><p className='font-medium text-[1.4vw] text-end'>Incredible team! They delivered exactly what we needed, on time and beyonf expectations.</p> </div>
                    </div>
                </div>



                <div className='h-full w-1/4  flex flex-col gap-1'>
                    <div className='h-[21vw] w-full bg-gray-200 rounded-xl flex flex-col justify-between px-[1.6vw] py-[1vw]'>

                        <div className='flex items-center justify-between '>
                            <div className='flex text-yellow-500'><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i></div>
                            <div className='text-gray-200'><i class="ri-shining-fill"></i></div>
                        </div>

                        <div><p className='font-medium text-[1.4vw] text-end'>A smooth process from start to finish. Highly professional team!</p> </div>
                    </div>

                    <div className='h-[6vw] w-full bg-gray-200 rounded-xl px-[2vw] py-[1.5vw] flex gap-2 items-center'>
                        <img className='h-[3vw] w-[3vw] object-cover rounded'
                            src='https://images.unsplash.com/photo-1770721478216-3e5dbbe8dcc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D' alt="" />
                        <div>
                            <h5 className='text-xl font-medium'>Anjali shrewat</h5>
                            <h6 className='text-sm text-gray-500 '>accountanr</h6>
                        </div>
                    </div>
                </div>



                <div className='h-full w-1/4  flex flex-col gap-1'>
                    <div className='h-[6vw] w-full bg-gray-200 rounded-xl px-[2vw] py-[1.5vw] flex gap-2 items-center'>
                        <img className='h-[3vw] w-[3vw] object-cover rounded'
                            src='https://images.unsplash.com/photo-1772107756927-a3975482b1ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D' alt="" />
                        <div>
                            <h5 className='text-xl font-medium'>Vansh Sharma</h5>
                            <h6 className='text-sm text-gray-500 '>Medical student</h6>
                        </div>
                    </div>


                    <div className='h-[21vw] w-full bg-gray-200 rounded-xl flex flex-col justify-between px-[1.6vw] py-[1vw]'>
                        <div className='flex items-center justify-between '>
                            <div className='flex text-yellow-500'><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i></div>
                            <div className='text-gray-200'><i class="ri-shining-fill"></i></div>
                        </div>

                        <div><p className='font-medium text-[1.3vw] text-end'>Our new branding is exactly what we envisioned - clean, modern, and unique. #1 in our industry.</p> </div>

                    </div>
                </div>
            </div>





        </div>
    )
}

export default Experiences
