import React from 'react'
import { MdMenu } from 'react-icons/md'

const Navbar = (props: any) => {
    const { setIsOpen } = props || {}
    return (
        <>
            <div className='flex p-3 justify-between border-b-2 border-gray-300'>
                <button
                    onClick={() => setIsOpen((prev: any) => !prev)}
                    className="hover:bg-light rounded-full"
                >
                    <MdMenu className='text-black text-2xl m-2' />
                </button>
                <button
                    // onClick={() => setIsOpen((prev: any) => !prev)}
                    className="bg-light px-3 hover:bg-hover text-dark rounded-full"
                >
                    Email World
                </button>
            </div>
        </>
    )
}

export default Navbar
