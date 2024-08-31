import React from 'react'
import { FaOpencart } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom'
import { GiCheckMark } from "react-icons/gi";
import "./ShopProduct.scss"
import QuickView from '../QuickView/QuickView';

const ShopProduct = ({data,open,setOpen}) => {
    const d = data.name;
    const product_name = d.replace(/\s+/g,"-");
  return (
    <div className='w-full h-[480px] 1350px:h-[350px] bg-white rounded-md card-container4
    shadow-xl 768px:p-3 1280px:p-[2px]  p-[2px] relative cursor-pointer'>
      <div className="flex justify-end">
        </div>
       
            <div className='imgContainer4 bg-black overflow-hidden'>
            <Link to={`/product/${product_name}`}>
            <img src={data.image_Url[0].url} alt="" className='768px:w-[94%] 1280px:w-[98%]  w-[98%] img
            mx-auto 768px:mt-[5px] 1280px:mt-[2px]  mt-[2px] 768px:mb-[5px]
            1280px:mb-[2px]  mb-[2px] h-[245px] 1350px:h-[170px] object-cover'/>
             </Link>
             <span className='quickView4'><IoIosSearch size={16} title='Quick View'
            onClick={()=>setOpen(!open)}/></span>
            {open?(<QuickView open={open} setOpen={setOpen} data={data}/>):null}
            </div>
       

        <Link to={`/product/${product_name}`}>
          <h4 className='pb-3 font-[500] text-[#077bc4] pt-2 768px:ml-[10px] 1280px:ml-[2px] 1300px:ml-[10px]
           ml-[5px] 768px:text-[17px] 1280px:text-[15px] 1350px:text-[14px] text-[15px]'>
            {data.name.length>18 ? data.name.slice(0,18) + "..." : data.name}
          </h4>
        </Link>
        <div className='flex flex-col 1280px:flex-col 1300px:flex-row 768px:flex-row items-center 768px:ml-[8px] 1280px:ml-0 1300px:ml-[8px]
         ml-0 gap-1 768px:mr-2 mr-0 stockAndPrice 
        justify-between overflow-hidden w-full'>
        <div className="stock4 flex items-center
         justify-between gap-[1px] mr-[10px] 768px:mr-0">
            (<GiCheckMark className='text-[#007bc4]  text-[13px] 1280px:text-[12px] '/>
            <span className='capitalize font-semibold italic 1280px:text-[12px] '>{data.stock}</span>)
          </div>
          <div className="price4 text-black  mr-[5px] 1280px:mr-0 1300px:mr-[5px]">
          <span className="lineThroughPrice line-through
            768px:text-[15px] 1280px:text-[14px] 1350px:text-[13px] text-[14px] mr-[2px]">{data.price.toFixed(2)}
            <strong className='768px:text-[15px] 1280px:text-[14px] 1350px:text-[13px] text-[14px] font-[400] font-Roboto'>৳</strong></span>
            <span className='text-[#007bc4] font-bold 768px:text-[15px] 1280px:text-[14px] 1350px:text-[13px] text-[14px]'>{data.discount_price.toFixed(2)}<strong 
            className='768px:text-[15px] 1280px:text-[14px] 1350px:text-[13px] text-[14px] font-bold font-Roboto'>৳</strong></span>
          </div>
        </div>

        <div className="btn4">
          <div className="add-to-cart4 font-semibold ">add to cart</div>
          <div className="cart-icon4"><FaOpencart/></div>
        </div>
    </div>
  )
}

export default ShopProduct
