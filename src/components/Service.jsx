import React from 'react'
import Continer from './Continer'
import ServiceReusabel from './reusable/ServiceReusabel'
import service1 from '../assets/service1.png'
import service2 from '../assets/service2.png'
import service3 from '../assets/service3.png'
import service4 from '../assets/service4.png'

const Service = () => {
  return (
    <section className='pt-[74px] mt-[59px] text-white bg-[#130101]'>
        <Continer>
            <div className="text-center">
                <h5 className='font-lora italic text-lg leading-[23px]'>Family owned since 1995</h5>
                <h2 className='font-lora font-bold text-[52px] leading-[66px] pb-[41px]'>Catering Services </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-[61px] gap-y-[50px]">
                <ServiceReusabel imege={service1} />
                <ServiceReusabel imege={service2} />
                <ServiceReusabel imege={service3} />
                <ServiceReusabel imege={service4} />
            </div>
        </Continer>
            <div className="bg-[#FA0606] py-[51px]">
                <Continer>
                <h2 className='font-bold font-lora text-[20px] lg:text-left text-center lg:text-[40px] leading-[30px] lg:leading-[51px]'>Our Ingredients Are Sustainably Sourced </h2>
                <div className="lg:flex lg:text-left text-center justify-between items-center">
                    <p className='font-lora lg:text-left text-center text-lg pl-[30px] text-white leading-[23px]'>Loremipsumdoloremearsit ametconsectoradicipingconsectene </p>
                    <button className='bg-[#FFF1F1]  font-lora text-xl leading-[25px] text-[#110101] pt-[23px] pb-[20px] pl-[34px] pr-[51px] '>View Menu </button>
                </div>
                </Continer>
            </div>
    </section>
  )
}

export default Service