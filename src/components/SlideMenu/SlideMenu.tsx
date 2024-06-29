"use client";
// components/SlideMenu.js
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { VscClose } from 'react-icons/vsc';

interface SlideMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function SlideMenu({ isOpen, setIsOpen }: SlideMenuProps) {

  const [menu, setMenu] = useState("email")
  return (
    <Transition
      show={isOpen}
      enter="transition ease-in-out duration-300 transform"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition ease-in-out duration-300 transform"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      <div className="fixed inset-y-0 left-0 w-64 bg-white text-gray-100 z-50 md:z-10 border-r-2 border-gray-300">
        <div className='flex justify-between items-center '>
          <div className='text-black ml-4'>
              Logo
          </div>
          <div className='text-end'>

            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-light mt-3 mr-2 rounded-full"
            >
              <VscClose className='text-black text-2xl m-2' />
            </button>
          </div>
        </div>
        <nav className="p-4">
          <ul>
            <li className="my-2">
              <a
                href="#"
                className={`block p-2 text-base rounded-md transition-colors duration-200
                  hover:bg-hover
            ${menu === "email"
                    ? "bg-light text-dark"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
              >
                Email Generator
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Transition>
  );
}
