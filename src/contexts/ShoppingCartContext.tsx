import React, { createContext, useContext, useState } from 'react';

/* This is a context created for inter-component communications of modifying the shopping cart */

const ShoppingCartContext = createContext();

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [clientId, setClientId] = useState();

    const initializeCart = ({ id }) => {
        setClientId(id);

        // creates a POST request to the server to create a cart for the client
        fetch('https://dummyjson.com/carts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: id,
                products: [
                    {}
                ]
            })
        })
        .then(res => res.json())
        .then(console.log);
    }

    const addToCart = ({ product }) => {
        fetch('https://dummyjson.com/carts/' + clientId, {
            method: 'PUT', /* or PATCH */
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                merge: true, // this will include existing products in the cart
                products: [
                    {
                    id: product.id,
                    quantity: 1,
                    },
                ]
            })
        })
        .then(res => res.json())
        .then(console.log);

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
        fetch('https://dummyjson.com/carts/' + clientId, {
            method: 'PUT', /* or PATCH */
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            merge: true, // this will include existing products in the cart
            products: [
                {
                id: product.id,
                quantity: -1,
                },
            ]
            })
        })
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
        // export the Cart functions to the webpage
        <ShoppingCartContext.Provider value={{ initializeCart, cartItems, addToCart, removeFromCart }}>
        {children}
        </ShoppingCartContext.Provider>
    );
}
