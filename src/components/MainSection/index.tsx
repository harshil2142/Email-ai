import React, { useState } from 'react'
import Navbar from './Navbar'
import EmailWrite from './EmailWrite'
import GenerateEmail from './GenerateEmail'

const MainSection = (props: any) => {
    const { setIsOpen } = props || {}
    const [response, setResponse] = useState("")

    return (
        <div>
            <Navbar setIsOpen={setIsOpen} />
            <div className='flex w-full md:flex-row flex-col'>
                <div className=' w-full md:w-[40%]'>

                    <EmailWrite setResponse={setResponse} response={response}  />
                </div>
                <div className='w-full md:w-[60%]'>

                    <GenerateEmail setResponse={setResponse} response={response} />
                </div>
            </div>
        </div>
    )
}

export default MainSection
