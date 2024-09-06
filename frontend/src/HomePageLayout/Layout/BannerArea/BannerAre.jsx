import React from 'react'
import "./BannerArea.scss"
import Style from "../../../Styles/Styles"
import pic1 from "../../../Assets/img/bannerImg/banner-3.jpg";
import pic2 from "../../../Assets/img/bannerImg/banner4.jpg";
import pic3 from "../../../Assets/img/bannerImg/banner5.jpg";
import pic4 from "../../../Assets/img/bannerImg/banner6.jpg";

const BannerAre = () => {
  return (
    <div className={`1350px:w-[94%] 1024px:w-[98%] 1280px:w-[95%] mx-auto w-[98%] `}>
      <div className="imageContainer grid grid-cols-1 md:grid-cols-3">
        <div className="firstImg">
           <img src={pic1} alt="" />
        </div>
        <div className="midTwoimg grid grid-cols-1 grid-rows-2">
            <div className="midImg1"><img src={pic2} alt="" /></div>
            <div className="midImg2"><img src={pic3} alt="" /></div>
        </div>
        <div className="lastImg">
            <img src={pic4} alt="" />
        </div>
      </div>
    </div>
  )
}

export default BannerAre
