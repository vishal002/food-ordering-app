import { useContext } from "react";
import classes from "./HeaderCardButton.module.css";
import CardIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-contect";

const HeaderCardButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items
  .reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CardIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};


export default HeaderCardButton;
