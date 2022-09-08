import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/Cart-Provider";
function App() {
  const [cartIsShown, setCarIsShown] = useState(false);

  const showCartHandler = () => {
    setCarIsShown(true);
  };
  const HideCartHandler = () => {
    setCarIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={HideCartHandler} />}
      <Header onShow={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
