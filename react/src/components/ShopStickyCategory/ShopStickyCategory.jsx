import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { FaArrowRight } from "react-icons/fa6";
// import { Link } from 'react-router-dom'
import Styles from "../../Styles/Styles"
import { categoriesData } from '../../Static/Data';
import "./ShopStickyCat.scss"
import { ImArrowRight } from 'react-icons/im';


const ShopStickyCategory = () => {
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const navigate = useNavigate();
    const handleSubmit = (i)=>{
        navigate(`/shop?category=${i.title}`);
        // window.location.reload();
    }
    const handleSubCategorySubmit = (category, subcategory) => {
      navigate(`/shop?category=${category.title}&subCategory=${subcategory.title}`);
    };
  return (
    <>
    <div className='pb-4 1300px:w-[340px] w-[270px] bg-[#fff] h-[450px] 1280px:h-[390px] 1350px:h-[388px]'style={{
      border:" 1px solid rgba(0,0,0,0.1)",
      borderTop:"none",
    }}>
      {
        categoriesData && categoriesData.map((item)=>(
            <div key={item.id} className={`${Styles.normal_flex} relative hover:bg-gray-300 catData1`}
            onClick={()=>handleSubmit(item)} style={{
              fontSize:"13px",
              padding:"2px",
            }} onMouseEnter={() => setHoveredCategory(item)}
            onMouseLeave={() => setHoveredCategory(null)}>
             <div className="flex items-center gap-[5px]">
             <ImArrowRight  className='ml-[15px] text-[18px] 1350px:text-[16px]'/>
            <h3 className='m-3 cursor-pointer select-none h-full font-[500]'>{item.title}</h3>
             </div>
                <div className='absolute right-[5px] arrow'>
                  <IoIosArrowForward/>
                </div>
                <div>
                {hoveredCategory && hoveredCategory.id === item.id && (
                   <div className={`subCategory1`}>
                   <div className='subCategoryItems1'>
                     {item.subCategory.map((subcat)=>(
                      <div key={subcat.id}><FaArrowRight/>
                     <span  className='subCategory-item1'
                         onClick={(e) => {
                          e.stopPropagation(); // Prevent parent onClick from triggering
                          handleSubCategorySubmit(item, subcat);
                        }}>{subcat.title}</span></div>
                     ))}
                   </div>
                </div>
                )}
                </div>
            </div>
      ))
    }
    </div>
    </>
  )
}

export default ShopStickyCategory
