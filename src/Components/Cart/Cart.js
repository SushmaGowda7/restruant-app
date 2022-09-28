import { useContext } from 'react';
import CartContext from '../../store/CartContext';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const carItems = <ul className={classes['cart-items']}>
    {cartCtx.items.map((item) => (
        <li>Name: {item.name} amount:{item.amount} price:{item.price}</li>))}
    </ul>

    return (
        <Modal onCloseCart={props.onCloseCart}>
        {carItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
            <button className={classes.button} onClick={carItems}>Order</button>
        </div>
        </Modal>
    );
};

export default Cart;