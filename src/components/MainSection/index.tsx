import React from 'react'
import Navbar from './Navbar'
import EmailWrite from './EmailWrite'
import GenerateEmail from './GenerateEmail'

const MainSection = (props: any) => {
    const { setIsOpen } = props || {}

    return (
        <div>
            <Navbar setIsOpen={setIsOpen} />
            <div className='flex w-full md:flex-row flex-col'>
                <div className=' w-full md:w-[40%]'>

                    <EmailWrite />
                </div>
                <div className='w-full md:w-[60%]'>

                    <GenerateEmail />
                </div>
            </div>
        </div>
    )
}

export default MainSection
