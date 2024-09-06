import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"

const LayOut = ({dropDown,setDropDown}) => {
  
  return (
    <div>
      <Header dropDown={dropDown} setDropDown={setDropDown}/>  
      <Outlet setDropDown={setDropDown}/>
      <Footer/>
    </div>
  )
}

export default LayOut
