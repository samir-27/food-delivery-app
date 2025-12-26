import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const cartFood = food_list.filter(
    (item) => cartItems[item.id] > 0
  );

  const navigate = useNavigate();


  return (
    <div className="max-w-6xl mx-auto px-6 mt-10">
      <h1 className="text-3xl font-bold mb-6 ">Your Cart</h1>

      {cartFood.length === 0 ? (
        <p className="text-white-500 text-center">
          Your cart is empty 🛒
        </p>
      ) : (
        <>
          {/* Header */}
          <div className="hidden md:grid grid-cols-6 text-white-600 font-semibold border-b pb-3">
            <p>Item</p>
            <p>Title</p>
            <p>Price</p>
            <p>Qty</p>
            <p>Total</p>
            <p className="text-center">Remove</p>
          </div>
          <div className="space-y-4 mt-4">
            {cartFood.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-2 md:grid-cols-6 items-center gap-4 bg-white shadow-sm rounded-xl p-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <p className="font-medium">{item.name}</p>
                <p className="text-white-600">
                  ₹ {item.price}
                </p>
                <p className="text-white-600">
                  {cartItems[item.id]}
                </p>
                <p className="font-semibold text-orange-600">
                  ₹ {item.price * cartItems[item.id]}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="flex justify-center text-red-500 hover:text-red-700 text-xl"
                >
                  <MdDelete />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col lg:flex-row gap-6 lg:justify-between">

            {/* Billing Summary */}
            <div className="w-full lg:w-1/3 bg-white p-6 rounded-xl shadow-sm">

              <div className="flex justify-between text-base sm:text-lg font-semibold mb-4">
                <span>Sub Total</span>
                <span className="text-orange-600">₹ {getTotalCartAmount()}</span>
              </div>

              <hr className="my-3" />

              <div className="flex justify-between text-base sm:text-lg font-semibold mb-4">
                <span>Delivery Fee</span>
                <span className="text-orange-600">₹ {150}</span>
              </div>

              <hr className="my-3" />

              <div className="flex justify-between text-lg sm:text-xl font-bold mb-6">
                <span>Total Amount</span>
                <span className="text-orange-600">₹ {getTotalCartAmount() + 2}</span>
              </div>

              <button onClick={()=> navigate('/order')} className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition">
                Proceed to Checkout
              </button>
            </div>

            {/* Promo Code */}
            <div className="w-full lg:w-1/3 bg-white p-6 rounded-xl shadow-sm">
              <p className="text-sm sm:text-base mb-3">
                If you have a Promo Code, enter it here
              </p>

              <input
                type="text"
                placeholder="Enter Promo Code"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <button className="w-full bg-orange-600 text-white py-2 rounded-full hover:bg-orange-700 transition mt-3">
                Apply Promo Code
              </button>
            </div>

          </div>

        </>
      )}
    </div>
  );
};

export default Cart;
