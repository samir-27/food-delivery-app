import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <form className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT: Delivery Form */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">
            Delivery Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="input" placeholder="First name" />
            <input className="input" placeholder="Last name" />
          </div>

          <input className="input mt-4" placeholder="Email address" />
          <input className="input mt-4" placeholder="Street address" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <input className="input" placeholder="City" />
            <input className="input" placeholder="State" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <input className="input" placeholder="Zip code" />
            <input className="input" placeholder="Country" />
          </div>

          <input className="input mt-4" placeholder="Phone number" />
        </div>

        {/* RIGHT: Order Summary */}
        <div className="bg-white p-6 rounded-2xl shadow-sm h-fit">
          <h2 className="text-xl font-semibold mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between mb-3">
            <span>Subtotal</span>
            <span className="font-semibold ">
              ₹ {getTotalCartAmount()}
            </span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Delivery Fee</span>
            <span className="font-semibold ">
              ₹ {getTotalCartAmount()===0?0:100}
            </span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-lg font-bold mb-6">
            <span>Total</span>
            <span className="">
              ₹ {getTotalCartAmount()===0?0: getTotalCartAmount() + 100}
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition"
          >
            Proceed to Payment
          </button>
        </div>

      </form>
    </div>
  );
};

export default PlaceOrder;
