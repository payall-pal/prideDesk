import React from 'react'

const Footer = () => {
    return (
        <div className='min-h-screen text-white/50 w-full p-[8vw] flex mb-[2vw] relative'>
            <div className='h-full w-1/2 flex flex-col gap-[12vw] '>

                <div className='w-[34vw] flex flex-col gap-[2vw]'>
                    <p className=' font-semibold text-3xl'>Whether you're looking to build a stunning website, boost your brand, or drive measurable results, <span className='text-white/50'>we're here to help.</span></p>
                    <div className='flex gap-2'>
                        <img className='h-[2vw] w-[2vw] rounded-full object-cover' src="https://images.unsplash.com/photo-1672678413759-4ed61878b980?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" alt="" />
                        <div>
                            <h4 className='text-lg font-medium'>George Stem</h4>
                            <h5 className='text-sm text-white/30 font-medium'>Chief Associate Manager</h5>
                        </div>
                    </div>
                </div>
                
                <div className='flex flex-col'>
                    <h5 className='font-medium  '>(312) 555-2468</h5>
                    <div className='flex items-center  gap-1'>
                        <div className='h-[0.56vw] w-[0.56vw] rounded-full '></div>
                        <h2 className='font-medium'>hello@prideDesk.com</h2>
                    </div>
                </div>

            </div>


            <div className='-h-full w-1/2 flex flex-col gap-[2vw]'>
                <h2 className='text-5xl font-semibold'>Newsletter</h2>
                <form className='flex flex-col text-white gap-[1.3vw]'> <input className='pb-[1vw] border-b border-white/50' type="text" placeholder='Your name' required />
                    <input className='pb-[1vw] border-b border-white/50' type="email" placeholder='E-mail' required />
                </form>
                <button className=' rounded-3xl font-medium text-white w-[9vw] px-[1vw] py-[0.3vw]'>Subscribe </button>
                <p className='text-white/50 font-medium text-[0.86vw]'>Join our newsleter and stay updated on <br />the latest trends in digital design.</p>
                <div className='text-white/50 flex w-full gap-[21.5vw] mt-[4vw]'><i class="ri-shining-fill"></i> <i class="ri-shining-fill"></i></div>
               
                <div className=' text-white flex w-full gap-[19vw]'>
                    <div className='font-medium text-white/80 text-lg'>
                        <h5 className='text-white/50 text-sm'>Navigation</h5>
                        <h4>Home</h4>
                        <h4>Studio</h4>
                        <h4>Project</h4>
                        <h4>Blog</h4>
                    </div>
                    <div className='font-medium text-lg text-white/80'>
                        <h5 className='text-white/50 text-sm'>Social</h5>
                        <h4>Twitter</h4>
                        <h4>Instagram</h4>
                        <h4>Dribble</h4>
                    </div>
                </div>

                <div className='leading-tight'>
                    <h1 className='text-[7vw] font-medium mt-[1vw]'>PrideDesk</h1>
                    <h4 className='ml-[0.6vw] text-[2vw] font-semibold'>Studio</h4>
                </div>

            </div>

            <div className='absolute bottom-0 h-0.5  w-[85vw] border-b border-white/30 mb-[1vw] '></div>

        </div>
    )
}

export default Footer
