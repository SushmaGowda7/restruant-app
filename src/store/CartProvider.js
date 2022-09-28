import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
    items:[],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const addedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingItem = state.items[existingItemIndex];
       
        let addedItems;
        if(existingItem){
            let addedItem = {
                ...existingItem, 
                amount: existingItem.amount + action.item.amount
            }
            addedItems = [...state.items];
            addedItems[existingItemIndex] = addedItem;
        }else{
            addedItems = state.items.concat(action.item);
        }
       
        return {
            items: addedItems,
            totalAmount: addedTotalAmount
        }
    }
    if(action.type === 'REMOVE'){
        const existingItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingItem = state.items[existingItemIndex];
        const addedTotalAmount = state.totalAmount - existingItem.price;
        let addedItems;
        if(existingItem.amount === 1){
            addedItems = state.items.filter(item => item.id !== action.id)
        }else{
            const addedItem = {...existingItem, amount: existingItem.amount - 1};
            addedItems = [...state.items];
            addedItems[existingItemIndex] = addedItem;
        }
        return{
            items: addedItems,
            totalAmount: addedTotalAmount
        };
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