import React, { useState } from 'react';

const initialState = {
    cart: [],
    toggleMenu: false,
    toggleOrders: false,
    toggleMenuMobile: false,
};

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const menuToggle = () => {
        setState({
            ...state,
            toggleMenu: !state.toggleMenu
        });
    }

    const menuMobileToggle = () => {
        setState({
            ...state,
            toggleMenuMobile: !state.toggleMenuMobile
        });
    }

    const ordersToggle = () => {
        setState({
            ...state,
            toggleOrders: !state.toggleOrders
        });
    }

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    const removeFromCart = (indexValue) => {
        setState({
            ...state,
            cart: state.cart.filter((items, index) => index !== indexValue),
        });
    }

    return {
        state,
        addToCart,
        removeFromCart,
        menuToggle,
        ordersToggle,
        menuMobileToggle
    }
}
export default useInitialState;