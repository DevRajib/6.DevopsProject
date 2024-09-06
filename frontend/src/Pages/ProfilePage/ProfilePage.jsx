import React, { useState } from 'react'
import Styles from "../../Styles/Styles";
import ProfileSidebar from "../../components/Profile/ProfileSidebar/ProfileSidebar.jsx";
import ProfileContent from "../../components/Profile/ProfileContent/ProfileContent.jsx";


const ProfilePage = () => {
    const [active,setActive] = useState(1);
  return (
    <div>
      <div className={`1500px:${Styles.section} 1024px:w-[98%] 1280px:w-[96%] 1350px:w-[94%] w-[98%] flex bg-[#f5f5f5] py-10 1280px:mt-[20px] 1350px:mt-[10px] mt-[80px]`}>
        <div className='1500px:w-[335px] 1280px:w-[270px] w-[60px] 768px:w-[70px] 768px:ml-[10px] 300px:ml-[5px]'>
            <ProfileSidebar active={active} setActive={setActive}/>
        </div>
        <ProfileContent active={active}/>
      </div>
    </div>
  )
}

export default ProfilePage
