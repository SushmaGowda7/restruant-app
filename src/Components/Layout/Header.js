import React, { Fragment } from "react"
import classes from './Header.module.css';
import mealsImage from '../../Assets/meals.jpg';
import HeaderCart from "./HeaderCart";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCart />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='Food-img'></img>
            </div>
        </Fragment>
    );
};

export default Header;