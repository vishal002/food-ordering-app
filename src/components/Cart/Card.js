import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Card = (props) => {
  const carditems = <ul className={classes['card-items']} >{[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
    (item) => <li>{item.name}</li>
  )}</ul>
  return (
    <Modal onClose={props.onClose} >
      {carditems}
      <div>
          <span>Total Amount</span>
          <span>35.62</span>
      </div>
      <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
          <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Card;
