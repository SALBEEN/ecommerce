import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (id) => {
    if (id === undefined || id === null) {
      console.error("Error: id is undefined or null!"); // Log an error if id is invalid
      return;
    }
    setCartItems((prev) => prev.filter((item) => item.id !== id)); // Correctly filter items by id
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
