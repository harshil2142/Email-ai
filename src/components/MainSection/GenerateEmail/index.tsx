import React from 'react'
import { LuMail } from 'react-icons/lu'
import { FaRegCopy } from "react-icons/fa6";

const GenerateEmail = (props:any) => {

  const { response , setResponse } = props || {}

  // const content = "Subject: Re: Quarterly Business Review Meeting\n\nDear John,\n\nI trust this email finds you well. I am writing in response to your recent request regarding the scheduling of our Quarterly Business Review Meeting.\n\nI am available to meet next week on [Date] and [Date]. I propose we schedule the meeting for [Time] on either of those days, but I am also open to any other slots you might suggest that could be more convenient for the rest of the team.\n\nPlease let me know which date works best for you, and if there are any specific points or agenda items you would like us to prepare in advance.\n\nLooking forward to our productive session.\n\nBest regards,\n\n[Your Name]"

  const paragraphs = response?.email?.split('\n\n') || [];
  return (
    <div>
      <div className='py-6'>
        <div className=" mx-3 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="border-b-2 border-gray-300 p-4">
            <h2 className="text-large justify-start items-center font-bold text-dark flex"> <LuMail className='mr-2 text-xl' /> Email </h2>
          </div>
          <div className="p-4">
            <p className="text-gray-500">
              {paragraphs.map((paragraph:any, index:number) => (
                <p key={index} className="mb-4">
                  {/* Split each paragraph into lines and join with line breaks */}
                  {paragraph.split('\n').map((line:any, lineIndex:number) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      {lineIndex < paragraph.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              ))}
            </p>
            { response?.email && <div className='flex justify-end mr-4 cursor-pointer' onClick={() => navigator.clipboard.writeText(response?.email)}>
            <FaRegCopy />
            </div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GenerateEmail
