import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext)
    return (
        <div className='max-w-7xl mx-auto px-4 mt-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 font-[Rubik]'>Top Dishes Near You</h2>
            <div className="grid s:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-content-center">
                {food_list.slice(0,8).map((item, index) => (
                    <FoodItem
                        key={item.id || index}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                    />
                ))}
            </div>

        </div>
    )
}

export default FoodDisplay