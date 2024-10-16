import React from "react";
import mechilin from "../../assets/mechilin.png";
import mechilinlogo from "../../assets/mechillogo.png";

const MechlinReuseable = () => {
  return (
    <div>
      <div className="">
        <img className="w-[130px] mx-auto mt-[21px] mb-[19px]" src={mechilin} alt="" />
        <img className="w-[35px] mx-auto" src={mechilinlogo} alt="" />
      </div>
      <div className="text-center">
        <h3 className="font-lora font-bold text-[24px] leading-[30px] pt-[20px] pb-[17px] ">Mechelin Star Quality</h3>
        <p className="font-lora text-[20px] leading-[25px]" >
          Lorem ipsum dolor sit enim con sect aetur adipisicing convallis lorems
          ipsum nosturd sit amet
        </p>
      <button className="font-lora font-bold text-[26px] text-[#100101] leading-[33px] mt-[64px] mb-[51px]">View all services </button>
      </div>
    </div>
  );
};

export default MechlinReuseable;
