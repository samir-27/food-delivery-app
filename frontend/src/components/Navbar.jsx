import React, { useContext, useState } from "react";
import { IoFastFoodSharp, IoSearchCircle } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    const { getTotalCartAmount } = useContext(StoreContext);

    return (
        <nav className="bg-white w-full quicksand shadow-sm">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between h-16 items-center">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 "
                    >
                        <IoFastFoodSharp className="text-orange-600" size={40} />
                        <h1 className="text-3xl sm:text-4xl text-orange-600 font-bold">Foodly</h1>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
                        <li>
                            <Link to="/" className="hover:text-orange-600">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/menu" className="hover:text-orange-600">
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link to="/mobile-app" className="hover:text-orange-600">
                                Mobile
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-orange-600">
                                Contact Us
                            </Link>
                        </li>
                    </ul>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4 relative">
                        <IoSearchCircle
                            size={40}
                            className="text-orange-600 cursor-pointer"
                        />

                        <Link to="/cart" className="relative">
                            <SlBasket
                                size={28}
                                className="text-orange-600 cursor-pointer"
                            />

                            {/* Cart Dot */}
                            {getTotalCartAmount() > 0 && (
                                <span className="cart-dot"></span>
                            )}
                        </Link>

                        <button
                            onClick={() => setShowLogin(true)}
                            className="sm:text-lg text-sm border-2 border-orange-600 font-bold text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-2 rounded-full"
                        >
                            Sign In
                        </button>

                        {/* Hamburger */}
                        <div
                            className="md:hidden cursor-pointer"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
                        </div>
                    </div>

                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden">
                        <ul className="flex flex-col gap-4 p-4 text-gray-700 font-medium">
                            <li>
                                <Link to="/" onClick={closeMenu} className="hover:text-orange-600">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/menu" onClick={closeMenu} className="hover:text-orange-600">
                                    Menu
                                </Link>
                            </li>
                            <li>
                                <Link to="/mobile-app" onClick={closeMenu} className="hover:text-orange-600">
                                    Mobile
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" onClick={closeMenu} className="hover:text-orange-600">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
