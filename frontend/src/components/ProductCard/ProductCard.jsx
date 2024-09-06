import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { GiCheckMark } from "react-icons/gi";
import "./ProductCard.scss";
import { FaOpencart } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import QuickView from "../../components/QuickView/QuickView.jsx"


const ProductCard = ({data,open,setOpen,count,decrementQuantity,incrementQuantity}) => {
  // const [hoverCartIcon,setHoverCartIcon] = useState(false);
  const [quantity,setQuantity] = useState(1);
  const decrementNumber = ()=>{
    if(quantity>1){setQuantity(quantity-1)}
  }
  const incrementNumber = ()=>{setQuantity(quantity+1)}
  const d = data.name;
  const product_name = d.replace(/\s+/g,"-");


  return (
    <div className='w-full 768px:h-[500px] 1280px:h-[430px] 1350px:h-[420px] 300px:h-[510px] h-[440px] bg-black rounded-md card-container
    shadow-sm 768px:p-3 1024px:p-[5px] 1350px:p-[2px] p-[8px] relative cursor-pointer'>
      <div className="flex justify-end">
        </div>
        <div className='imgContainer'>
          <Link to={`/product/${product_name}`}>
            <img src={data.image_Url[0].url} alt="" className='img 768px:w-[94%] w-[98%] 1024px:w-[98%] 1350px:w-[98%]
            mx-auto 768px:mt-[5px] 1024px:mt-[2px]  mt-[2px] 768px:h-[220px] 1280px:h-[200px] 300px:h-[220px] h-[170px] object-cover'/>
          </Link>
            <span className='quickView'
            onClick={()=>setOpen(!open)}><IoIosSearch size={16} title='Quick View'
            /></span>
            {open?(<QuickView open={open} setOpen={setOpen} data={data}/>):null}
        </div> 
        <Link to={`/product/${product_name}`}>
          <h4 className='pb-3 font-[500] text-white 768px:pt-2 pt-[5px] 
          768px:ml-[14px] 1024px:ml-[7px] 1350px:ml-[5px] ml-[5px] 768px:text-xl 1024px:text-[18px] 1350px:text-[14px]
           300px:text-[16px] text-[14px]'>
            {data.name.length>20 ? data.name.slice(0,20) + "..." : data.name}
          </h4>
        </Link>
        <div className='flex items-center 768px:ml-[14px] 1024px:ml-[5px]  justify-center 
        768px:justify-between flex-col 768px:flex-row 1350px:flex-col'>
        <div className="stock text-white flex items-center 768px:gap-[2px] ">
            (<GiCheckMark className='text-[#007bc4] 768px:text-[16px] 1024px:text-[14px] 1280px:text-[12px] 1350px:text-[13px] ml-[3px] 768px:ml-0'/>
            <span className='capitalize italic text-[12px] 300px:text-[14px] 768px:text-[14px] 1024px:text-[13px] 1280px:text-[12px]
            1350px:text-[12px] mr-[2px] 768px:mr-0'>{data.stock}</span>)
          </div>
          <div className="price text-white  768px:mr-[12px] 1024px:mr-[5px] 1500px:mr-[12px] mr-[2px]">
            <span className="lineThroughPrice line-through 
            768px:text-[18px] 1024px:text-[15px] 1350px:text-[13px] 768px:font-semibold 300px:text-[16px] 
            text-[13px] 768px:mr-[6px] mr-[3px]">{data.price.toFixed(2)}
            <strong className='768px:text-[16px] 1024px:text-[15px] 1350px:text-[13px] 300px:text-[16px] text-[13px] font-[400] font-Roboto'>৳</strong></span>
            <span className='text-[#007bc4] font-bold 768px:text-[18px] 1024px:text-[14px] 1350px:text-[13px] 300px:text-[16px]
            text-[13px]'>{data.discount_price.toFixed(2)}<strong 
            className='768px:text-[18px] 1024px:text-[14px] 1350px:text-[13px] 300px:text-[16px] text-[13px] font-bold font-Roboto'>৳</strong></span>
          </div>
        </div>

        <div className="quantity mx-auto">
          <span className='minus ' onClick={decrementNumber}>-</span>
          <span>{quantity}</span>
          <span className='plus' onClick={incrementNumber}>+</span>
        </div>
        <div className="btn ">
          <div className="add-to-cart">add to cart</div>
          <div className="cart-icon"><FaOpencart/></div>
        </div>
    </div>
  )
}

export default ProductCard
