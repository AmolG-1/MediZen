import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
   // const [cartCount,setcartCount] = useState(0);
    const [cartItems,setCartItems] = useState([]);
    
  useEffect(()=> {
     const storedCartItems  = localStorage.getItem("cartItems");
     if(storedCartItems){
        setCartItems(JSON.parse(storedCartItems));
     }
    },[])

    const addToCart = (product) => {
        const totalItems = [...cartItems, product];
        setCartItems(totalItems);
        localStorage.setItem("cartItems", JSON.stringify(totalItems));
    }


    return (
        <>
          <CartContext.Provider value={{addToCart,cartCount:cartItems.length,cartItems}}>
            {children}
          </CartContext.Provider>
        </>
    )
}

export default CartProvider;