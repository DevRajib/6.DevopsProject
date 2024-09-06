import React, { useEffect, useState } from 'react'
import Styles from "../../Styles/Styles"
import { productData } from '../../Static/Data';
import ShopProduct from "../../components/ShopProduct/ShopProduct"
const SuggestedProduct = ({data}) => {
    const [products,setProducts] = useState(null);
    useEffect(()=>{
        const d = productData && productData.filter((i)=>i.category===data.category);
        setProducts(d);
    },[data])
  return (
    <>
    {
        data ? (
            <div className={`768px:p-4 300px:p-3 p-1 ${Styles.section} bg-[#eaeaea]`}>
                <h2 className={`${Styles.heading} text-[28px] 1350px:text-[22px] 1350px:pb-[5px] font-[600] text-[orangered]
                border-b border-white mb-5 1350px:mb-3 ml-[10px]`}>
                    Related Products
                </h2>
                <div className="productsPart grid grid-cols-1 gap-[10px]
        md:grid-cols-2 md:gap[15px] lg:grid-cols-4 xl:grid-cols-5 300px:w-[82%] w-[86%]">
           {products && products.map((i,index)=>(
              <ShopProduct data={i} key={index}/>
           ))}
           
        </div>
          </div>
        ) : null
    }
    </>
  )
}

export default SuggestedProduct
