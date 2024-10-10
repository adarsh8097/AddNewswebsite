import React from 'react';
import { PiHandPeaceDuotone } from 'react-icons/pi';
import router from 'next/router';
// import next from 'next';

const Login = () => {
   
      let handleSubmit =()=>{
         router.push('/Admin/Dashbord');
      }

      let hadleForgot =()=>{
        router.push('/Login/forgotPassword');
      }
  return (
    <div className=" flex flex-col sm:flex sm:flex-row bg-customgreen">
      {/* Login Form Section */}
      
      <div className="mt-32 mx-auto w-[full] sm:w-[50%]  sm:px-5 px-4">
      <h1 className="text-3xl font-black text-center mb-4 text-gray-800">Welcome Back !</h1>
       
      <div className=" border shadow-lg w-full px-12 py-12 bg-white rounded-2xl mb-10 ">
        {/* Login with icon */}
        <div className="flex items-center space-x-2 mb-6">
          <p className="text-xl font-semibold">Login</p>
          <PiHandPeaceDuotone className="text-2xl text-yellow-400" />
        </div>

        {/* Login Form */}
        <form>
          {/* User Id Input */}
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-customGray">User Id</label>
            <input
              type="email"
              className="px-3 py-2 border rounded-lg border-gray-300 rounded w-full  mt-2 outline-none"
              placeholder="Enter Your user ID"
              required
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-customGray">Password</label>
            <input
              type="password"
              className="px-3 py-2 border border-gray-300 rounded-lg w-full  mt-2 outline-none"
              placeholder="Enter Your password"
              required
            />
          </div>

          {/* Remember me & Forgot Password */}
          <div className="w-full flex justify-between items-center mb-6  flex-col  md:flex-row lg:flex-row" >
            <div>
              <input type="checkbox" id="remember" className="mr-2 text-justify" />
              <label htmlFor="remember" className="font-medium mb-6">
                Remember me
              </label>
            </div>
            <div>
              <p className="cursor-pointer text-[#094998] font-base py-4 " onClick={hadleForgot}>Forgot Password?</p>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-[#094998] text-white font-semibold px-5 py-2 mt-3 rounded-lg hover:bg-blue-600 w-full "
              onClick={handleSubmit}
            >
              Login 
            </button>
          </div>
        </form>
      </div>
      </div>
      {/* Right Side with Gradient Background */}
      <div className="w-full flex flex-col sm:w-[50%] justify-center items-center bg-gradient-to-b from-blue-500 to-black text-white">
        <div className="mb-5">
          <img src="../Assets/images/Logo.png" alt="Logo" className="w-32" />
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold mb-4 px-1  ">Welcome Back! Please Sign in to your Account.</p>
          <div className=" flex  justify-center item-center">
          <img
            src="../Assets/images/login.png"
            alt="Login illustration"
            className="w-[450px] px-2"
          />
          </div>
          <p className="text-center">Edit and manage your Everyday Posts, media, Profile.Everything in just one go</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
