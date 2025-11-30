import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) =>{
    let initialCart = [];

    try {
        const saved = localStorage.getItem("cart");
        initialCart = saved ? JSON.parse(saved) : [];
    }
    catch (error) {
        console.error("Invalid JSON in localStorage:", error);
        initialCart = [];
    }
    
    const [cart, setCart] = useState(initialCart);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    
    const addToCart = (product, qty=1) =>{
        setCart(prev =>{
            const exists = prev.find(p=> p.id === product.id)
            return exists
            ? prev.map(p => p.id === product.id ? {...p, qty: p.qty + qty} : p )
            : [...prev, {...product, qty}]
        });
    }; 

    const removeFromCart = (id)=> {
        setCart(prev => prev.filter(p => p.id !== id));
    };

    const updateQuantity = (id, qty) =>{
        setCart(
            prev => prev.map(p => p.id === id ? {...p, qty:qty} : p)
        );
    };

    const cartTotal = cart.reduce(
        (sum, p) => sum + p.price * p.qty,
        0
    );

    const totalItems = cart.reduce((count, p) => count + p.qty, 0);

    const clearCart = () =>{
        setCart([]);
    };

    return(
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, cartTotal, totalItems }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);