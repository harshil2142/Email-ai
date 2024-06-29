import React from 'react'
import { LuMail } from 'react-icons/lu'

const GenerateEmail = () => {
  return (
    <div>
      <div className='py-6'>
            <div className=" mx-3 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="border-b-2 border-gray-300 p-4">
                    <h2 className="text-large justify-start items-center font-bold text-dark flex"> <LuMail className='mr-2 text-xl' /> Email </h2>
                </div>
                <div className="p-4">
                    <p className="text-gray-500">Email</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GenerateEmail
