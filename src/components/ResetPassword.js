import React from 'react';
import { useRouter } from 'next/router';
import { PiHandPeaceDuotone } from 'react-icons/pi';
import { FaArrowLeft } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";

const ResetPassword = () => {
  const router = useRouter();

  let handleSubmit = (event) => {
    event.preventDefault();
    router.push('/Login/comfermation');
  };


  return (
    <div className="flex flex-col sm:flex sm:flex-row bg-customgreen h-screen">
      {/* Left Side: Form Section */}
      <div className="h-auto mt-32 mx-auto w-full sm:w-[50%] sm:px-5 px-4">
           
        <div className="border shadow-lg w-full px-12 py-12 bg-white rounded-2xl mb-10">
            <div className="flex justify-center items-center ">
            <IoMdLock className="text-4xl" />
            </div>

          <div className="w-full text-center">
        
            <h1 className="text-3xl font-black text-center mb-4 text-gray-800">
              Reset your Password
            </h1>
            <p className="">
              Forgot Your Password? Please enter your email and you will receive a 4-digit code
            </p>
          </div>

          {/* Reset Password Form */}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-4">
              <label className="font-semibold text-customGray">Mail ID</label>
              <input
                type="email"
                className="px-3 py-2 border rounded-lg border-gray-300 w-full mt-2 outline-none"
                placeholder="Enter Your Email Id"
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-[#094998] text-white font-semibold px-5 py-2 mt-3 rounded-lg hover:bg-blue-600 w-full"
              >
                Get 4-digit code
              </button>
            </div>

          </form>
          <div className="mb-4 mt-6 flex space-x-4">
             <FaArrowLeft/>
            <p className="cursor-pointer" onClick={handleSubmit}>Back To Login</p>
        </div>
        </div>
       
      </div>

      {/* Right Side: Info Section */}
      <div className="w-full flex flex-col sm:w-[50%] justify-center items-center bg-customblue text-white">
        <div className="mb-5 mt-8">
          <img src="../Assets/images/Logo.png" alt="Logo" className="w-32" />
        </div>

        <div className="text-center ">
          <p className="text-4xl font-extrabold mb-4 px-6">
            Welcome Back! Please Sign in to your Account.
          </p>
          <p className="text-center px-6 ">
            Edit and manage your Everyday Posts, media, Profile. Everything in just one go.
          </p>
          <div className="flex justify-center items-center">
          <img
            src="../Assets/images/forgotimg.png"
            alt="Login illustration"
            className="w-[500px] h-[440px]"
          />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
