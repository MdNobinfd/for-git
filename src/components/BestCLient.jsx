import React from "react";
import Continer from "./Continer";
import best from "../assets/sourced.png";
import mechillogo from '../assets/mechillogo.png'

const BestCLient = () => {
  return (
    <section className="lg:flex lg:mt-[66px] mb-[59px] items-center lg:gap-x-[57px] gap-y-[50px]">
      <div className="lg:w-1/2 w-full">
        <img className="w-full" src={best} alt="" />
      </div>
      <div className="lg:w-1/2 w-full lg:pr-[190px]">
        <Continer>
          <div className="">
            <div className="flex lg:justify-normal justify-center items-center pt-[90px]">
              <img className="w-[28px]" src={mechillogo} alt="" />
              <h4 className="font-lora italic text-xl  leading-[25px]">
                Best Catering Services
              </h4>
            </div>
            <h2 className="font-lora text-[30px] lg:text-left text-center font-bold lg:text-[52px] lg:leading-[66px] pt-[20px] lg:pt-[41px] pb-[20px] lg:pb-[77px] ">Our Ingredients Are Sustainably Sourced</h2>
            <p className="font-lora lg:text-left text-center text-lg leading-[23px]">
              Lorem ipsum dolor sit enim consect aetur adipisicing convallis
              lorems ipsum nosturd sit amet lorem ipsum dolor sit enim cons ect
              aetur adipisicing convallis lorems ipsum nosturd sit amet, lo- rem
              ipsum dolor sit enim consect aetur adipisicing convallis lorems
              ipsum nosturd sit amet
            </p>
          </div>
        </Continer>
      </div>
    </section>
  );
};

export default BestCLient;
