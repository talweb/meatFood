import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import MealsImg from "../../asses/pexels-photo-2983101.jpeg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>MeatFood</h1>
        <HeaderCartButton click={props.onShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImg} alt="Some meate" />
      </div>
    </React.Fragment>
  );
};

export default Header;
