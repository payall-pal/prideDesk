import React from 'react'

const Answer = ({ question, ans, idx, activefaq, setActivefaq, faq }) => {

    const islive = activefaq === idx

    const handleClick = () => {
        setActivefaq(islive ? null : idx)
    }

    return (
        <div className={` w-full rounded-lg bg-white/10 relative transition-all ease-in-out duration-500 ${islive ? "lg:h-[7vw] h-[43vw]" : "lg:h-[5vw] h-[22vw]"}`}>
            <div className={`lg:h-[5vw] w-full   flex items-center justify-between p-[2vw]  transition-all ease-in-out duration-500  ${islive ? "opacity-0" : "opacity-100"}`}>
                <h4 className='lg:font-medium text-[3.7vw] lg:text-lg'>{question}</h4>
                
                <div className='cursor-pointer lg:bg-black lg:text-white  rounded-full flex items-center justify-center lg:h-[1.2vw]  lg:w-[1.2vw]' onClick={handleClick} ><i class="ri-add-line"></i></div>
            </div>
            <div className={` absolute top-0 flex items-start p-[2vw]  h-full w-full justify-between transition-all ease-in-out duration-500 ${islive ? "opacity-100" : "opacity-0"}`}>
                <div className='flex flex-col  gap-2 w-full'>
                    <h4 className='font-medium text-lg '>{question}</h4>
                    <h5 className=''>{ans}</h5>
                </div>
                <div className='cursor-pointer lg:bg-black lg:text-white rounded-full flex items-center justify-center h-[1.2vw] w-[1.2vw] lg:mt-0 mt-[3.3vw] lg:mr-0 mr-[1vw]' onClick={handleClick} ><i class="ri-subtract-line"></i></div>


            </div>

        </div>





    
    )
}

export default Answer
