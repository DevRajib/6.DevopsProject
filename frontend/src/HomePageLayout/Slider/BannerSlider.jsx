import React, { useEffect, useState } from "react";
import img1 from "../../Assets/img/bannerImg/banner-2.jpg";
import img2 from "../../Assets/img/bannerImg/banner-3.jpg";
import img3 from "../../Assets/img/bannerImg/banner-1.jpg";
import img4 from "../../Assets/img/bannerImg/banner4.jpg";
import img5 from "../../Assets/img/bannerImg/banner5.jpg";
import img6 from "../../Assets/img/bannerImg/banner6.jpg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./BannerSlider.scss";
import DropDown from "../Layout/StickyCategory/SickyCategory";

const BannerSlider = () => {
  const data = [
    {
      img: img1,
      title: "DecorationBd banner img1",
    },
    {
      img: img2,
      title: "DecorationBd banner img2",
    },
    {
      img: img3,
      title: "DecorationBd banner img3",
    },
    {
      img: img4,
      title: "DecorationBd banner img3",
    },
    {
      img: img5,
      title: "DecorationBd banner img3",
    },
    {
      img: img6,
      title: "DecorationBd banner img3",
    },
  ];
  const [currentSlider, setCurrentSlider] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const prevSlider = () => {
    setCurrentSlider(currentSlider === 0 ? data.length - 1 : currentSlider - 1);
  };
  const nextSlider = () => {
    setCurrentSlider(currentSlider === data.length - 1 ? 0 : currentSlider + 1);
  };

  useEffect(() => {
    let timeOut = null;
    timeOut =
      autoplay &&
      setTimeout(() => {
        nextSlider();
      }, 3500);
  });

  return (
      <div className="flex items-center 1280px:justify-between  justify-center 1280px:w-[94%] 1350px:w-[94.15%] mx-auto">
        <div className="category_dropdown 1280px:block  
        hidden">
            <DropDown/>
        </div>
        <div className="carousle !mx-auto">
      <div className="carousle_wrapper ">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={
                index === currentSlider
                  ? "carousle_card carousle_card-active"
                  : "carousle_card"
              } onMouseEnter={()=>setAutoplay(false)} onMouseLeave={()=>setAutoplay(true)}
            >
              <img src={item.img} alt={item.title} />
            </div>
          );
        })}
        <div className="arrow_left" onClick={prevSlider}>
          <IoIosArrowBack />
        </div>
        <div className="arrow_right" onClick={nextSlider}>
          <IoIosArrowForward />
        </div>
        <div className="pagination">
          {data.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index === currentSlider
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
              } onClick={()=>{setCurrentSlider(index)}}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
      </div>
  );
};

export default BannerSlider;
