import React from "react";
import { menu_list } from "../utils/Menu_List";

const ExploreMenu = ({ category, setCategory }) => {

  const handleItemClick = (item) => {
    setCategory(prev => prev === item.name ? "All" : item.name)
  }

  return (
    <section className="max-w-7xl mx-auto px-4 mt-16">
      {/* Heading */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 font-[Rubik]">
          Explore Our Menu
        </h1>
        <p className="text-gray-600 max-w-xl font-[Quicksand]">
          Discover delicious dishes crafted with love. Choose your favorite and order instantly.
        </p>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
        {menu_list.map((item, index) => (
          <div key={index} onClick={() => handleItemClick(item)} className={`w-44 h-44 rounded-2xl p-4 flex flex-col items-center cursor-pointer
    transform transition-transform duration-300 ease-out will-change-transform hover:scale-105 ${category === item.name ? "border-2 border-orange-600 bg-white": "bg-white shadow-md"}`}
          >

            <div className="w-28 h-28 rounded-2xl overflow-hidden mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-semibold text-gray-800 font-[Rubik]">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreMenu;
