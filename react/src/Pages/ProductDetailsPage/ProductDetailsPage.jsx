import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productData } from '../../Static/Data';
import ProductDetails from "../../components/ProductDetails/ProductDetails.jsx";
import SuggestedProduct from "../../components/SuggestedProduct/SuggestedProduct.jsx"

const ProductDetailsPage = ({count,decrementQuantity,incrementQuantity}) => {
    const {name} = useParams();
    const [data,setData] = useState(null);
    const Product_name = name.replace(/-/g," ");

    useEffect(()=>{
        const data = productData.find((i)=>i.name === Product_name);
        setData(data);
    })

  return (
    <div>
      <ProductDetails data={data} count={count}
      decrementQuantity={decrementQuantity} incrementQuantity={incrementQuantity}/>
      {
      data && <SuggestedProduct data={data}/>
    }
    </div>
  )
}

export default ProductDetailsPage
