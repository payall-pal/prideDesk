import  { useState } from 'react'

const Team = () => {

    const [active, setActive] = useState(false)

    

    return (
        <div className='h-screen w-full bg-gray-200 p-[5vw]'>
            <div className='h-full w-full bg-white/60  text-black rounded-xl flex'>

                <div className='h-full w-2/3 flex flex-col justify-between p-[2vw]'>

                    <h2 className='text-6xl mt-[1vw]'>The faces <span>behind <br />the projects.</span></h2>

                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col gap-4'>
                            <h4 className='font-medium text-xl'>Be part of our mission</h4>
                            <h6 className='text-black/60'>If you're ready to create and <br /> collabration, we'd love to hear from you.</h6>
                            <button className='bg-black text-lg text-white px-[3vw] py-[0.2vw] rounded-2xl font-medium'>Apply now</button>
                        </div>
                        <p className='w-[27vw] text-2xl font-normal leading-[1.6vw] text-black/50'>We believe great work comes from <span className='text-black'>Collabration, creativity </span>and <span className='text-2xl text-black'>commitment.</span></p>
                    </div>

                </div>

                <div className='h-full w-1/3 p-[1vw] text-white flex flex-col gap-2 '>
                    <div className='flex gap-2'>
                        
                        <div idx={0} onMouseEnter={()=>{setActive(true)}} onMouseLeave={()=>{setActive(false)}} className='relative leading-[0.9vw]'>
                            <h4 className={`transition-all ease-linear duration-300  absolute ${active ? "top-[10%] right-[10%]" : "top-[40%] left-[24%]"} text-white/70   font-medium text-[0.86vw]`}>Creative Director</h4>
                            <h4  className={`transition-all ease-linear duration-300 absolute ${active ? "bottom-[10%] left-[10%]" : "top-[48%] left-[20%]"}  font-medium text-[1.2vw]`}>Sarah  Johnson</h4>
                            <img className='h-[17vw] w-[12vw] object-cover rounded-xl' src='https://images.unsplash.com/photo-1771199918875-58c95dbee206?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D' alt="" />
                        </div>
                        <div isx={1} className='relative'>
                            <h4 className='absolute right-3 top-3 font-medium text-xl'>Creative Director</h4>
                            <h4 className='absolute left-3 bottom-3 font-medium text-2xl'>Sarah <br /> Johnson</h4>
                            <img className='h-[17vw] w-[12vw] object-cover rounded-xl' src='https://images.unsplash.com/photo-1771757025861-8a3977ec136f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D' alt="" />
                        </div>

                    </div>
                    <div className='flex gap-2'>
                        <div className='relative'>
                            <h4 className='absolute right-3 top-3 font-medium text-xl'>Creative Director</h4>
                            <h4 className='absolute left-3 bottom-3 font-medium text-2xl'>Sarah <br /> Johnson</h4>
                            <img className='h-[17vw] w-[12vw] object-cover rounded-xl' src='https://images.unsplash.com/photo-1771757019600-b33b2dc031ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D' alt="" />
                        </div>
                        <div className='relative'>
                            <h4 className='absolute right-3 top-3 font-medium text-xl'>Creative Director</h4>
                            <h4 className='absolute left-3 bottom-3 font-medium text-2xl'>Sarah <br /> Johnson</h4>
                            <img className='h-[17vw] w-[12vw] object-cover rounded-xl' src='https://images.unsplash.com/photo-1770319675762-7f7e45fcdfd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D' alt="" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Team
