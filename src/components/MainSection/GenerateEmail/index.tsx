import React from 'react'
import { LuMail } from 'react-icons/lu'
import { FaRegCopy } from "react-icons/fa6";

const GenerateEmail = (props:any) => {

  const { response , setResponse } = props || {}
  const [characterCount, setCharacterCount] = React.useState(0);

  const paragraphs = response?.email?.split('\n\n') || [];

  React.useEffect(() => {
      if(Array.isArray(paragraphs) && paragraphs?.length > 0){
        setCharacterCount(paragraphs?.reduce((acc:any, curr:any) => acc + curr?.length, 0))
      }
  }, [paragraphs])
  
  return (
    <div>
      <div className='py-6'>
        <div className={` ${!response?.email && "min-h-[42rem]"} mx-3  bg-white shadow-lg rounded-lg overflow-hidden`}>
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
            { response?.email && <div className='flex justify-start cursor-pointer items-center'>
            <div  onClick={() => navigator.clipboard.writeText(response?.email)}><FaRegCopy /></div>
            <div className='ml-4'>Total Character : {characterCount || 0}</div>
            </div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GenerateEmail
