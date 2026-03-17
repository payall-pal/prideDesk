import  { useState } from 'react'

const Team = () => {

    const [active, setActive] = useState(false)
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)

    

    return (
        <div className='lg:h-[50vw] h-[450vw] relative w-full   text-white/70 px-[6vw] py-[10vw] lg:p-[5vw]'>
            <div className='h-full w-full  rounded-xl  flex'>

                <div className='h-full lg:w-2/3 w-full  flex flex-col lg:justify-between  p-[2vw]'>

                    <h2 className='text-6xl  mt-[1vw] lg:leading-[4vw] leading-[17vw]'>The faces <span>behind <br />the projects.</span></h2>

                    <div className='flex lg:justify-start gap-0 lg:gap-[4vw] justify-between lg:flex-row flex-col lg:mt-0 mt-[140vw]  w-full  lg:items-center'>
                        <div className='flex flex-col gap-4 lg:w-[20vw]  w-[45vw]'>
                            <h4 className='font-medium lg:text-xl text-white/80 text-2xl'>Be part of our mission</h4>
                            <h6 className='text-white/60'>If you're ready to create and <br /> collabration, we'd love to hear from you.</h6>
                            <button className='bg-white/30 lg:text-lg text-[4vw] text-white/70 cursor-pointer active:scale-95 px-[2vw] lg:px-[3vw] py-[1vw] lg:py-[0.2vw] rounded-2xl lg:font-medium'>Apply now</button>
                        </div>
                        <p className='lg:w-[27vw] w-[45vw] lg:ml-0 ml-[19vw] mt-[70%] lg:mt-0 lg:text-2xl text-[8vw] font-normal text  leading-[4.9vw] lg:leading-[1.6vw] text-white/50'>We believe great work comes from <span className='text-white'>Collabration, creativity </span>and <span className='text-2xl text-white'>commitment.</span></p>
                    </div>

                </div>

                <div className=' absolute lg:left-[66%] lg:top-[7%] left-[15vw] top-[25%]  lg:h-full h-[70vw] lg:w-1/3 w-[70vw] lg:mt-0 mt-[6vw] p-[1vw] text-white  flex flex-col gap-2 '>
                    <div className='flex gap-2'>
                        
                        <div idx={0} onMouseEnter={()=>{setActive(true)}} onMouseLeave={()=>{setActive(false)}} className='relative leading-[0.9vw]'>
                            <h4 className={`transition-all ease-linear duration-300  absolute ${active ? "top-[10%] right-[10%]" : "lg:top-[40%] top-[37%] lg:left-[24%] left-[15%]"} text-white/70   font-medium text-[3vw] lg:text-[0.86vw]`}>Creative Director</h4>
                            <h4  className={`transition-all ease-linear duration-300 absolute ${active ? "bottom-[10%] left-[10%]" : "top-[48%] lg:left-[12%] left-[10%]"}  font-medium text-[3.2vw] lg:text-[1.2vw]`}>Priyanka Sherawat</h4>
                            <img className='lg:h-[17vw] lg:w-[12vw] h-[30vw] w-[30vw]  object-cover rounded-xl' src='https://images.unsplash.com/photo-1771199918875-58c95dbee206?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D' alt="" />
                        </div>
                        <div idx={1} onMouseEnter={()=>{setActive1(true)}} onMouseLeave={()=>{setActive1(false)}} className='relative'>
                            <h4 className={`absolute transition-all ease-linear duration-300  font-medium text-[3vw] lg:text-[0.86vw] ${active1 ? "top-[10%] right-[10%]" : "lg:top-[40%] top-[37%] lg:left-[24%] left-[15%]"}`}>Creative Director</h4>
                            <h4 className={`absolute  transition-all ease-linear duration-300   font-medium text-[3.2vw] lg:text-[1.2vw] ${active1 ? "bottom-[10%] left-[10%]" : "top-[48%] left-[20%]"}`}>Trisha Singh</h4>
                            <img className='lg:h-[17vw] lg:w-[12vw] h-[30vw] w-[30vw]   object-cover rounded-xl' src='https://images.unsplash.com/photo-1771757025861-8a3977ec136f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D' alt="" />
                        </div>

                    </div>
                    <div className='flex gap-2'>
                        <div idx={2} onMouseEnter={()=>{setActive2(true)}} onMouseLeave={()=>{setActive2(false)}} className='relative'>
                            <h4 className={`absolute right-3 top-3 transition-all ease-linear duration-300 font-medium text-[3vw] lg:text-[0.86vw] ${active2 ? "top-[10%] right-[10%]" : "lg:top-[40%] top-[37%] lg:left-[24%] left-[10%]"}`}>Creative Director</h4>
                            <h4 className={`absolute left-3 bottom-3 transition-all ease-linear duration-300 font-medium text-[3.2vw] lg:text-[1.2vw] ${active2 ? "bottom-[10%] left-[10%]" : "top-[48%] left-[20%]"}`}>Anjali Yadav</h4>
                            <img className='lg:h-[17vw] lg:w-[12vw] h-[30vw] w-[30vw]  object-cover rounded-xl' src='https://images.unsplash.com/photo-1771757019600-b33b2dc031ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D' alt="" />
                        </div>
                        <div idx={3} onMouseEnter={()=>{setActive3(true)}} onMouseLeave={()=>{setActive3(false)}} className='relative'>
                            <h4 className={`absolute right-3 top-3 transition-all ease-linear duration-300 font-medium text-[3vw] lg:text-[0.86vw] ${active3 ? "top-[10%] right-[10%]" : "lg:top-[40%] top-[37%] lg:left-[24%] left-[10%]"}`}>Creative Director</h4>
                            <h4 className={`absolute left-2 bottom-3 transition-all ease-linear duration-300 font-medium text-[3.2vw] lg:text-[1.2vw] ${active3 ? "bottom-[10%] left-[10%]" : "top-[48%] left-[10%] lg:left-[20%]"}`}>Harshita Rohalla</h4>
                            <img className='lg:h-[17vw] lg:w-[12vw] h-[30vw] w-[30vw]   object-cover rounded-xl' src='https://images.unsplash.com/photo-1770319675762-7f7e45fcdfd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D' alt="" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Team
