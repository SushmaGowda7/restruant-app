import { useContext } from 'react';
import CartContext from '../../store/CartContext';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
   
    const carItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    }

    const carItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    }

    const carItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem 
                    key={item.id} 
                    name={item.name} 
                    amount={item.amount} 
                    price={item.price} 
                    onAdd={carItemAddHandler.bind(null, item)} 
                    onRemove={carItemRemoveHandler.bind(null, item.id)}
                />
            ))}
        </ul>
    );

    return (
        <Modal onCloseCart={props.onCloseCart}>
        {carItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
            {hasItems &&<button className={classes.button} onClick={carItems}>Order</button>}
        </div>
        </Modal>
    );
};

export default Cart;