import React, { useState } from 'react';
import { IoFastFoodSharp, IoSearchCircle } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white w-full quicksand">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-12">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2 text-orange-600">
                        <IoFastFoodSharp size={40} />
                        <h1 className="text-3xl sm:text-4xl font-bold">Foodly</h1>
                    </div>
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
                        <li className="hover:text-orange-600 cursor-pointer">home</li>
                        <li className="hover:text-orange-600 cursor-pointer">menu</li>
                        <li className="hover:text-orange-600 cursor-pointer">mobile</li>
                        <li className="hover:text-orange-600 cursor-pointer">contact us</li>
                    </ul>
                    <div className="flex items-center gap-4">
                        <IoSearchCircle size="40" className="text-orange-600 cursor-pointer" />
                        <SlBasket size={28} className="text-orange-600 cursor-pointer" />
                        <button className="border-orange-600 border-2 font-bold text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-2 rounded-full">
                            sign in
                        </button>
                        {/* Hamburger for mobile */}
                        <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden">
                        <ul className="flex flex-col gap-4 p-4 text-gray-700 font-medium">
                            <li className="hover:text-orange-600 cursor-pointer">home</li>
                            <li className="hover:text-orange-600 cursor-pointer">menu</li>
                            <li className="hover:text-orange-600 cursor-pointer">mobile</li>
                            <li className="hover:text-orange-600 cursor-pointer">contact us</li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
