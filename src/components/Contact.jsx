import React from 'react'

const Contact = () => {
    return (
        <div className='h-screen w-full text-white bg-black rounded-2xl flex'>
            <div className='h-full w-1/2  flex items-center justify-center'>


                <div className='h-[30vw] w-[25vw] rounded-2xl text-black flex flex-col  bg-white p-[1.5vw]'>
                    <h5 className='font-bold text-lg'>Pridedesk</h5>
                    <h1 className='font-semibold text-[1.9vw]'>Have a project <span className='text-black/50'>in mind?</span></h1>
                    <form className='flex flex-col gap-5 mt-4'>
                        <h6 className='font-semibold text-sm'>Your Name?</h6>
                        <input className='bg-gray-100 py-[0.4vw] rounded-lg px-[1vw]' type="text" required placeholder='JOhn Doe' />

                        <h6 className='font-semibold text-sm'>E-mail</h6>
                        <input className='bg-gray-100 py-[0.4vw] rounded-lg px-[1vw]'  type="email" required placeholder='hello@gmail.com' />

                        <h6 className='font-semibold text-sm'>Message</h6>
                        <input className='bg-gray-100 py-[0.4vw] rounded-lg px-[1vw]'  type="text" required placeholder='Your message' />

                        <button className='bg-black rounded-4xl text-white font-medium py-[0.5vw]'>Send Message</button>
                        <h6 className='text-black/50 text-[0.7vw] font-medium'>By continuing, you agree to our <span className='text-black'>Terms</span> and <span className='text-black'>Privacy Policy.</span></h6>


                    </form>
                </div>
            </div>



            <div className='h-full w-1/2 flex flex-col pr-[5vw] gap-[2vw] mt-[8vw]'>
                <h1 className='text-[6vw] '> Let's talk</h1>


                <h3 className='text-2xl border-b-2 pb-[1vw] border-white/30'>Tell us about your project- <span className='text-white/70'>whether <br /> it's a website, SEO, or marketing.</span></h3>


                <div className='flex gap-7 mt-[1vw]'>
                    <div className='w-[13vw] flex flex-col gap-2'><h5 className='text-lg font-medium'>Quick response</h5> <h6 className='text-sm'>If you're ready to create and collabrate, we'll love to hear from you!</h6> </div>
                    <div className='w-[14vw] flex flex-col gap-2'><h5 className='text-lg font-medium'>Clear next steps</h5> <h6 className='text-sm'>After the consultation, we'll provide you with a detailed plan & structure.</h6> </div>
                </div>



                <div className='flex py-[3vw] '>
                    <div className='h-[6vw] w-[6vw] bg-amber-50 rounded-xl flex  items-center justify-center'>
                        <img className=' h-[5.7vw] w-[5.7vw] object-cover  rounded-2xl' src="https://images.unsplash.com/photo-1770548037928-a29bfacc84ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" alt="not foound" />
                    </div>
                    <div className='h-[6vw] w-[11vw] text-black bg-amber-50 rounded-xl py-[1vw] px-[1.5vw]'>
                        <div className='flex items-end gap-1'><h6 className='text-[0.72vw] font-medium'>Team Lead</h6>  <h6 className='text-gray-500 text-[0.6vw] font-medium'>Sweden</h6></div>
                        <h2 className='text-lg font-medium'>Lauren Thompson</h2>
                        <div className='bg-black flex justify-between items-center rounded-2xl w-[6vw] px-[0.6vw] mt-[0.4vw] text-white'>
                            <button>Let's talk</button>
                            <div className='h-[0.6vw] w-[0.6vw] rounded-full bg-white'></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
