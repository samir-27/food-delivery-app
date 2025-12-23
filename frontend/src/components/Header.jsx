import React from 'react'
import food from "../assets/header.jpg"

const Header = () => {
  return (
    <div className="relative h-[500px] max-w-7xl lg:mx-auto sm:px-6 lg:px-8 px-12 rounded-3xl mt-5 mx-2 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${food})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"  style={{ fontFamily: "'Rubik', sans-serif" }}>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Order Your Favourite Food Here
        </h1>
        <p className="max-w-xl mb-6 text-lg md:text-xl drop-shadow-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quaerat velit, explicabo voluptatibus ad repellat totam magni eaque deleniti, sequi fugit at, obcaecati omnis odit!
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
          View Menu
        </button>
      </div>
    </div>
  )
}

export default Header
