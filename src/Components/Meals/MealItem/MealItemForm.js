import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const [amountisValid, setAmountisValid] = useState(true);
    const amountRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = +enteredAmount;    

    if(
        enteredAmount.trim().length === 0 || 
        enteredAmountNumber < 1 ||
        enteredAmountNumber > 10)
        {
            setAmountisValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }
    // const cartCtx = useContext(CartContext);
    // const updateCartItems = (event) => {
    //     event.preventDefault();
    //     const amount = document.getElementById('amount_'+ props.id).value;
    //     cartCtx.addItem({...props.item, amount: amount})
    // };

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref= {amountRef}
                label='Amount'
                input={{
                    id:'amount_'+ props.id,
                    type: 'number',
                    min: '1',
                    max: '9',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button className={classes.button}>+ Add</button>
            {!amountisValid && <p>Please enter a valid amount(1-10)</p>}
        </form>
    );
};

export default MealItemForm;