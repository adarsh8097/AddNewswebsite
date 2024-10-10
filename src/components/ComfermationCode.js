import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { PiHandPeaceDuotone } from 'react-icons/pi';
import { FaArrowLeft } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";

const ComfermationCode = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(new Array(4).fill(""));

  let handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle OTP verification
    router.push('/Login/newpassword');
  };

  // Function to handle OTP input
  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Move to the next input if a number is entered
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
 
//    let handleItem = ()=>{
//      router.push('/Login/newpassword')
//    }
  return (
    <div className="flex flex-col sm:flex sm:flex-row bg-customgreen h-screen">
      {/* Left Side: Form Section */}
      <div className="h-auto mt-4 sm:mt-32 mx-auto w-full sm:w-[50%] sm:px-5 px-4">
        <div className="border shadow-lg w-full px-12 py-12 bg-white rounded-2xl mb-10">
          <div className="flex justify-center items-center ">
            <IoMdLock className="text-4xl" />
          </div>

          <div className="w-full text-center">
            <h1 className="text-3xl font-black text-center mb-4 text-gray-800">
              Enter confirmation code
            </h1>
            <p className="text-gray-800 text-base">
              We sent a code to <span className="text-blue-500">emailexample@gmail.com</span>
            </p>
          </div>

          {/* Reset Password Form */}
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center gap-2 mb-4 mt-4">
              {/* OTP Input Fields */}
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  className="w-12 h-12 text-center border border-gray-300 rounded-lg text-lg font-semibold"
                  maxLength="1"
                  value={data}
                  onChange={(e) => handleOtpChange(e.target, index)}
                  onFocus={(e) => e.target.select()} // Select the text when clicked
                />
              ))}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-[#094998] text-white font-semibold px-5 py-2 mt-3 rounded-lg hover:bg-blue-600 w-full"
                // onClick={handleItem}
              >
                Verify Code
              </button>
            </div>
          </form>

          <div className="w-full text-center mb-4 mt-4">
            <p className="text-gray-800">Didn’t receive the email?<span className="text-blue-500 px-2 font-bold cursor-pointer">Click to resend</span></p>
          </div>
          
          <div className="mb-4 mt-6 flex space-x-4">
            <FaArrowLeft />
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

export default ComfermationCode;
