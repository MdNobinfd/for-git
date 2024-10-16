import React, { useState } from 'react'
import Continer from './Continer'
import logo from '../assets/logo.png'
import sublogo from '../assets/sublogo.png'
import { IoMdClose } from 'react-icons/io'
import { LuAlignJustify } from 'react-icons/lu'

const Navbar = () => {

    const [show, setShow] = useState(false)

  return (
    <div className='pt-[22px] relative pb-[26px]'>
        <Continer>
            {/* lg Device */}
            <div className=" hidden lg:flex items-center justify-between">
                <div className="w-[20%]">
                    <img className='180px' src={logo} alt="" />
                </div>
                <div className="w-[55%]">
                    <ul className='flex bg-[#D9D9D9] pl-[9px] py-[15px] items-center gap-x-[42px]'>
                        <li className='font-lora font-medium text-lg leading-[23px] hover:text-[#FD1212] duration-200 ease-linear cursor-pointer py-1'>Home</li>
                        <li className='font-lora font-medium text-lg leading-[23px] hover:text-[#FD1212] duration-200 ease-linear cursor-pointer py-1'>About Us</li>
                        <li className='font-lora font-medium text-lg leading-[23px] hover:text-[#FD1212] duration-200 ease-linear cursor-pointer py-1'>Services</li>
                        <li className='font-lora font-medium text-lg leading-[23px] hover:text-[#FD1212] duration-200 ease-linear cursor-pointer py-1'>Our Menus</li>
                        <li className='font-lora font-medium text-lg leading-[23px] hover:text-[#FD1212] duration-200 ease-linear cursor-pointer py-1'>Blog </li>
                        <li className='font-lora font-medium text-lg leading-[23px] hover:text-[#FD1212] duration-200 ease-linear cursor-pointer py-1'>Contact</li>
                    </ul>
                </div>
                <div className="w-[20%]">
                    <button className='flex items-center pt-[15px] pb-[13px] pl-[23px] pr-[44px] bg-[#FD1212]'>
                    <img src={sublogo} alt="" />
                    Order Today!
                    </button>
                </div>
            </div>
            {/* sm Device */}
            <div className="flex lg:hidden  justify-between items-center">
            <div className="">
                    <img className='180px' src={logo} alt="" />
                </div>
                <div className=" hidden md:block">
                    <button className='flex items-center pt-[15px] pb-[13px] pl-[23px] pr-[44px] bg-[#FD1212]'>
                    <img src={sublogo} alt="" />
                    Order Today!
                    </button>
                </div>
                <div onClick={()=>setShow(!show)} className="cursor-pointer">
                    {show ? <IoMdClose size={30} /> : <LuAlignJustify size={30} />}
                </div>
                {show &&
                <div className="absolute w-full left-0 top-[100px] ">
                <ul className='bg-[#D9D9D9] text-center  pl-[9px] py-[15px] items-center gap-x-[42px]'>
                <li className='font-lora font-medium text-lg leading-[23px] hover:text-[#FD1212] duration-200 ease-linear cursor-pointer py-1'>Home</li>
                <li className='font-lora font-medium text-lg leading-[23px] hover:text-[#FD1212] duration-200 ease-linear cursor-pointer py-1'>About Us</li>
                <li className='font-lora font-medium text-lg leading-[23px] hover:text-[#FD1212] duration-200 ease-linear cursor-pointer py-1'>Services</li>
                <li className='font-lora font-medium text-lg leading-[23px] hover:text-[#FD1212] duration-200 ease-linear cursor-pointer py-1'>Our Menus</li>
                <li className='font-lora font-medium text-lg leading-[23px] hover:text-[#FD1212] duration-200 ease-linear cursor-pointer py-1'>Blog </li>
                <li className='font-lora font-medium text-lg leading-[23px] hover:text-[#FD1212] duration-200 ease-linear cursor-pointer py-1'>Contact</li>
            </ul>
                </div>
                }
            </div>
        </Continer>
    </div>
  )
}

export default Navbar