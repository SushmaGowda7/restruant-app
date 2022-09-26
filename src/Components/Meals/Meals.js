import MealsSummary from "./MealsSummary";
import { Fragment } from "react";
import AvailableMealItems from "./AvailableMealItems";
const Meals = () => {
    return(
        <Fragment>
            <MealsSummary />
            <AvailableMealItems />
        </Fragment>
    )
};

export default Meals;