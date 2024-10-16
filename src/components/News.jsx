import React from 'react'
import Continer from './Continer'
import NewsReuseable from './reusable/NewsReuseable'
import news from '../assets/news.png'
import news2  from '../assets/news2.png'
import mechiline from '../assets/mechiline.png'

const News = () => {
  return (
    <>
    <Continer>
    <div className="text-center">
                <h2 className='font-lora font-bold text-[30px] lg:text-[52px] lg:leading-[66px] pb-[34px]'>News & Articles </h2>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-[23px]">
                <NewsReuseable image={news}  />
                <NewsReuseable image={news2}  />
            </div>
            <div className="">
              <img className='w-full' src={mechiline} alt="" />
            </div>
    </Continer>
    </>
  )
}

export default News