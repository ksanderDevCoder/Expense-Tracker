import React from "react";
import styles from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <li key={props.id}>
      <Card className={styles["expense-item"]}>
        <ExpenseDate date={props.date} />
        <div className={styles["expense-item__description"]}>
          <h2>{props.title}</h2>
          <div className={styles["expense-item__price"]}>${props.price}</div>
        </div>
        <button className={styles["expense-item__delete"]} onClick={props.onDelete}>
          x
        </button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
