import React, { useState } from "react";
import Styles from "../../../Styles/Styles.js";
import { productData } from "../../../Static/Data.js";
import ProductCard from "../../../components/ProductCard/ProductCard.jsx";
import "./MonitorArm.scss";
// import { Link } from 'react-router-dom';
import image from "../../../Assets/img/ProductNotFound/img1.png"

const FeaturedProducts = ({open,setOpen,count,decrementQuantity,incrementQuantity}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [active,setActive] = useState(1);
  const [sArm,setSarm] = useState(true);
  const [dArm,setDamr] = useState(false);
  const [vm,SetVm] = useState(false);
  const [other,setOther] = useState(false);
  return (
    <div>
      <div
        className={`1350px:w-[94%] 1350px:mx-auto 1280px:w-[95%] 1280px:mx-auto 1024px:w-[98%] w-[100%] mt-[20px] mx-auto
         p-[8px] 1024px:p-0 monitorArmCategory`}
      >
        <div className={` pb-[10px] flex 300px:flex-col 768px:flex-row 768px:items-center 300px:gap-[10px] 768px:gap-[30px] 1024px:gap-[50px]`}>
          <h1 className="font-[600] uppercase pl-[5px] 1024px:pl-0">Monitor Arms</h1>

         <div className="subCategories font-semibold 
         300px:overflow-x-scroll whitespace-nowrap scroll scroll-smooth 768px:overflow-x-hidden">
          <span
            onClick={() => {
              // setIsClicked(true);
              setActive(1);
              setSarm(true);
              setDamr(false);
              SetVm(false);
              setOther(false);
            }}
          className={`${active===1?"text-[#077bc4]":""}`}>
            Single arm
          </span>
          <span
            onClick={() => {
              // setIsClicked(true);
              setActive(2);
              setSarm(false);
              setDamr(true);
              SetVm(false)
              setOther(false)
            }}
            className={`${active===2?"text-[#077bc4]":""}`}>
            dual arm
          </span>
          <span onClick={() => {
            // setIsClicked(true);
          setActive(3);
          setSarm(false);
              setDamr(false);
              SetVm(true)
              setOther(false)
          }} className={`${active===3?"text-[#077bc4]":""}`}>visa-mount-adapter</span>
          <span onClick={() => {
            // setIsClicked(true);
          setActive(4);
          setSarm(false);
              setDamr(false);
              SetVm(false)
              setOther(true)}}  className={`${active===4?"text-[#077bc4]":""}`}>other stand</span>
        </div>
        </div>

       <div className="">
        {sArm?(
           <div
           className={`grid grid-cols-2 gap-[3px] 
           md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[10px] xl:grid-cols-5 xl:gap-[8px] 1350px:grid-cols-6 1350px:gap-[5px] monitorProductCard ${
             isClicked
               ? "monitorProductCardClicked"
               : ""
           }`}
         >
           {productData &&
             productData.map((i, index) => <ProductCard data={i} key={index} open={open} setOpen={setOpen} 
             count={count} 
       decrementQuantity={decrementQuantity} incrementQuantity={incrementQuantity}/>)}
         </div>
        ):null}
        {dArm?(
          <div className="w-full overflow-hidden">
            <img src={image} alt="" className="w-full 1024px:h-[500px] h-full object-contain"/>
          </div>
        ):null}
        {vm?(
          <div className="w-full overflow-hidden">
            <img src={image} alt="" className="w-full 1024px:h-[500px] h-full object-contain"/>
          </div>
        ):null}
        {other?(
          <div className="w-full overflow-hidden">
            <img src={image} alt="" className="w-full 1024px:h-[500px] h-full object-contain"/>
          </div>
        ):null}
       </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
