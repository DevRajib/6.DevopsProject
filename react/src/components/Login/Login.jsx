import React, { useState } from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import {FcGoogle} from "react-icons/fc";
import {FaFacebookSquare} from "react-icons/fa";
import styles from "../../Styles/Styles"
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const[visible,setVisible] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center 1024px:justify-start py-12 sm:px-6 lg:px-8 1280px:py-10 1350px:py-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-md ">
        <h2 className="mt-12 300px:mt-6 1024px:mt-[70px] 1280px:mt-0 text-center text-2xl 300px:text-3xl 1350px:text-[20px]
        font-extrabold text-gray-700">
          Login to DecorationBd
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md 1350px:w-[100%] 1350px:max-w-[350px]
      rounded-sm shadow shadow-[#212121]">
        <div className="bg-white py-8 px-4 1350px:py-5 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6 1350px:space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm 1350px:text-[12px] font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="Enter your email***"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 1350px:py-1 border border-gray-300 rounded-md 
                  shadow-sm placeholder-gray-400 
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm 1350px:text-[10px]"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm 1350px:text-[12px] font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible?"text":"password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  placeholder="Enter your password***"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 1350px:py-1 border border-gray-300 rounded-md 
                  shadow-sm placeholder-gray-400 
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm 1350px:text-[10px]"
                />
                {visible? <AiOutlineEye 
               
                className="absolute right-2 top-2 cursor-pointer text-gray-500 text-[22px] 1350px:text-[16px]"
                onClick={()=>setVisible(false)} 
                />  : <AiOutlineEyeInvisible 
                
                className="absolute right-2 top-2 cursor-pointer text-gray-500 text-[22px] 1350px:text-[16px]"
                onClick={()=>setVisible(true)} 
                />}
              </div>
            </div>
            <div className={`${styles.normal_flex} justify-between`}>
                <div className={`${styles.normal_flex}`}>
                    <input type="checkbox" name="remember-me" id="remember-me"
                    className="h-4 w-4 1350px:h-3 1350px:w-3 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-gray-800 1350px:text-[12px]">
                        Remember me
                    </label>
                </div>
                <div className="text-sm 1350px:text-[12px]">
                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500 hover:underline">
                        Forgot your password?
                    </a>
                </div>
            </div>
            <div className={`${styles.normal_flex} justify-between`}>
                <div className={`${styles.normal_flex}`}>
                     <button type="submit" className=" relative 768px:w-[180px] 1350px:w-[130px] 
                     w-[122px] 300px:w-[155px] h-[40px] 1350px:h-[32px] flex
                     py-2 1350px:py-[6px] 300px:px-4 px-2 border border-transparent text-sm 1350px:text-[11px]
                     font-medium rounded-md text-white
                     bg-[#d34836] hover:bg-[#d34836ea] ">Continue with <span className="absolute 
                     300px:right-3 right-1
                     300px:top-2 top-[10px] items-center"><FcGoogle className="300px:text-[18px] 1350px:text-[12px] text-[14px]"/></span></button>
                </div>
                <div>
                <button type="submit" className=" relative 768px:w-[180px] 1350px:w-[130px] 
                     w-[122px] 300px:w-[155px] h-[40px] 1350px:h-[32px] flex
                     py-2 1350px:py-[6px] 300px:px-4 px-2 border border-transparent text-sm font-medium rounded-md text-white 1350px:text-[11px]
                     bg-[#3b5998] hover:bg-[#3b5898e8] ">Continue with <span className="absolute 
                     300px:right-3 right-1
                     300px:top-2 top-[10px]  items-center "><FaFacebookSquare className="300px:text-[18px] text-[14px] 1350px:text-[12px]"/></span></button>
                </div>
            </div>
            <div>
                    <button type="submit" className="group relative w-full h-[40px] 1350px:h-[32px] flex justify-center 
                    py-2 1350px:py-[6px] px-4 border border-transparent text-md font-medium rounded-md text-white 1350px:text-[12px]
                    bg-[#f57224] hover:bg-[#d37742]  " onClick={()=>navigate('/profile')}>Login</button>
                </div>
                <div className={`${styles.normal_flex} w-full`}>
                    <h4 className="1350px:text-[12px]">Not have any acccount?</h4>
                    <Link to="/signUp" className="text-blue-600 pl-2 1350px:text-[12px]">
                        Sign Up
                    </Link>
                </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
