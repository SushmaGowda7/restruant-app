import MealsSummary from "./MealsSummary";
import { Fragment } from "react";
import MealItemsAvailable from "./MealItemsAvailable";
const Meals = () => {
    return(
        <Fragment>
            <MealsSummary />
            <MealItemsAvailable />
        </Fragment>
    )
};

export default Meals;