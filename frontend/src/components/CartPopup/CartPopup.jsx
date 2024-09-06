import React, { useEffect, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

import "./CartPopup.scss";

const CartPopup = ({ setOpencart, openCart }) => {
  const cartData = [
    {
      name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver color",
      description: "test",
      price: 999,
    },
    {
      name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver color",
      description: "test",
      price: 999,
    },
    {
      name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver color",
      description: "test",
      price: 999,
    },
  ];

  // if (openCart===true) {
  //      var cartOuttSideHandler = (e)=>{
  //         if (!cartRef.current.contains(e.target) && e.target !== cartButton) {
  //             setOpencart(false)
  //         }
  //      }
  // }

  // useEffect(()=>{
  //   document.addEventListener('click',cartOuttSideHandler);
  //   return ()=>{
  //     document.removeEventListener('click', cartOuttSideHandler);
  //   }
  // })
  return (
    <>
      <div>
        <div className="flex w-full justify-end pt-5 pr-5">
          <RxCross1
            className="cursor-pointer 1024px:text-[22px] 1350px:text-[18px] text-[30px] text-[#242424]"
            onClick={() => setOpencart(false)}
          />
        </div>
        {/* items length */}
        <div className="768px:p-4 1024px:p-[2px] 1280px:p-2  p-[5px] flex items-center justify-between">
          <div className="flex ">
            <IoBagHandleOutline size={20} className="text-[#242424]" />
            <h5 className="pl-2 text-[14px] font-semibold text-[#242424] pt-[2px]">
              3 items
            </h5>
          </div>
          <div className="flex items-center gap-[5px] text-[#f51919] pr-[5px]">
            <MdDelete size={15} />
            <p className="capitalize font-[500] text-[13px]">Reset cart</p>
          </div>
        </div>
        {/* cart single items */}
        <br />
        <div className="w-full border-t">
          {cartData &&
            cartData.map((i, index) => <CartSingle key={index} data={i} />)}
        </div>
      </div>
      <div>
        {/* View Cart button */}
        <div className="px-5 mb-[10px] 1350px:mb-[5px]">
          <Link to="/cart" onClick={() => setOpencart(false)}>
            <div
              className={`h-[45px] 1350px:h-[40px]
            w-full flex items-center justify-center bg-[#305723] rounded-[10px]`}
            >
              <h1
                className="text-[#fff]
                text-[16px] 1280px:text-[14px] font-semibold"
              >
                View Cart
              </h1>
            </div>
          </Link>
        </div>
        {/* checkout button */}
        <div className="px-5 mb-3 1350px:mb-[8px]">
          <Link to="/checkout" onClick={() => setOpencart(false)}>
            <div
              className={`h-[45px] 1350px:h-[40px]
            w-full flex items-center justify-center bg-[#f57224] rounded-[10px]`}
            >
              <h1
                className="text-[#fff]
                text-[16px] 1280px:text-[14px] font-semibold"
              >
                Checkout Now (Tk. 2997{" "}
                <strong className="text-[16px] 1280px:text-[14px]">৳</strong>)
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

const CartSingle = ({ data }) => {
  return (
    <div className="border-b 1024px:p-1 1280px:p-3 1350px:p-[5px] 768px:p-2 p-[5px]">
      <div className="w-full flex items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzHalBuq-DcgDHDXE4IL1esh5NoAuLX4wNRfWdwePbGA&s"
          alt=""
          className="768px:w-[80px] 768px:h-[80px] 1280px:w-[50px] 1280px:h-[50px] w-[60px] h-[60px] ml-2"
        />
        <div className="768px:pl-[8px] pl-[5px]">
          <h1 className="text-[#242424] text-[14px] 1350px:text-[12px] font-[500] 768px:font-semibold">
            {data.name}
          </h1>

          <h4
            className="font-bold text-[14px] 1350px:text-[12px]
                    pt-[3px] text-[#077bc4]"
          >
            Tk. {data.price}{" "}
            <strong className="text-[14px] 1350px:text-[12px]">৳</strong>
          </h4>
        </div>
        <RxCross1 className="cursor-pointer" />
      </div>
    </div>
  );
};

export default CartPopup;
