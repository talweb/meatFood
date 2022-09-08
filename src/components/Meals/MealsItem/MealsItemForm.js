import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealsItemForm.module.css";

const MealsItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountRef.current.value;
    const enteredAmountNumner = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumner < 1 ||
      enteredAmountNumner > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddtoCart(enteredAmountNumner);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealsItemForm;
