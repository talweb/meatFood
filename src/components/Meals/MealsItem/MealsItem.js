import React, { useContext } from "react";
import MealsItemForm from "./MealsItemForm";
import CartContext from "../../../store/cart-context";
import classes from "./MealsItem.module.css";
const MealsItem = (props) => {
  const ctxCart = useContext(CartContext);
  const price = `$${props.price}`;
  const addToCartHandler = (amount) => {
    ctxCart.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealsItemForm onAddtoCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealsItem;
