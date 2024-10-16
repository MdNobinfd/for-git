import React from 'react'
import Continer from './Continer'
import logo from '../assets/fotterlogo.png'
import { BsTelephoneInbound } from 'react-icons/bs'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa6'

const Footer = () => {
  return (
    <section className='bg-black pt-[30px] lg:pt-[87px] text-white mb-[69pxa] lg:mt-[140px]'>
        <Continer>
            <div className="lg:flex gap-x-[47px] justify-between">
                <div className="lg:w-[20%]">
                    <img className='w-[280px]' src={logo} alt="" />
                </div>
                <div className="lg:w-[80%] w-full lg:flex gap-x-[107px]">
                <div className="lg:w-[38%] w-full lg:pb-0 pb-[40px]">
                    <h3  className='font-lora  font-semibold text-[24px] text-white leading-[30px] pb-[29px]'>Service Hours</h3>
                    <h3  className='font-lora  font-semibold text-[24px] text-white leading-[30px]'>Monday to Friday : 09:00am to 07:00pm</h3>
                    <h3  className='font-lora  font-semibold text-[24px] text-white leading-[30px]'>Saturday : 10:30am to 04:00pm</h3>
                    <h3  className='font-lora  font-semibold text-[24px] text-white leading-[30px]'>Sunday : On Demand</h3>
                    <h3  className='font-lora  font-semibold text-[24px] text-white leading-[30px] pt-[20px]'>We Are Social </h3>
                    <div className="flex items-center gap-x-[30px]">
                        <FaFacebook size={35} />
                        <FaTwitter size={35} />
                        <FaYoutube size={35} />
                        <FaWhatsapp size={35} />
                    </div>
                </div>
                <div className="lg:w-[38%] w-full">
                    <h3  className='font-lora  font-semibold text-[24px] text-white leading-[30px]'>Contact Us</h3>
                    <h3  className='font-lora  font-semibold text-[24px] text-white leading-[30px]'>25 Avada Avenue, FL 12340 USA</h3>
                    <h3  className='font-lora  font-semibold text-[24px] text-white leading-[30px]'>catering@myavada-domain.com</h3>
                    <h3><BsTelephoneInbound size={40} className='text-red-700' /></h3>
                    <h3  className='font-lora  font-semibold text-[24px] text-white leading-[30px]'>Need our services? Call Today!</h3>
                    <h3  className='font-lora  font-semibold text-[24px] text-white leading-[30px]'>1 (900) 123 4567</h3>
                </div>
                </div>
            </div>
            <p  className='font-lora pt-[97px] text-center  font-semibold text-[24px] text-white leading-[30px]'>© 2012 - 2022 | Avada Website Builder by ThemeFusion | All Rights Reserved | Powered by WordPress</p>
        </Continer>
    </section>
  )
}

export default Footer