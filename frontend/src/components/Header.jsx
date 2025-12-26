import React from 'react'
import food from "../assets/header.jpg"

const Header = () => {
    return (
        <div className="relative h-[500px] max-w-7xl lg:mx-auto sm:px-6 lg:px-8 px-12  mt-10 mx-2 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center mx-4 rounded-3xl overflow-hidden"
                style={{ backgroundImage: `url(${food})` }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/55 px-4 "></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4" style={{ fontFamily: "'Rubik', sans-serif" }}>
                <h1 className="text-4xl md:text-7xl mb-4 font-thin">
                    Order Your Favourite <span className='text-orange-400 font-normal '>Food</span> Here
                </h1>
                <br />
                <p className="max-w-2xl mb-6 text-lg md:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quaerat velit, explicabo voluptatibus ad repellat totam magni eaque deleniti, sequi fugit at, obcaecati omnis odit!
                </p>
                <br />
                <button className="bg-white text-gray-600 hover:bg-orange-400 hover:text-white transition px-6 py-3 rounded-full text-lg font-semibold shadow-lg animate-fadeInUp animation-delay-400">
                    View Menu
                </button>
            </div>

        </div>
    )
}

export default Header
