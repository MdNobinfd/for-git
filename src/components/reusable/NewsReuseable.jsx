import React from "react";

const NewsReuseable = (props) => {
  return (
    <div>
      <div className="mb-[74px]">
        <img className="w-full" src={props.image} alt="" />
      </div>
      <div className="">
        <h2 className="font-lora font-bold text-[30px] leading-[38px]">Outdoor Catering Discounts</h2>
        <p className="font-lora text-lg leading-[23px] pt-[32px] pb-[50px]">
          Lorem ipsum dolor sit enim consect aetur adipisicing convallis lorems
          ipsum nosturd sit amet lorem ipsum dolor sit enim cons ect aetur
          adipisicing convallis lorems ipsum nosturd sit amet.
        </p>
      </div>
    </div>
  );
};

export default NewsReuseable;
