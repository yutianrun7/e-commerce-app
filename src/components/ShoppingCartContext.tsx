import React, { createContext, useContext, useState } from 'react';

const ShoppingCartContext = createContext();

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = ({ product }) => {
        setCartItems((prevItems) => {
        // Check if the product is already in the cart
        const existingProductIndex = prevItems.findIndex(item => item.id === product.id);
        
        // If the product is already in the cart, increase the quantity
        if (existingProductIndex >= 0) {
            return prevItems.map((item, index) => {
            if (index === existingProductIndex) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
            });
        }
        
        // If the product is not in the cart, add it with a quantity of 1
        return [...prevItems, { ...product, quantity: 1 }];
        });
    };
  

    const removeFromCart = ({product}) => {
        setCartItems((prevItems) => {
            // Check if the product is already in the cart
            const existingProductIndex = prevItems.findIndex(item => item.id === product.id);
            
            // If the product is already in the cart
            if (existingProductIndex >= 0) {
                const updatedItems = prevItems.map((item, index) => {
                    // Decrease the quantity if more than one, or remove if it's the last one
                    if (index === existingProductIndex) {
                        if(item.quantity > 0)
                            return { ...item, quantity: item.quantity - 1 };
                        // For items with quantity 1, we filter them out below, so do nothing here
                    }
                    return item;
                }).filter(item => item.quantity > 0); // Remove the item if quantity is 0
    
                return updatedItems;
            } else {
                console.log("Deleting item with id " + product.id + " not found");
                return prevItems;
            }
        });
    };
    

    return (
        <ShoppingCartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
        {children}
        </ShoppingCartContext.Provider>
    );
}
