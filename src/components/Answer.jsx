import React from 'react'

const Answer = ({ question, ans, idx, activefaq, setActivefaq, faq }) => {

    const islive = activefaq === idx

    const handleClick = () => {
        setActivefaq(islive ? null : idx)
    }

    return (
        <div className={`h-[5vw] w-full rounded-lg bg-white/30 relative transition-all ease-in-out duration-500 ${islive ? "h-[7vw]" : "h-[5vw]"}`}>
            <div className={`h-[5vw] w-full   flex items-center justify-between p-[1vw]  ${islive ? "opacity-0" : "opacity-100"}`}>
                <h4 className='font-medium text-lg'>{question}</h4>
                <button></button>
                <div className='cursor-pointer bg-black text-white rounded-full flex items-center justify-center h-[1.2vw] w-[1.2vw]' onClick={handleClick} ><i class="ri-add-line"></i></div>
            </div>
            <div className={` absolute top-0 flex  items-start p-[1vw] pt-[1.85vw] h-full w-full justify-between ${islive ? "opacity-100" : "opacity-0"}`}>
                <div className='flex flex-col  gap-2 w-full'>
                    <h4 className='font-medium text-lg '>{question}</h4>
                    <h5 className=''>{ans}</h5>
                </div>
                <div className='cursor-pointer bg-black text-white rounded-full flex items-center justify-center h-[1.2vw] w-[1.2vw]' onClick={handleClick} ><i class="ri-subtract-line"></i></div>


            </div>

        </div>





        // <div className={`h-[6vw] w-full  relative transition-all ease-in-out duration-500 bg-gray-500 rounded-xl p-[1vw] ${islive ? "h-[10vw]":"h-[6vw]"}`}>
        //     <div className={` flex justify-between items-center  ${islive ? "opacity-0":"opacity-100"}`}>
        //         <h4 className='text-lg font-medium'>{title}</h4>
        //         <div onClick={handleClick} className='h-[1vw] w-[1vw] cursor-pointer rounded-full flex items-center justify-center bg-white'><i class="ri-add-line"></i></div>
        //     </div>

        //     <div className={`h-[10vw] bg-white absolute ${islive ? "opacity-100":"opacity-0"} `}>
        //         <h4 className='text-lg font-medium'>{title}</h4>
        //         <h5>{description}</h5>
        //     </div>

        // </div>
    )
}

export default Answer
