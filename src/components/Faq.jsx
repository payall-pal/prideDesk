import { useState } from "react"
import Answer from "./Answer"





const Faq = () => {


    const [activefaq, setActivefaq] = useState(null)
    
       const faqData = [
        {
            question:"How does the monthly subscritpion model work?",
            ans: "We build modern, fast and scalable websites."
            
        },
        {
            question:"How long does it take to build a website?",
            ans: "We build modern, fast and scalable websites."
           
            
        },
        {
            question:"Can you redesign my existing website?",
            ans: "We build modern, fast and scalable websites.lorem1  We build modern, fast and scalable websites."
           
            
        },
        {
            question:"Do you offer custom websites or use templates?",
            ans: "We build modern, fast and scalable custom websites or use templates websites."
            
            
        },
        {
            question:"What's included in your SEO services?",
            ans: "We build modern, fast and  included in your scalable  included in your websites."
            
            
        },
        {
            question:"How do I get started?",
            ans: "We build modern, uild modern, fast and scalable w fast and scalable websites."
            
            
        }
       ]

  return (
    <div className='min-h-screen w-full bg-gray-200 px pt-[6vw] px-[6vw] flex'>

        <div className="h-full w-1/2">
            <h1 className="text-[5vw] font-bold">FAQ.</h1>
            <p className="text-[0.8vw]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut <br />ducimus quas voluptatum blanditiis voluptatibus cupiditate!</p>
        </div>

        <div className="w-1/2 flex flex-col gap-2 ">
            {faqData.map((faq,idx)=>(
                <Answer key={idx} idx={idx} question={faq.question} ans={faq.ans} activefaq={activefaq} setActivefaq={setActivefaq}/>
            ))}


        </div>











            {/* <div className='flex flex-col gap-4 w-full bg-blue-600'>
                {faqData.map((faq, idx) =>(
                    <Answer key={idx} title={faq.title} description={faq.description} skills={faq.skills} idx={idx} activefaq={activefaq} setActivefaq={setActivefaq}
                     />
                ))}

            </div> */}
            
    </div>
  )
}

export default Faq
