import React from "react";
import classes from "./Header.module.css";
import mealsImage from '../../assets/meals.jpg';
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
          <h1>React Meals</h1>
          <HeaderCardButton onClick={props.onShowCart} ></HeaderCardButton>
      </header>
      <div className={classes['main-image']}>
          <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
