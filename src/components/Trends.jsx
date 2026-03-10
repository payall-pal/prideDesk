import React from 'react'

const Trends = () => {
    return (
        <div className='h-screen w-screen bg-gray-200 px-[6vw]'>
            <div className='h-[8vw] w-[93vw] text-black flex'>

                <div className='h-full w-1/2 flex gap-4 '>
                    <h6 className=' text-[3vw] font-semibold  leading-tight'>Newest trends <span className='text-black/30'>and <br /> insights from our team</span></h6>
                </div>


               
            </div>

            <div className='h-[29vw] w-full mt-[5vw]  rounded-xl flex gap-1'>

                <div className='h-full w-1/2  flex items-center gap-0.5  '>

                
                        <h4 className='font-medium text-5xl mb-[5vw] ml-[5vw]'>What's new in<br /> digital?</h4>



                </div>



                <div className='h-full w-1/2 rounded-xl relative bg-white  flex flex-col justify-between'>
                    <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1761839258045-6ef373ab82a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D" alt="" />

                    <div className='flex items-start  w-[40vw] justify-between left-[2vw] top-[2vw] absolute '><div><h4 className='text-lg font-medium'>pridedesk</h4> </div> <i className='  text-black ' class="ri-add-large-line"></i> </div>

                    <div className='text-end absolute right-[2vw] bottom-[2vw] text-black'>
                        <h4 className='font-medium text-5xl'>What's new <br />in digital?</h4>
                        <h5 className='  text-sm'>We do it all</h5></div>
                </div>
            </div>







        </div>



    )
}

export default Trends
