import React, { useState } from 'react'
import { MdCancel } from "react-icons/md";

const LoginPopup = ({ setShowLogin }) => {
    const [currState,setCurrState]=useState("Login");
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <form action="" className="bg-white w-[90%] max-w-md rounded-2xl p-6 shadow-xl animate-fadeIn">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">{currState}</h2>
                <MdCancel 
                  onClick={()=>setShowLogin(false)} 
                  size={30} 
                  className="cursor-pointer text-gray-500 hover:text-red-500 transition"
                />
            </div>

            {/* Inputs */}
            <div className="flex flex-col gap-4">
                {currState==='Login'
                  ? <></>
                  : <input 
                      type="text" 
                      placeholder='Enter your name' 
                      className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                }
                
                <input 
                  type='text' 
                  placeholder='Enter your email' 
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input 
                  type="password" 
                  placeholder='Enter your password' 
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
            </div>

            {/* Button */}
            <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold mt-6 hover:bg-orange-600 transition">
              {currState==='Sign Up' ? "Create Account" : "Login"}
            </button>

            {/* Terms */}
            <div className="flex items-start gap-2 mt-4 text-sm text-gray-600">
                <input type="checkbox" className="mt-1 accent-orange-500" />
                <p>By clicking the button you agree to our terms and conditions</p>
            </div>

            {/* Switch Auth */}
            {currState==='Login'
              ? <p className="text-sm text-center mt-4">
                  Create a new account?{" "}
                  <span 
                    onClick={()=>setCurrState("Sign Up")} 
                    className="text-orange-500 cursor-pointer font-semibold hover:underline"
                  >
                    Click here
                  </span>
                </p>
              : <p className="text-sm text-center mt-4">
                  Already have an account?{" "}
                  <span 
                    onClick={()=>setCurrState("Login")} 
                    className="text-orange-500 cursor-pointer font-semibold hover:underline"
                  >
                    Click here
                  </span>
                </p>            
            }
        </form> 
    </div>
  )
}

export default LoginPopup