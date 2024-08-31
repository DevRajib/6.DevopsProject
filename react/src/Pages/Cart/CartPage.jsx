import React, { useState } from 'react'
import Styles from "../../Styles/Styles"
import "./CartPage.scss";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TiShoppingCart } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { MdLocalOffer } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [quantity,setQuntity] = useState(1)
  const decrementQuantity = ()=>{
    if(quantity>1){
        setQuntity(quantity-1);
    }
  }
  const incrementQuantity = ()=>{
    setQuntity(quantity+1);
  }
  const[ischecked,setIsChecked] = useState(true);
  const data = [
    {
      name:"Iphone 14 pro max 256 gb ssd and 8 gb ram silver",
      price:20000.00,
      sku:"N / A",
      img:{
        url:"https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg"
      }
    }
  ]
  return (
    <div className={` 1350px:w-[88%] 1280px:w-[95%] 1024px:w-[94%] w-[99%] mx-auto`}>
      <div className="flex items-center flex-col 1280px:flex-row w-full 1280px:mt-[50px] 1350px:mt-[30px] 1280px:justify-center
       mt-[100px] gap-[20px]">
      <div className="1500px:w-[56%] 1024px:w-[90%] 1280px:w-[60%]  w-[100%] overflow-hidden">
        
        <div className="mt-0">
          <h1 className='capitalize font-semibold 768px:text-[30px] 1350px:text-[22px] text-[25px] text-[#077bc4] mb-[40px]'>
            <TiShoppingCart  className='inline 768px:text-[40px] 1350px:text-[30px] text-[30px]'/> shopping cart</h1>
            <table className='w-full mt-[20px] hidden 768px:block'>
              <thead className='w-full'>
                <tr className='w-full border-b border-[rgba(0,0,0,0.2)]'>
                  <th className='1500px:w-[50%] 1280px:w-[30%] 768px:w-[40%] w-[30%] 
                  text-center font-[500] 768px:text-[20px] 1350px:text-[14px] text-[17px] 1500px:px-[150px] 1280px:px-[90px]
                  768px:px-[40px] px-[30px] pb-[10px]'>PRODUCT</th>
                  <th className='w-[10%] text-center font-[500] 1280px:text-[20px] 1350px:text-[14px] 768px:text-[18px] px-[20px] pb-[10px]'>SKU</th>
                  <th className='w-[10%] text-center font-[500] 1280px:text-[20px] 1350px:text-[14px] 768px:text-[18px] px-[20px] pb-[10px]'>PRICE</th>
                  <th className='w-[20%] 1350px:w-[4%] text-center font-[500] 1280px:text-[20px] 1350px:text-[14px] 768px:text-[18px] px-[20px] 1350px:px-[10px] pb-[10px]'>QUANTITY</th>
                  <th className='w-[10%] text-center font-[500] 1280px:text-[20px] 1350px:text-[14px] 768px:text-[18px] px-[10px] pb-[10px]'>SUBTOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr className='w-full border-b border-[rgba(0,0,0,0.2)]'>
                  <td className='flex items-center 768px:py-3 py-1'>
                   <input type="checkbox" className='h-[12px] w-[12px] mr-[5px]' checked={ischecked} required
                   onClick={()=>setIsChecked(!ischecked)}/>
                    <img src={data[0].img.url} alt="" className='768px:w-[70px] w-[40px] 768px:h-[70px] 1350px:h-[50px] 1350px:w-[50px]
                    h-[40px] 768px:px-[10px] px-[2px] object-cover'/>
                    <h4 className='font-semibold 1500px:text-[18px] 1350px:text-[13px]
                    768px:text-[16px] 1280px:text-[16px] 
                    text-[14px] text-[#242424] 768px:px-[6px] px-[1px]'>{data[0].name.length>15?data[0].name.slice(0,15)+"...":data[0].name}</h4>
                  </td>
                  <td className='text-center 1500px:px-[10px] 1280px:px-[5px] px-[5px] 
                  font-[500] 1500px:text-[18px] 1280px:text-[16px] 1350px:text-[13px] text-[16px] text-[#242424] py-3'>{data[0].sku}</td>
                  <td className='text-center mx-[15px] 
                  font-semibold 1500px:text-[18px] 1280px:text-[16px] 1350px:text-[13px] 768px:text-[16px] text-[#242424] py-3'>{data[0].price.toFixed(2)} <strong className='text-[16px] 1350px:text-[13px]'>৳ </strong></td>
                  <td className='text-center px-[45px] 1280px:px-[35px] 1500px:px-[45px] 1350px:px-[50px] 
                  font-semibold 1500px:text-[18px] 1280px:text-[16px] 1350px:text-[13px] 768px:text-[16px] text-[#242424] py-3'>
                   <div className='flex items-center 1280px:gap-[15px] gap-[10px]'>
                   <button className='h-[25px] w-[25px] 1350px:h-[22px] 1350px:w-[22px] 
                   bg-[#077bc4] text-white text-center border-none outline-none'
                   onClick={decrementQuantity}>-</button>
                    <span>{quantity}</span>
                    <button className='h-[25px] w-[25px] 1350px:h-[22px] 1350px:w-[22px]
                    bg-[#077bc4] text-white text-center border-none outline-none'
                    onClick={incrementQuantity}>+</button>
                   </div>
                  </td>
                  <td className=' text-center px-[10px] 1280px:px-[5px] 1500px:px-[10px] 
                  font-semibold 1500px:text-[18px] 1280px:text-[16px] 1350px:text-[13px] 768px:text-[16px] text-[#077bc4] py-3
                  '>{(data[0].price*quantity).toFixed(2)} <strong className='text-[16px] 1350px:text-[13px]'>৳ </strong>
                 
                  </td>
                  <td className='text-center px-[20px]'><RxCross2  className='text-[red]  font-bold ml-[5px] 
                    768px:text-[16px] text-[18px]'/></td>
                </tr>
              </tbody>
            </table>

            <div className='flex items-center gap-[5px] 768px:hidden w-full shadow shadow-[#077bc4] py-[2px] rounded-md'>
              <div className="w-[30%] overflow-hidden">
                <img src={data[0].img.url} alt="" className='h-[100px] w-[100px] object-cover'/> 
              </div>
              <div className="w-[68%]">
                <div className="flex flex-col gap-[5px] justify-center pr-[3px]">
                  <div className="flex  justify-between border-b border-[rgba(0,0,0,0.2)] py-[2px]">
                    <h5 className='text-[16px] text-[#242424] font-[600] capitalize px-[2px]'>{data[0].name}</h5>
                    <RxCross2 className='inline-block text-[35px] text-[orangered]'/>
                  </div>
                  <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.2)] py-[2px]">
                    <h5 className='text-[15px] text-[#242424] uppercase font-[600]'>sku</h5>
                    <p className='uppercase font-[600] text-[16px] text-[#242424]'>n / a</p>
                  </div>
                  <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.2)] py-[2px]">
                    <h5 className='uppercase font-[600] text-[15px] text-[#242424] '>price</h5>
                    <p className='font-[600] text-[16px] text-[#242424] pr-[3px]'>{data[0].price.toFixed(2)} <strong>৳ </strong></p>
                  </div>
                  <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.2)] py-[2px]">
                    <h5 className='font-[600] text-[15px] text-[#242424] uppercase'>quantity</h5>
                    <div className='flex items-center gap-[10px]'>
                   <button className='h-[25px] w-[25px] bg-[#077bc4] text-white text-center border-none outline-none'
                   onClick={decrementQuantity}>-</button>
                    <span>{quantity}</span>
                    <button className='h-[25px] w-[25px] bg-[#077bc4] text-white text-center border-none outline-none'
                    onClick={incrementQuantity}>+</button>
                   </div>
                  </div>
                  <div className="flex items-center justify-between ">
                    <h5 className='font-[600] text-[15px] text-[#242424] uppercase'>subtotal</h5>
                    <p className='text-[16px]  font-[600] pr-[3px] text-[#077bc4]'>
                      {(data[0].price*quantity).toFixed(2)} <strong>৳ </strong></p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="1280px:w-[35%] 1350px:w-[28%] 768px:w-[80%] w-[100%] border-[2px] mt-[30px] 1350px:mt-[8px] shadow 768px:shadow-[#077bc4] 
      768px:py-[10px] 1350px:py-[4px] py-[6px] shadow-[orangered]
      border-[rgba(0,0,0,0.2)] outline-none 1280px:ml-[50px] mb-[50px] 768px:mb-0">
        <div className="w-full 768px:p-3 1350px:p-1 p-1">
          <h1 className='768px:text-[28px] 1350px:text-[20px] text-[26px] text-[#077bc4] 
          font-[500] capitalize px-3 768px:py-3 py-2 768px:my-[8px] my-[5px]'>cart summary</h1>
         <div className="border-b border-[rgba(0,0,0,0.2)] my-[10px] py-[10px]">
         <div className="flex items-center justify-between 768px:px-3 px-1">
            <h5 className='capitalize 768px:text-[18px] text-[16px] 1350px:text-[13px] font-[500] text-[#242424]'>subtotal :</h5>
           {ischecked?(
             <span className='768px:text-[18px] text-[16px] 1350px:text-[11px] font-[600] text-[#077bc4]
             '>{(data[0].price*quantity).toFixed(2)}<strong>৳</strong></span>
           ):(
            <span className='768px:text-[18px] text-[16px] 1350px:text-[11px] font-[600] text-[#077bc4]
            '>0.00<strong>৳</strong></span>
           )}
          </div>
          <div className="flex items-center justify-between 768px:px-3 px-1 py-[4px]">
            <h5 className='capitalize 768px:text-[18px] text-[16px] 1350px:text-[13px] font-[500] text-[#242424]'>delivery charges :</h5>
            {ischecked?(
                          <span className='768px:text-[18px] text-[16px] 1350px:text-[11px] font-semibold text-[#077bc4]
                          '>150.00<strong>৳</strong></span>
            ):(
              <span className='768px:text-[18px] text-[16px] 1350px:text-[11px] font-semibold text-[#077bc4]
              '>0.00<strong>৳</strong></span>
            )}
          </div>
          <div className="flex items-center justify-between 768px:px-3 px-1 py-[4px]">
           <input type="number" placeholder='Enter coupon code' className='1350px:text-[10px] py-1 1350px:py-[3px]
           px-[10px] w-[52%] outline-none border border-[rgba(0,0,0,0.2)]'/>
           <button className='300px:text-[14px] 1350px:text-[10px] 
           1350px:py-[3px] py-1 text-white uppercase w-[22%] 1350px:h-[24px] 300px:h-[30px] 
           text-center bg-[#25a5d8]'>Apply</button>
          </div>
          <div className="flex items-center justify-between 768px:px-3 px-1 py-[2px]">
            <h5 className='capitalize 768px:text-[18px] text-[16px] 1350px:text-[13px] font-[500] text-[#242424]'>Estimated Delivery Date :</h5>
            <span className='768px:text-[18px] text-[16px] 1350px:text-[12px] font-[500] text-[orangered]
            '>December 21, 2023</span>
          </div>
         </div>
         <div className="flex items-center justify-between 768px:px-3 px-1">
            <h3 className='capitalize 768px:text-[25px] 1350px:text-[13px] text-[22px] font-semibold text-[#242424]'>Total :</h3>
              {
                ischecked?(
                  <span className='768px:text-[20px] text-[18px] 1350px:text-[12px] font-semibold text-[#077bc4]
                  '>{(data[0].price*quantity+150.00).toFixed(2)}<strong>৳</strong></span>
                ):(
                  <span className='768px:text-[20px] text-[18px] 1350px:text-[12px] font-semibold text-[#077bc4]
                  '>0.00<strong>৳</strong></span>
                )
              }
          </div>
          <div className="w-full 768px:px-4 px-1 text-center mb-[10px] mt-[50px]">
            <Link to="/checkout">
              <button className='768px:w-[60%] 1280px:w-[65%] 1350px:w-[60%] w-[70%] px-[10px] py-[8px] 768px:text-[16px] text-[16px] 1350px:text-[10px]
              uppercase outline-none border-none rounded-[50px] bg-[#f57224] text-white font-[500]'>
                procced to checkout ({ischecked?(data.length):0})
              </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default CartPage
