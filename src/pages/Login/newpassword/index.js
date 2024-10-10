import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FaArrowLeft } from "react-icons/fa";
import { TbPasswordFingerprint } from "react-icons/tb";

const NewPassword = () => {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  let handleSubmit = (event) => {
    event.preventDefault();

    // Validation logic
    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
    } else if (password !== confirmPassword) {
      setError("Passwords don't match.");
    } else {
      // Clear the error and proceed with password reset
      setError('');
      router.push('/Login/passwordresetdone'); // Redirect to confirmation page
    }
  };

  return (
    <div className="flex flex-col sm:flex sm:flex-row bg-customgreen h-screen">
      {/* Left Side: Form Section */}
      <div className="h-auto mt-4 sm:mt-32 mx-auto w-full sm:w-[50%] sm:px-5 px-4">
        <div className="border shadow-lg w-full px-12 py-12 bg-white rounded-2xl mb-10">
          <div className="flex justify-center items-center ">
            <TbPasswordFingerprint className="text-4xl" />
          </div>

          <div className="w-full text-center">
            <h1 className="text-3xl font-black text-center mb-4 text-gray-800">
              Create a New Password 
            </h1>
            <p className="">
              Please use a password that hasn’t been used before. Must be at least 8 characters long.
            </p>
          </div>

          {/* Reset Password Form */}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-4">
              <input
                type="password"
                className="px-3 py-2 border rounded-lg border-gray-300 w-full mt-2 outline-none"
                placeholder="Enter New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col mb-4">
              <input
                type="password"
                className="px-3 py-2 border rounded-lg border-gray-300 w-full mt-2 outline-none"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {/* Error message */}
            {error && (
              <p className="text-red-500 text-sm mb-4">
                {error}
              </p>
            )}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-[#094998] text-white font-semibold px-5 py-2 mt-3 rounded-lg hover:bg-blue-600 w-full"
              >
                Reset Password
              </button>
            </div>
          </form>

          <div className="mb-4 mt-6 flex space-x-4">
            <FaArrowLeft />
            <p className="cursor-pointer" onClick={() => router.push('/Login/login')}>Back To Login</p>
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
            className="w-[500px] h-[440px] "
          />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
