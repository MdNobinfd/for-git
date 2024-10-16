import React from 'react'
import Continer from './Continer'
import brand1 from '../assets/brand1.png'
import brand2 from '../assets/brand2.png'
import brand3 from '../assets/brand3.png'
import brand4 from '../assets/brand4.png'
import brand5 from '../assets/brand5.png'
const Brand = () => {
  return(
    <section className='mt-[31px] mb-[34px]'>
    <Continer>
        <div className="grid lg:grid-cols-5 sm:grid-cols-2 items-center">
            <div className="">
                <img className='w-[200px] mx-auto' src={brand1} alt="" />
            </div>
            <div className="">
                <img className='w-[200px] mx-auto' src={brand2} alt="" />
            </div>
            <div className="">
                <img className='w-[200px] mx-auto' src={brand3} alt="" />
            </div>
            <div className="">
                <img className='w-[200px] mx-auto' src={brand4} alt="" />
            </div>
            <div className="">
                <img className='w-[200px] mx-auto' src={brand5} alt="" />
            </div>
        </div>
    </Continer>
    </section>
  )
}

export default Brand