import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCart.module.css';

const HeaderCart = (props) => {
    const cartctx = useContext(CartContext);

    const numberOfCartItems = cartctx.items.reduce((currentNum, item) => {
        return currentNum + item.amount;
    }, 0);
    
    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
};

export default HeaderCart;