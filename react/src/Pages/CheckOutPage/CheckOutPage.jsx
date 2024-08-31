import React, { useState } from 'react'
import Styles from "../../Styles/Styles"
import "./CheckOut.scss"
import { RxCross2 } from 'react-icons/rx';
import bkash from "../../Assets/img/bKash.png";
import { FiChevronDown } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { BiSolidDiscount } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import nogod from "../../Assets/img/CheckOut/nogod.png";
import rocket from "../../Assets/img/CheckOut/rocket.png";
import credit from "../../Assets/img/CheckOut/credit.jpg";

const CheckOutPage = () => {
    const [coupon,setCoupon] = useState(false);
   
    const [quantity,setQuantity] = useState(1);
    const [partialCod,setPartialCod] = useState(false);
    const [paymentButton,setPaymentButton] = useState(true);
    const [partialPaymentButton,setPartialPaymentButton] = useState(false);
    const decrementQuantity = ()=>{
        if(quantity>1){
            setQuantity(quantity-1);
        }
    }
    const incrementQuantity = ()=>{
        setQuantity(quantity+1);
    }
    const data = [
        {
          name:"Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
          price:20000.00,
          sku:"N / A",
          img:{
            url:"https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg"
          }
        }
      ]
     const totalAmount = (data[0].price*quantity+150.00)
     const pCod = (totalAmount*0.25)
     const shippAdd1 = [
      {
        title:"Shipping address 1",
        name:"The DevMosaic",
        email:"devMosaic@gmail.com",
        phone:175467123456789,
        address:"Mymensingh,Dhaka",
        town:"Mymensingh",
        zip:2201
      }
     ] 
     const shippAdd2 = [
      {
        title:"Shipping address 2",
        name:" Dream Dev Weaver",
        email:"dreamDevWeaver@gmail.com",
        phone:175467123456789,
        address:"Jamalpur,Mymensingh,Dhaka",
        town:"Jamalpur",
        zip:1565
      }
     ] 
     const [newAdd,setNewAdd] = useState(false);
     const [otherShippAdd,setOtherShippAdd] = useState(false)
     const [shipping,setShipping] = useState(shippAdd1[0]);
     const [selected,setSelected] = useState(true)
     const [fullPayment,setFullPayment] = useState(true);
  return (
    <div className={`1350px:w-[84%] 1024px:w-[70%] 1280px:w-[95%] w-[98%] mx-auto flex flex-col 1280px:flex-row items-center justify-center gap-[20px]`}>
      <div className="1280px:w-[50%] w-[100%] px-2 py-2 1350px:py-1 1280px:mr-[50px] 1350px:mr-[20px] mr-0">
   
        <div className="w-full 1350px:w-[86%] 768px:p-[15px] p-[5px] mt-[50px] 300px:mt-[80px] 1280px:mt-[5px] 
        1350px:mt-0 rounded-md shadow-md shadow-[black]">   
            <div className={`mt-[5px]  overflow-hidden`}>
              <div className="flex items-center justify-between">
            <h1 className='text-[30px] 300px:text-[24px] 1350px:text-[20px]
             text-[#077bc4] font-semibold px-[5px] capitalize'>shipping details</h1>
             <div className="relative">
             <div className="flex items-center gap-[10px] cursor-pointer "
             onClick={()=>setOtherShippAdd(!otherShippAdd)}>
             
                  <h5 className='text-[13px] font-[500] text-[#242424]'
                  >{newAdd?"Shipping address 3":shipping.title}</h5>
                  <FiChevronDown className={`text-[13px] ${otherShippAdd===true?"rotate-180":"rotate-0"}`}/>
      
              </div>
             
             {
                otherShippAdd && (
                  <div className="absolute px-[5px] py-[3px] bg-[white] z-[9999] cursor-pointer shadow-sm shadow-[gray]">
                    
                       {
                        newAdd?(
                          <div>
                            <h5 className='text-[13px] font-[500] px-[2px] text-[#242424] hover:bg-[#077bc4] hover:text-white'
                              onClick={()=>{setShipping(shippAdd1[0]);setOtherShippAdd(false);setSelected(true);setNewAdd(false);}}>Shipping address 1</h5>

                            <h5 className='text-[13px] font-[500] px-[2px] text-[#242424] hover:bg-[#077bc4] hover:text-white'
                              onClick={()=>{setShipping(shippAdd2[0]);setOtherShippAdd(false);setSelected(false);setNewAdd(false);}}>Shipping address 2</h5>
                          </div>
                        ):(
                          <div>
                          {
                            selected===true ? (
                              <h5 className='text-[13px] font-[500] px-[2px] text-[#242424] hover:bg-[#077bc4] hover:text-white'
                              onClick={()=>{setShipping(shippAdd2[0]);setOtherShippAdd(false);setSelected(false);setNewAdd(false);}}>Shipping address 2</h5>
                            ) : null
                           }
    
                           {
                            selected === false ? (
                              <h5 className='text-[13px] font-[500] px-[2px] text-[#242424] hover:bg-[#077bc4] hover:text-white'
                              onClick={()=>{setShipping(shippAdd1[0]);setOtherShippAdd(false);setSelected(true);setNewAdd(false);}}>Shipping address 1</h5>
                            ) : null
                           } 
                                <div className="flex items-center gap-[5px]"
                                  onClick={()=>{setNewAdd(true);setShipping([]);setOtherShippAdd(false);}}>
                                   <GoPlus className="text-[13px]"/>
                                   <h5 className="text-[13px] font-[500]">Add address</h5>
                                  </div>                              
                          </div>
                        )
                       }
                     
                  </div>
                )
              }
             
             </div>
             </div>



            {
              newAdd ? (
                <>
                             <div className="768px:w-[90%] w-[100%] mt-[20px] 300px:ml-[20px] 768px:ml-[50px] 1280px:ml-[50px] 1350px:ml-[40px]">
                <label className="block pb-2 1350px:pb-[3px] 1350px:text-[12px]"> Name :</label>
                <input
                  type="text"
                  placeholder='*** Enter your name'
                  className={`px-[10px] py-[8px] 1350px:py-[4px]  1350px:text-[11px]
                  rounded-[50px] outline-none border border-[gray] !w-[90%]`}
                  value={''}
                  required
                />
            </div>
            <div className='flex items-center 768px:w-[86%] 1024px:w-[88%] 1350px:w-[89%] 1280px:w-[90%] mx-auto'>
            <div className="768px:w-[90%] w-[100%] mt-[10px] 1350px:mt-[5px] 300px:ml-[20px] 768px:ml-0 1024px:ml-[10px] 1280px:ml-[20px] 1350px:ml-[15px]">
                <label className="block pb-2 1350px:pb-[3px] 1350px:text-[12px]"> Email :</label>
                <input
                  type="email"
                  placeholder='*** Enter your email'
                  className={`px-[10px] py-[8px] 1350px:py-[4px]  1350px:text-[11px]
                  rounded-[50px] outline-none border border-[gray] !w-[90%]`}
                  value={''}
                  required
                />
            </div>
            <div className="768px:w-[90%] w-[100%] mt-[10px] 1350px:mt-[5px] 1280px:ml-[5px] 1350px:ml-0">
                <label className="block pb-2 1350px:pb-[3px] 1350px:text-[12px]"> Phone :</label>
                <input
                  type="number"
                  placeholder='*** Enter your number'
                  className={`px-[10px] py-[8px] 1350px:py-[4px]  1350px:text-[11px]
                  rounded-[50px] outline-none border border-[gray] !w-[90%]`}
                  value={''}
                  required
                />
            </div>
            </div>

            <div className="768px:w-[90%] w-[100%] mt-[10px] 1350px:mt-[5px] 300px:ml-[20px] 768px:ml-[50px] 1280px:ml-[50px] 1350px:ml-[40px]">
                <label className="block pb-2 1350px:pb-[3px] 1350px:text-[12px]"> Address :</label>
                <textarea
                  placeholder='Enter your address'
                  rows={3}
                  cols={10}
                  className='1350px:text-[10px] border border-[gray] w-[90%]'
                />
            </div>

        
            <div className='flex items-center 768px:w-[86%] 1024px:w-[88%] 1350px:w-[89%] 1280px:w-[90%] mx-auto'>
            <div className="768px:w-[90%] w-[100%] mt-[10px] 1350px:mt-[5px] 300px:ml-[20px] 768px:ml-0 1024px:ml-[10px] 1280px:ml-[20px] 1350px:ml-[15px]">
                <label className="block pb-2 1350px:pb-[3px] 1350px:text-[12px]"> Town / City :</label>
                <input
                  type="text"
                  placeholder='*** Enter your address'
                  className={`px-[10px] py-[8px] 1350px:py-[4px]  1350px:text-[11px]
                  rounded-[50px] outline-none border border-[gray] !w-[90%]`}
                  value={''}
                  required
                />
            </div>
            <div className="768px:w-[90%] w-[100%] mt-[10px] 1350px:mt-[5px] 1280px:ml-[5px] 1350px:ml-0">
                <label className="block pb-2 1350px:pb-[3px] 300px:text-[14px] 1350px:text-[12px]"> Postcode / ZIP (optional) :</label>
                <input
                  type="number"
                  placeholder='*** Enter your address'
                  className={`px-[10px] py-[8px] 1350px:py-[4px]  1350px:text-[11px]
                  rounded-[50px] outline-none border border-[gray] !w-[90%]`}
                  value={''}
                  required
                />
            </div>
            </div> 
            <div className="768px:w-[90%] w-[100%] 1350px:mt-[5px] mt-[10px] 300px:ml-[20px] 768px:ml-[50px] 1280px:ml-[50px] 1350px:ml-[40px]">
                <label className="block pb-2 1350px:pb-[3px] 1350px:text-[12px]"> Customization :</label>
                <textarea
                  placeholder='Enter your text'
                  rows={5}
                  cols={10}
                  className='1350px:text-[10px] border border-[gray] w-[90%]'
                />
            </div>
            <div className="768px:w-[90%] w-[100%] mt-[10px] flex items-center gap-[10px] 300px:ml-[20px] 768px:ml-[50px]
             1280px:ml-[50px] 1350px:ml-[40px] ">
              
               <label className="block pb-2 1350px:pb-[3px] 1350px:text-[12px]"> Country :</label>
                <p className='1350px:text-[11px]'> Bangladesh</p>
               
              
            </div>
                </>
              ):(
                <>
            <div className="768px:w-[90%] w-[100%] mt-[20px] 300px:ml-[20px] 768px:ml-[50px] 1280px:ml-[50px] 1350px:ml-[40px]">
                <label className="block pb-2 1350px:pb-[3px] 1350px:text-[12px]"> Name :</label>
                <input
                  type="text"
                  placeholder='*** Enter your name'
                  className={`px-[10px] py-[8px] 1350px:py-[4px]  1350px:text-[11px]
                  rounded-[50px] outline-none border border-[gray] !w-[90%]`}
                  value={shipping.name}
                  required
                />
            </div>
            <div className='flex items-center 768px:w-[86%] 1024px:w-[88%] 1350px:w-[89%] 1280px:w-[90%] mx-auto'>
            <div className="768px:w-[90%] w-[100%] mt-[10px] 1350px:mt-[5px] 300px:ml-[20px] 768px:ml-0 1024px:ml-[10px] 1280px:ml-[20px] 1350px:ml-[15px]">
                <label className="block pb-2 1350px:pb-[3px] 1350px:text-[12px]"> Email :</label>
                <input
                  type="email"
                  placeholder='*** Enter your email'
                  className={`px-[10px] py-[8px] 1350px:py-[4px]  1350px:text-[11px]
                  rounded-[50px] outline-none border border-[gray] !w-[90%]`}
                  value={shipping.email}
                  required
                />
            </div>
            <div className="768px:w-[90%] w-[100%] mt-[10px] 1350px:mt-[5px] 1280px:ml-[5px] 1350px:ml-0">
                <label className="block pb-2 1350px:pb-[3px] 1350px:text-[12px]"> Phone :</label>
                <input
                  type="number"
                  placeholder='*** Enter your number'
                  className={`px-[10px] py-[8px] 1350px:py-[4px]  1350px:text-[11px]
                  rounded-[50px] outline-none border border-[gray] !w-[90%]`}
                  value={shipping.phone}
                  required
                />
            </div>
            </div>   

            <div className="768px:w-[90%] w-[100%] mt-[10px] 1350px:mt-[5px] 300px:ml-[20px] 768px:ml-[50px] 1280px:ml-[50px] 1350px:ml-[40px]">
                <label className="block pb-2 1350px:pb-[3px] 1350px:text-[12px]"> Address :</label>
                <textarea
                  placeholder='Enter your text'
                  rows={3}
                  cols={10}
                  value={shipping.address}
                  className='1350px:text-[10px] border border-[gray] w-[90%]'
                />
            </div>
 
            <div className='flex items-center 768px:w-[86%] 1024px:w-[88%] 1350px:w-[89%] 1280px:w-[90%] mx-auto'>
            <div className="768px:w-[90%] w-[100%] mt-[10px] 1350px:mt-[5px] 300px:ml-[20px] 768px:ml-0 1024px:ml-[10px] 1280px:ml-[20px] 1350px:ml-[15px]">
                <label className="block pb-2 1350px:pb-[3px] 1350px:text-[12px]"> Town / City :</label>
                <input
                  type="text"
                  placeholder='*** Enter your address'
                  className={`px-[10px] py-[8px] 1350px:py-[4px]  1350px:text-[11px]
                  rounded-[50px] outline-none border border-[gray] !w-[90%]`}
                  value={shipping.town}
                  required
                />
            </div>
            <div className="768px:w-[90%] w-[100%] mt-[10px] 1350px:mt-[5px] 1280px:ml-[5px] 1350px:ml-0">
                <label className="block pb-2 1350px:pb-[3px] 300px:text-[14px] 1350px:text-[12px]"> Postcode / ZIP (optional) :</label>
                <input
                  type="number"
                  placeholder='*** Enter your address'
                  className={`px-[10px] py-[8px] 1350px:py-[4px]  1350px:text-[11px]
                  rounded-[50px] outline-none border border-[gray] !w-[90%]`}
                  value={shipping.zip}
                  required
                />
            </div>
            </div>
            <div className="768px:w-[90%] w-[100%] mt-[10px] 1350px:mt-[5px] 300px:ml-[20px] 768px:ml-[50px] 1280px:ml-[50px] 1350px:ml-[40px]">
                <label className="block pb-2 1350px:pb-[3px] 1350px:text-[12px]"> Customization :</label>
                <textarea
                  placeholder='Enter your text'
                  rows={5}
                  cols={10}
                  className='1350px:text-[10px] border border-[gray] w-[90%]'
                />
            </div>
            <div className="768px:w-[90%] w-[100%] mt-[10px] 1350px:mt-[5px] flex items-center gap-[10px] 300px:ml-[20px] 768px:ml-[50px]
             1280px:ml-[50px] 1350px:ml-[40px] ">
              
               <label className="block pb-2 1350px:pb-[3px] 1350px:text-[12px]"> Country :</label>
                <p className='1350px:text-[11px]'> Bangladesh</p>
               
              
            </div>
                </>
              )
            }
            </div>
        </div>
      </div>
      <div className="1280px:w-[45%] 1350px:w-[35%] 768px:w-[85%] w-[100%] 768px:p-3  p-[2px] rounded-md 
      shadow shadow-[#077bc4] bg-[#f7f7f7] mt-[20px] 1280px:mt-[5px] 1350px:mt-[2px] mb-[20px] 768px:mb-0">
        <h5 className='1350px:text-[13px] font-[400]'>Discount and Payment</h5>

            <div className="px-[10px] py-[5px] border-b-[1px] border-[rgba(0,0,0,0.2)]">
              <div className="flex items-center justify-between cursor-pointer" onClick={()=>setCoupon(!coupon)}>
                <div className="flex items-center gap-[10px]">
                 <BiSolidDiscount className="1350px:text-[14px] "/>
                 <p className='1350px:text-[13px] font-[400px]'>Coupon code</p>
                </div>
                <div className="flex items-center gap-[10px] ">
                  <p className="1350px:text-[13px] text-[#b3b3b3]">Enter Coupon code</p>
                   <IoIosArrowForward className="1350px:text-[13px]"/> 
                </div>
              </div>
              <div className={`${coupon?"openCoupon":"closeCoupon"} relative`}>
                <input type="text" className='w-full px-[10px] py-[3px] 
                1350px:text-[13px] outline-none border border-[rgba(0,0,0,0.2)]'/>
                <p className='1350px:text-[13px] absolute right-7 top-1 text-[#4882d9] cursor-pointer'>| Confirm</p>
              </div>
            </div>

            <div className="w-full px-2 py-3 1280px:py-2">
              <h4 className='font-[600] 1350px:text-[13px] text-[#f85606]'>Order Summary</h4>
            </div>
        <div className="w-full px-2 py-2 bg-white shadow shadow-[gray] mt-[10px] 1350px:mt-0">
            <div className="flex items-center justify-between pb-2 border-b border-[rgba(0,0,0,0.2)]">
                <h3 className='text-[20px] 1280px:text-[14px] 1350px:text-[11px] text-[#242424] font-[500] 768px:pl-3 pl-1 uppercase'>product</h3>
                <h3 className='text-[20px] 1280px:text-[14px] 1350px:text-[11px] text-[#242424] font-[500] 768px:pr-3 pr-0 uppercase'>subtotal</h3>
            </div>
            <div className="flex items-center justify-between py-3 1280px:py-1 border-b border-[rgba(0,0,0,0.2)]">
               <div className="flex items-center">
               <RxCross2  className='text-[#f51919] 768px:text-[18px] 1280px:text-[15px] 1350px:text-[13px] text-[22px]'/>
               <img src={data[0].img.url} alt="" className='768px:w-[70px] 1280px:w-[50px] 1280px:h-[50px] 1350px:w-[40px] w-[55px] 768px:h-[70px]
               1350px:h-[40px] h-[55px] object-cover cursor-pointer 768px:mx-[5px] mx-0'/>
               <div className="flex flex-col justify-center">
               <h5 className=' font-[500] pr-[14px] 768px:pr-0 768px:text-[18px] 1280px:text-[14px] 1350px:text-[11px] text-[14px] text-[#242424]'>{data[0].name.length>20?data[0].name.slice(0,20) + "...":data[0].name}</h5>
               <div className="px-1 flex items-center gap-[10px] mt-[5px]">
                <button className='w-[23px] h-[23px] 1280px:w-[18px] 1280px:h-[18px] bg-[#077bc4] text-white 1350px:text-[11px] outline-none border-none'
                onClick={decrementQuantity}>-</button>
                <span className='1350px:text-[11px]'>{quantity}</span>
                <button className='w-[23px] h-[23px] 1280px:w-[18px] 1280px:h-[18px] bg-[#077bc4] text-white 1350px:text-[11px] outline-none border-none'
                onClick={incrementQuantity}>+</button>
               </div>
               </div>
               </div>
               <span className='768px:text-[18px] 1280px:text-[14px] 1350px:text-[10px] text-[17px] font-semibold 768px:pr-3 pr-1
                text-[#077bc4]'>{(data[0].price*quantity).toFixed(2)}<strong>৳</strong></span>
            </div>
            <div className="mt-[10px] 1280px:mt-0 py-3 1280px:py-2 flex items-center justify-between border-b border-[rgba(0,0,0,0.2)]">
              <h5 className='text-[#242424] 768px:text-[18px] 1280px:text-[14px] text-[17px] 1350px:text-[11px] font-[500] capitalize 768px:pl-4 pl-1'>subtotal :</h5>
              <span className='768px:text-[18px] text-[17px] 1280px:text-[14px] 1350px:text-[10px] font-semibold 768px:pr-3 pr-1
                text-[#077bc4]'>{(data[0].price*quantity).toFixed(2)}<strong>৳</strong></span>
            </div>
            <div className="mt-[10px] py-3 1280px:py-2 1280px:mt-0 flex items-center justify-between border-b border-[rgba(0,0,0,0.2)]">
              <h5 className='text-[#242424] 768px:text-[18px] 1280px:text-[14px] text-[17px] 1350px:text-[11px] font-[500] capitalize 768px:pl-4 pl-1'>
                 delivery charges :</h5>
              <span className='768px:text-[18px] text-[17px] 1280px:text-[14px] 1350px:text-[10px] font-semibold 768px:pr-3 pr-1
                text-[#077bc4]'>150.00<strong>৳</strong></span>
            </div>
             <div className="mt-[10px] py-3 1280px:py-2 1280px:mt-0 flex items-center justify-between border-b border-[rgba(0,0,0,0.2)]">
              <h5 className='text-[#242424] 768px:text-[18px] 1280px:text-[14px] text-[17px] 1350px:text-[11px] font-[500] capitalize 768px:pl-4 pl-1'>total order amount :</h5>
              <span className='text-[18px] 1280px:text-[14px] 1350px:text-[10px] font-semibold 768px:pr-3 pr-1
                text-[#077bc4]'>{(totalAmount).toFixed(2)}<strong>৳</strong></span>
            </div>
           
                  <div className={`${partialCod?"openPcod":"closePcod"} overflow-hidden`}>
                    <div className="mt-[10px] py-3 1280px:py-2 1350px:mt-0 flex items-center justify-between border-b border-[rgba(0,0,0,0.2)]">
              <h5 className='text-[#242424] 768px:text-[18px] text-[17px] 1280px:text-[14px] 1350px:text-[11px] font-[500] capitalize 768px:pl-4 pl-1'>Remaining Amount to Pay in COD :</h5>
              <span className='768px:text-[18px] 1280px:text-[14px] text-[17px] 1350px:text-[10px] font-semibold 768px:pr-3 pr-1
                text-[#077bc4]'>{(totalAmount-pCod).toFixed(2)}<strong>৳</strong></span>
            </div>
                  <div className="mt-[10px] py-3 1280px:py-2 1350px:mt-0 flex items-center justify-between border-b border-[rgba(0,0,0,0.2)]">
              <h5 className='text-[#242424] 768px:text-[25px] 1280px:text-[15px] text-[19px] 1350px:text-[12px] font-[500] capitalize 768px:pl-4 pl-1'>for order confirmation :</h5>
              <span className='768px:text-[22px] text-[21px] 1280px:text-[15px] 1350px:text-[12px] font-semibold 768px:pr-3 pr-1
                text-[#f51919]'>{(pCod).toFixed(2)}<strong>৳</strong></span>
            </div></div>
            
              
            <div className="mt-[10px] pt-3 1280px:pt-2 1280px:mt-0 flex items-center justify-between">
              <h5 className='text-[#242424] 768px:text-[18px] 1280px:text-[14px] 1350px:text-[11px] text-[17px] font-[500] capitalize 768px:pl-4 pl-1'>
                Estimated Delivery Date:  </h5>
              <span className='768px:text-[18px] text-[16px] 1280px:text-[14px] 1350px:text-[11px] font-[500] 768px:pr-3 pr-0
                text-[#f85606]'>December 23, 2023</span>
            </div>
        </div>
            { fullPayment && 
          <div className={`${fullPayment?"openFullPayment":"closeFullPayment"}`}>
          <div className="mt-[50px] flex items-center gap-[5px] 1280px:mt-0 py-4 1280px:py-1 px-4 1350px:px-3">
  
          <div className="flex items-center ">
          <input type="radio" className='w-[18px] h-[18px] 1350px:w-[10px] 1350px:h-[10px] cursor-pointer pt-[5px] mt-[20px] 1350px:mt-0
           outline-none border border-[rgba(0,0,0,0.2)]' checked={paymentButton}
           onClick={()=>{setPaymentButton(!paymentButton);setPartialPaymentButton(false);setPartialCod(false)}}/>
          <img src={bkash} alt="" className='object-contain w-[120px] h-[40px] 1350px:w-[70px] 1350px:h-[20px] mt-[20px] 1350px:mt-0'/>
          </div>
          <div className="flex items-center ">
          <input type="radio" className='w-[18px] h-[18px] 1350px:w-[10px] 1350px:h-[10px] cursor-pointer pt-[5px] mt-[20px] 1350px:mt-0
           outline-none border border-[rgba(0,0,0,0.2)]' 
           onClick={()=>{}} disabled/>
          <img src={nogod} alt="" className='object-contain w-[120px] h-[40px] 1350px:w-[60px] 1350px:h-[15px] mt-[20px] 1350px:mt-0'/> 
          </div>
          <div className="flex items-center ">
          <input type="radio" className='w-[18px] h-[18px] 1350px:w-[10px] 1350px:h-[10px] cursor-pointer pt-[5px] mt-[20px] 1350px:mt-0
           outline-none border border-[rgba(0,0,0,0.2)]' 
           onClick={()=>{}} disabled/>
          <img src={rocket} alt="" className='object-contain w-[120px] h-[40px] 1350px:w-[50px] 1350px:h-[15px] mt-[20px] 1350px:mt-0'/> 
          </div>
          <div className="flex items-center">
          <input type="radio" className='w-[18px] h-[18px] 1350px:w-[10px] 1350px:h-[10px] cursor-pointer pt-[5px] mt-[20px] 1350px:mt-0
           outline-none border border-[rgba(0,0,0,0.2)]' 
           onClick={()=>{}} disabled/>
          <img src={credit} alt="" className='object-contain w-[120px] h-[40px] 1350px:w-[40px] 1350px:h-[25px] mt-[20px] 1350px:mt-0'/> 
          </div>
        </div>
          <div className={`${paymentButton?"openButton":"closeButton"} px-3 1350px:px-2 py-2 1280px:py-1 border-t border-[rgba(0,0,0,0.2)] 
          flex flex-col items-center overflow-hidden`}>
            <p className='font-[500] text-[18px] 1280px:text-[12px] 1350px:text-[9px] text-[#242424] ml-[20px] mt-[10px] 1350px:mt-[5px]'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
            <button className='w-[85%] h-[45px] 1350px:h-[30px] 1280px:w-[50%] bg-[#f85606] my-[20px] 1280px:my-[5px]
             text-white font-[500] rounded-[50px] uppercase 1280px:text-[14px] 1350px:text-[9px] text-center'>pay now (<span className=' font-semibold 1350px:text-[9px]'>
              {totalAmount.toFixed(2)}<strong>৳</strong></span>)</button>
          </div></div>  
            }
        <div className=" py-4 1280px:py-0 768px:px-4 1350px:px-3 px-2">

           <div className="mt-[15px] 1350px:mt-0 768px:px-[2] px-0 py-2 1350px:py-[2px] flex items-center">
           <input type="checkbox" className='w-[18px]  h-[18px] 1350px:h-[12px] 1350px:w-[12px] cursor-pointer pt-[5px] mr-[10px] 
           outline-none border border-[rgba(0,0,0,0.2)]' checked={partialPaymentButton}
           onClick={()=>{setPartialCod(!partialCod);setPartialPaymentButton(!partialPaymentButton);setPaymentButton(false);
            setFullPayment(!partialPaymentButton ? false : true)}}/>
           <label className='768px:text-[20px] 1280px:text-[14px] 1350px:text-[11px] text-[18px] text-[#242424] font-[500]'> CASH ON DELIVERY / PARTIAL COD {"  "}
           <span className='768px:text-[18px] 1280px:text-[12px] 1350px:text-[10px] text-[17px] font-[500] text-[#f85606]'>(*** for prevent fake order)</span></label>
           </div>
        </div>

        <div className={`${partialPaymentButton?"openButton2":"closeButton2"} px-3 1350px:px-2 py-2 1350px:py-1 
          flex flex-col items-center overflow-hidden`}>
                      <div className="mt-[5px] flex items-center gap-[5px] 1280px:mt-0 py-4 1280px:py-1 px-4 1350px:px-3 border-b border-[rgba(0,0,0,0.2)] ">
  
                <div className="flex items-center ">
                <input type="radio" className='w-[18px] h-[18px] 1350px:w-[10px] 1350px:h-[10px] cursor-pointer pt-[5px] mt-[20px] 1350px:mt-0
                outline-none border border-[rgba(0,0,0,0.2)]' checked={partialPaymentButton}
                onClick={()=>{setPaymentButton(!partialPaymentButton);setPartialPaymentButton(false);setPartialCod(false)}}/>
                <img src={bkash} alt="" className='object-contain w-[120px] h-[40px] 1350px:w-[70px] 1350px:h-[20px] mt-[20px] 1350px:mt-0'/>
                </div>
                <div className="flex items-center ">
                <input type="radio" className='w-[18px] h-[18px] 1350px:w-[10px] 1350px:h-[10px] cursor-pointer pt-[5px] mt-[20px] 1350px:mt-0
                outline-none border border-[rgba(0,0,0,0.2)]' 
                onClick={()=>{}} disabled/>
                <img src={nogod} alt="" className='object-contain w-[120px] h-[40px] 1350px:w-[60px] 1350px:h-[15px] mt-[20px] 1350px:mt-0'/> 
                </div>
                <div className="flex items-center ">
                <input type="radio" className='w-[18px] h-[18px] 1350px:w-[10px] 1350px:h-[10px] cursor-pointer pt-[5px] mt-[20px] 1350px:mt-0
                outline-none border border-[rgba(0,0,0,0.2)]' 
                onClick={()=>{}} disabled/>
                <img src={rocket} alt="" className='object-contain w-[120px] h-[40px] 1350px:w-[50px] 1350px:h-[15px] mt-[20px] 1350px:mt-0'/> 
                </div>
                <div className="flex items-center">
                <input type="radio" className='w-[18px] h-[18px] 1350px:w-[10px] 1350px:h-[10px] cursor-pointer pt-[5px] mt-[20px] 1350px:mt-0
                outline-none border border-[rgba(0,0,0,0.2)]' 
                onClick={()=>{}} disabled/>
                <img src={credit} alt="" className='object-contain w-[120px] h-[40px] 1350px:w-[40px] 1350px:h-[25px] mt-[20px] 1350px:mt-0'/> 
                </div>
              </div>
            <p className='font-[500] text-[18px] 1280px:text-[12px] 1350px:text-[9px] text-[#242424] ml-[20px] mt-[10px] 1350px:mt-[5px]'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
            <button className='w-[85%] h-[45px] 1350px:h-[30px] 1280px:w-[50%] bg-[#f85606] my-[20px] 1280px:my-[5px]
             text-white font-[500] rounded-[50px] uppercase 1280px:text-[14px] 1350px:text-[9px] text-center'>pay now (<span className=' font-semibold 1350px:text-[9px]'>
              {pCod.toFixed(2)}<strong>৳</strong></span>)</button>
          </div> 

      </div>
      </div>
  )
}

export default CheckOutPage
