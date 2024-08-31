import React, { useState } from 'react'
import Style from "../../../Styles/Styles";
import "./HomeDecor.scss";
import pic from "../../../Assets/img/bannerImg/banner4.jpg"
import { productData } from '../../../Static/Data';
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct.jsx"
// import ProductCard from '../../../components/ProductCard/ProductCard.jsx';
import HdProductCard from "../../../components/HomeDecProCard/HdProductCard.jsx"
import image from "../../../Assets/img/ProductNotFound/img4.jpg";
const HomeDecor = ({open,setOpen}) => {
  const [active,setActive] = useState(1);
  const [sArm,setSamr] = useState(true);
  const [dArm,setDarm] = useState(false);
  const [VArm,setVarm] = useState(false);
  const [Other,setOtharm] = useState(false);
  return (
    <div className={`1350px:w-[94%] 1350px:mx-auto 1024px:w-[98%] 1280px:w-[96%] 768px:mx-auto 
     ml-0 homeDecorContainer  1024px:p-[5px] p-[2px]`}>
      <div className="bannerAndFeatureSection ml-[10px] grid grid-cols-1">
        <div className="bannerPart">
            <img src={pic} alt="" />
            <h1 className='font-Roboto font-bold'>smart <br /> computing</h1>
            <button>Read more</button>
        </div>
        <div className="featuredPart">
          <h1 className='font-bold rounded-xl shadow-lg shadow-slate-500' >featured products</h1>
          <div className="grid grid-cols-1 grid-rows-5 1500px:w-[90%] w-[92%] mx-auto">
            {productData.slice(1,5).map((i,index)=>(
              <FeaturedProduct data={i} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="homeDecorProductSection">
          <div className="headingSbcategory font-bold">
              <h1>home & decor</h1>
          <div className="subCategories font-semibold 300px:overflow-x-scroll whitespace-nowrap scroll scroll-smooth 768px:overflow-x-hidden">
          <span className={`${active===1?"text-[#077bc4]":""}`}
          onClick={()=>{
            setActive(1);
            setSamr(true);
            setDarm(false);
            setVarm(false);
            setOtharm(false);
          }}>
            Single arm
          </span>
          <span className={`${active===2?"text-[#077bc4]":""}`}
          onClick={()=>{
            setActive(2);
            setSamr(false);
            setDarm(true);
            setVarm(false);
            setOtharm(false);
          }}>
            dual arm
          </span>
          <span className={`${active===3?"text-[#077bc4]":""}`}
          onClick={()=>{
            setActive(3);
            setSamr(false);
            setDarm(false);
            setVarm(true);
            setOtharm(false);
          }}>visa-mount-adapter</span>
          <span className={`${active===4?"text-[#077bc4]":""}`}
          onClick={()=>{
            setActive(4);
            setSamr(false);
            setDarm(false);
            setVarm(false);
            setOtharm(true);
          }}>other stand</span>
          </div> 
          </div>


           <div>
            {sArm?(
               <div
               className={`grid grid-cols-2 gap-[5px] md:grid-cols-2 md:gap-[5px] lg:grid-cols-4 
               lg:gap-[8px] xl:grid-cols-5 xl:gap-[5px]  homeDecorProductCard`}
             >
               {productData &&
                 productData.map((i, index) => <HdProductCard data={i} key={index} open={open} setOpen={setOpen}/>)}
             </div> 
            ):null}
            {dArm?(
             <div
             className={`grid grid-cols-2 gap-[5px] md:grid-cols-2 md:gap-[5px] lg:grid-cols-4 
             lg:gap-[5px] xl:grid-cols-5 xl:gap-[5px] homeDecorProductCard`}
           >
             {productData &&
               productData.slice(0,6).map((i, index) => <HdProductCard data={i} key={index} open={open} setOpen={setOpen}/>)}
           </div> 
            ):null}
            {VArm?(
             <div
             className={`homeDecorProductCard`}
           >
             <img src={image} alt="" className='1024px:w-[1000px] w-full 1024px:h-[500px] h-full 
             1024px:object-cover object-contain'/>
           </div> 
            ):null}
            {Other?(
              <div
              className={`grid grid-cols-2 gap-[5px] md:grid-cols-2 md:gap-[5px] lg:grid-cols-4 
              lg:gap-[5px] xl:grid-cols-5 xl:gap-[5px] homeDecorProductCard`}
            >
              {productData &&
                productData.slice(0,8).map((i, index) => <HdProductCard data={i} key={index} open={open} setOpen={setOpen}/>)}
            </div> 
            ):null}
           </div>
      </div>
    </div>
  )
}

export default HomeDecor
