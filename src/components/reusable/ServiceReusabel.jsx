import React from 'react'

const ServiceReusabel = (props) => {
  return (
    <div className='text-center'>
        <div className="">
            <img className='w-[270px] mx-auto' src={props.imege} alt="" />
        </div>
        <div className="">
            <h3 className='font-lora font-bold text-[30px] leading-[38px] pt-[58px] pb-[18px]'>Catering Holiday</h3>
            <p className='font-lora font-bold text-base leading-5'>A blend of delicios and real tasty food  </p>
            <h5 className='font-lora font-bold text-lg leading-[23px] pt-[31px] pb-[46px]'>Start $62.50/person </h5>
            <button className='font-lora font-bold text-xl leading-[25px] pb-[39px]'>View details</button>
        </div>
    </div>
  )
}

export default ServiceReusabel