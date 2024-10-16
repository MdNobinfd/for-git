import React from "react";
import Continer from "./Continer";
import mechillogo from "../assets/mechillogo.png";
import best1 from "../assets/best1.png";
import best2 from "../assets/best2.png";
import best3 from "../assets/best3.png";
import best4 from "../assets/best4.png";
import best5 from "../assets/best5.png";
import best6 from "../assets/best6.png";

const Experience = () => {
  return (
    <div>
      <Continer>
        <div className="flex lg:justify-normal justify-center items-center pt-[90px]">
          <img className="w-[28px]" src={mechillogo} alt="" />
          <h4 className="font-lora italic text-xl  leading-[25px]">
            Best Catering Services
          </h4>
        </div>
        <div className="">
          <h2 className="font-lora font-bold text-[30px] lg:text-left text-center lg:text-[52px] lg:leading-[66px] pb-[28px] pt-[10px]">
            A Shared Experience
          </h2>
          <p className="font-lora lg:text-left text-center text-lg leading-[23px] pb-[84px]">
            Lorem ipsum dolor sit enim consect aetur adipisicing convallislorems
            ipsum nosturd sit amet lorem ipsum dolor sit enim cons ect aetur
            adipisicing convallis lorems ipsum nosturd sit amet, lorem ipsum
            dolor sit enim consect aetur adipisicing convallis lorems ipsum
            nosturd sit amet.Lorem ipsum dolor sit enim consect aetur
            adipisicing convallislorems ipsum nosturd sit amet lorem ipsum dolor
            sit enim consect aetur adipisicing convallis lorems ipsum nosturd
            sit amet, lorem ipsum dolor sit enim consect aetur adipisicing
            convallislorems ipsum nosturd sit amet.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-[74px]">
          <div className="">
            <img className="w-[284px] h-[284px] mx-auto" src={best1} alt="" />
          </div>
          <div className="">
            <img className="w-[284px] h-[284px] mx-auto" src={best2} alt="" />
          </div>
          <div className="">
            <img className="w-[284px] h-[284px] mx-auto" src={best3} alt="" />
          </div>
          <div className="">
            <img className="w-[284px] h-[284px] mx-auto" src={best4} alt="" />
          </div>
          <div className="">
            <img className="w-[284px] h-[284px] mx-auto" src={best5} alt="" />
          </div>
          <div className="">
            <img className="w-[284px] h-[284px] mx-auto" src={best6} alt="" />
          </div>
        </div>
        <div className="text-center lg:mt-[161px]">
          <h2 className="font-lora font-bold text-[30px] lg:text-[52px] lg:leading-[66px] lg:pb-[28px] pt-[10px]">
            Subscribe for office
          </h2>
          <p className="font-lora text-xl leading-[25px] lg:pt-[29px] lg:pb-[53px]">
            Subscribe for early access offers, discounted rates, and you can
            cancel at any time.
          </p>
          <h4 className="font-lora font-semibold text-[24px] leading-[30px] text-[#F60B0B]">
            Enter Your Email....
          </h4>
        </div>
      </Continer>
    </div>
  );
};

export default Experience;
