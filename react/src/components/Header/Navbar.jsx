import React from 'react'
import Styles from "../../Styles/Styles";
import { Link } from 'react-router-dom';
const Navbar = ({ActiveHeading,setActiveHeading}) => {
 
  return (
    <div className={`${Styles.normal_flex}`}>
      
            <div className="flex" >
                <Link to={'/'}
                className={`${ActiveHeading===1?"text-[#007bc4]":"text-[#212121]"} 
                font-[500] px-6 cursor-pointer uppercase 1280px:text-[14px] 1350px:text-[13px]`}onClick={()=>setActiveHeading(1)}>
                home
                </Link>
                <Link to={'/shop'}
                className={`${ActiveHeading===2?"text-[#007bc4]":"text-[#212121]"} 
                font-[500] px-6 cursor-pointer uppercase 1280px:text-[14px] 1350px:text-[13px]`}onClick={()=>setActiveHeading(2)}>
                shop
                </Link>
                <Link to={'/about'}
                className={`${ActiveHeading===3?"text-[#007bc4]":"text-[#212121]"} 
                font-[500] px-6 cursor-pointer uppercase 1280px:text-[14px] 1350px:text-[13px]`}onClick={()=>setActiveHeading(3)}>
                about us
                </Link>
                <Link to={'/contact'}
                className={`${ActiveHeading===4?"text-[#007bc4]":"text-[#212121]"} 
                font-[500] px-6 cursor-pointer uppercase 1280px:text-[14px] 1350px:text-[13px]`}onClick={()=>setActiveHeading(4)}>
                contact us
                </Link>
            </div>
        
    </div>
  )
}

export default Navbar
