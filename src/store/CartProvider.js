import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
    items:[],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const addedeItems = state.items.concat(action.item);
        const addedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: addedeItems,
            totalAmount: addedTotalAmount
        }
    }
    return defaultCartState;
}

const CartProvider = (props) => {
    //const [addItem, setAddItem] = useState([]);
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        // setAddItem([...addItem, item])
        dispatchCartAction({type: 'ADD', item: item})
    };
    
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id})
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;