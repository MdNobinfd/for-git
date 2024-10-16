import React from 'react'
import Continer from './Continer'
import MechlinReuseable from './reusable/MechlinReuseable'
import mechiline from '../assets/mechiline.png'

const Mechli = () => {
  return (
    <div>
        <Continer>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-[150px] gap-y-[50px]">
                <MechlinReuseable />
                <MechlinReuseable />
                <MechlinReuseable />
                <MechlinReuseable />
            </div>
            <div className="">
              <img className='w-full' src={mechiline} alt="" />
            </div>
        </Continer>
    </div>
  )
}

export default Mechli