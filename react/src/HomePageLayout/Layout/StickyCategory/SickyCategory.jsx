import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Styles from "../../../Styles/Styles";
import { categoriesData} from "../../../Static/Data";
import { IoIosArrowForward } from 'react-icons/io';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import "./DsubCat.scss";
import { ImArrowRight } from 'react-icons/im';

const StickyCategory = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (category) => {
    navigate(`/shop?category=${category.title}`);
  };

  const handleSubCategorySubmit = (category, subcategory) => {
    navigate(`/shop?category=${category.title}&subCategory=${subcategory.title}`);
  };

  return (
    <div className='pb-4 w-[350px] bg-[#ffff] h-[368px]' style={{
      border: "1px solid rgba(0,0,0,0.1)",
      borderTop: "none",
    }}>
      {categoriesData && categoriesData.map((item) => (
        <div key={item.id} className={`${Styles.normal_flex} relative hover:bg-gray-300 catData`}
          onClick={() => handleSubmit(item)}
          onMouseEnter={() => setHoveredCategory(item)}
          onMouseLeave={() => setHoveredCategory(null)}
          style={{
            fontSize: "14px",
            
          }}>
           <div className="flex items-center gap-[5px]">
           <ImArrowRight  className='ml-[15px] text-[18px] 1350px:text-[17px]'/>
          <h3 className='m-3 cursor-pointer select-none h-full font-[500]'>{item.title}</h3>
           </div>
           <div className='absolute right-[5px] arrow'>
            <IoIosArrowForward />
          </div>
          <div>
            {hoveredCategory && hoveredCategory.id === item.id && (
              <div className={`subCategory`}>
                <div className='subCategoryItems'>
                  {item.subCategory.map((subcat) => (
                    <div key={subcat.id}>
                      <FaArrowRight />
                      <span  className='subCategory-item'
                         onClick={(e) => {
                          e.stopPropagation(); // Prevent parent onClick from triggering
                          handleSubCategorySubmit(item, subcat);
                        }}>{subcat.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StickyCategory;
