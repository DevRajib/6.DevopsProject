import React from 'react'
import { FaOpencart } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom'
import { GiCheckMark } from "react-icons/gi";
import "./HdProCard.scss";
import QuickView from '../QuickView/QuickView';

const HdProductCard = ({data,open,setOpen}) => {
    const d = data.name;
    const product_name = d.replace(/\s+/g,"-");
  return (
    <div className='w-full 768px:h-[450px] 1280px:h-[400px] 1350px:h-[370px] h-[420px] bg-white rounded-md card-container2
    shadow-sm 768px:p-3 1024px:p-2 1280px:p-[2px]  p-[6px] relative cursor-pointer'>
      <div className="flex justify-end">
        </div>
        
            <div className='imgContainer2 bg-black overflow-hidden '>
            <Link to={`/product/${product_name}`}>
            <img src={data.image_Url[0].url} alt="" className='768px:w-[94%] 1024px:w-[96%] 
            1280px:w-[98%] 1500px:w-[94%] w-[98%] img
            mx-auto 768px:mt-[5px] 1024px:mt-[2px] 1500px:mt-[5px] mt-[2px] 768px:mb-[5px] 1024px:mb-[2px] 1500px:mb-[5px]
             mb-[2px] 768px:h-[210px] 1350px:h-[190px] h-[210px] object-cover'/>
            </Link>
            <span className='quickView2'><IoIosSearch size={16} title='Quick View'
            onClick={()=>setOpen(!open)}/></span>
            {open?(<QuickView open={open} setOpen={setOpen} data={data}/>):null}
            </div>
      
    
        <Link to={`/product/${product_name}`}>
          <h4 className='pb-2 font-[500] text-[#077bc4] pt-1 768px:ml-[5px] ml-[2px] 
           300px:text-[16px] 768px:text-[19px] 1024px:text-[17px] 1280px:text-[15px] 1350px:text-[13px] text-[14px]'>
            {data.name.length>16 ? data.name.slice(0,16) + "..." : data.name}
          </h4>
        </Link>
        <div className='flex flex-col items-center ml-[2px] gap-1 mr-1 justify-between overflow-hidden w-full'>
        <div className="stock2 text-[gray] flex items-center
         justify-between gap-[1px] mb-[5px] 768px:mr-[15px] 300px:mr-0 mr-[10px]">
            (<GiCheckMark className='text-[#007bc4] 768px:text-[16px] 1024px:text-[15px] 1280px:text-[14px]
            1350px:text-[13px] 300px:text-[14px] text-[13px]'/>
            <span className='capitalize font-semibold 768px:text-[16px] 1024px:text-[15px]
            1280px:text-[14px] 1350px:text-[13px] 300px:text-[14px]
            text-[13px] italic 768px:not-italic'>{data.stock}</span>)
          </div>
          <div className="price2 text-black  mr-[2px]">
        
            <span className='text-[#007bc4] font-bold 768px:mr-[5px] mr-[3px] 
            768px:text-[17px] 1024px:text-[14px] 1280px:text-[12px] 1350px:text-[13px]
            300px:text-[13px] text-[12px]'>{data.discount_price.toFixed(2)}<strong 
            className='768px:text-[17px] 1024px:text-[14px] 1280px:text-[12px] 1350px:text-[13px]
            300px:text-[14px] text-[12px] font-bold font-Roboto'>৳</strong></span>
            (<span className="lineThroughPrice line-through
            768px:text-[17px] 1024px:text-[14px] 1280px:text-[12px] 1350px:text-[13px]
            300px:text-[13px] text-[12px]">{data.price.toFixed(2)}
            <strong className='768px:text-[17px] 1024px:text-[14px] 1280px:text-[12px] 1350px:text-[13px]
             300px:text-[13px] text-[12px] font-bold font-Roboto'>৳</strong></span>)
          </div>
        </div>

        <div className="btn2 ">
          <div className="add-to-cart2 font-semibold	">add to cart</div>
          <div className="cart-icon2"><FaOpencart/></div>
        </div>
    </div>
  )
}

export default HdProductCard
