import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer s:w-full w-60">

            <div className="h-52 w-full overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                />

            </div>
            <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-gray-800 line-clamp-1">
                        {name}
                    </p>
                    <div className="flex items-center gap-1 text-orange-500 text-sm">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar className="text-gray-300" />
                    </div>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2">
                    {description}
                </p>
                <div className="flex items-center justify-between pt-2 ">
                    <p className="text-lg font-bold text-orange-600">
                        ₹{price}
                    </p>
                    {!cartItems[id]
                    ?
                    <div className="bg-gray-100 p-1 rounded-full">
                    <button onClick={()=>addToCart(id)} className="bg-green-600 text-white text-sm px-3 py-1 rounded-full hover:bg-green-700 transition ">
                        Add
                    </button>
                    </div>
                    :
                    <div className="flex gap-5 bg-gray-100 p-1 rounded-full">

                    <button onClick={()=>removeFromCart(id)} className="bg-orange-600 text-white text-sm px-3 py-1 rounded-full hover:bg-orange-700 transition">
                        Remove
                    </button>
                    <p>{cartItems[id]}</p>
                     <button onClick={()=>addToCart(id)} className="bg-green-600 text-white text-sm px-3 py-1 rounded-full hover:bg-green-700 transition">
                        Add
                    </button>
                    </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default FoodItem;
