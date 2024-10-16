import React from 'react'
import Continer from './Continer'
import hero from '../assets/hero.png'
import mechillogo from '../assets/mechillogo.png'

const Hero = () => {
  return (
    <section className='lg:flex lg:text-left text-center'>
        <div className="lg:w-1/2 bg-[#110404] text-white w-full lg:pl-[190px]">
            <Continer>
                <div className='flex lg:justify-normal justify-center items-center pt-[30px] lg:pt-[90px]'>
                    <img className='w-[28px]' src={mechillogo} alt="" />
                    <h4 className='font-lora italic text-xl  leading-[25px]'>
                    Best Catering Services
                    </h4>
                    </div>
                <h1 className='font-lora lg:text-[60px] lg:leading-[76px]'>Special Ocasions
                Deserve Special Food</h1>
                <h5 className='font-lora text-[26px] pt-[31px] pb-[41px] leading-[33px]'>Dolor consect aetur adipisicing pellenqest convallis
                lorems ipsum nosturd sit amet</h5>
                <p className='font-lora text-[18px] leading-[23px]'>Need our Services. Call Today! </p>
                <p className='font-lora font-bold py-[25px] text-[24px] leading-[30px]'>+1(234) 9797 800 </p>
            </Continer>
        </div>
        <div className="lg:w-1/2 w-full">
            <img className='w-full' src={hero} alt="" />
        </div>

    </section>
  )
}

export default Hero