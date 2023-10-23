import React, { createContext, useReducer, useContext } from "react";

export const CartContext = createContext([]);
export const CartDispatchContext = createContext(null);

export function useCart() {
    return useContext(CartContext);
}

export function useCartDispatch() {
    return useContext(CartDispatchContext);
}

const initialCart = [];

export function CartProvider({children}) {
    const [cart, dispatchCart] = useReducer(cartReducer, initialCart);

    return (
        <CartContext.Provider value = {cart}>
            <CartDispatchContext.Provider value = {dispatchCart}>
                {children}
            </CartDispatchContext.Provider>
        </CartContext.Provider>
    );
}

function cartReducer(cart, action) {
    switch (action.type) {
        case 'addToCart': {
            let added = false;
            let newCart = cart.map(item => {
                if (item.id === action.id) {
                    added = true;
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                } else {
                    return item;
                }
            });

            return added ? newCart : [...cart, { name: action.name, img: action.img,
                                price: action.price, id: action.id, quantity: 1}];
        }
        case 'removeFromCart': {
            return cart.filter(item => item.id !== action.id);
        }
        case 'incrementItemQuantity': {
            return cart.map(item => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        "quantity": item.quantity+1
                    }
                } else {
                    return item;
                }
            });
        }
        case 'decrementItemQuantity': {
            return cart.map(item => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                } else {
                    return item;
                }
            }).filter(item => item.quantity > 0);
        }
        case 'resetCart': {
            return [];
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}