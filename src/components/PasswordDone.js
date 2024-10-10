import React from 'react';
import { useRouter } from 'next/router';
import { FaArrowLeft } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";

const PasswordDone = () => {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push('/Login/login');
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen bg-customgreen">
      {/* Left Side: Success Section */}
      <div className="mt-32 mx-auto w-full sm:w-[50%] px-4 sm:px-5">
        <div className="border shadow-lg w-full px-12 py-12 bg-white rounded-2xl mb-10 text-center">
          <div className="flex justify-center items-center border border-gray-300 rounded-full w-16 h-16 mx-auto mb-6">
            <FcCheckmark className="text-4xl" />
          </div>

          <h1 className="text-3xl font-black text-gray-800 mb-4">
            Password Reset!
          </h1>
          <p className="text-gray-600 mb-6">
            Your password has been set successfully. Click below to login.
          </p>

          {/* Continue Button */}
          <form onSubmit={handleSubmit}>
            <button
              type="submit"
              className="bg-[#094998] text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-600 w-full"
            >
              Continue
            </button>
          </form>

          {/* Back to Login */}
          <div className="mt-6 flex items-center justify-start space-x-2 cursor-pointer" onClick={handleSubmit}>
            <FaArrowLeft className="text-gray-500" />
            <p className="text-gray-600 font-semibold">Back to Login</p>
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

export default PasswordDone;
