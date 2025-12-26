import { createContext, useEffect, useState } from "react";
import { food_list } from "../utils/Food_List";
export const StoreContext = createContext(null)

const StoreContextProvider =(props) => {

    const [cartItems,setCartItems] = useState({}) 

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

  const getTotalCartAmount = () => {
    let total = 0;

    for (const itemId in cartItems) {
      const itemInfo = food_list.find(
        (food) => food.id === Number(itemId)
      );

      if (itemInfo) {
        total += itemInfo.price * cartItems[itemId];
      }
    }

    return total;
  };

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider