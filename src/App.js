import { Fragment, useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  const [showCart, setShowCart] = useState(false);

  const ShowCartHandler = () => {
    setShowCart(true);
  }
  const HideCartHandler = () => {
    setShowCart(false);
  }

  return (
    <Fragment>
      {showCart && <Cart onCloseCart={HideCartHandler}/>}
      <Header onShowCart={ShowCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
