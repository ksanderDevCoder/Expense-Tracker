import React, { useState } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredPrice, setEnteredPrice] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const today = new Date().toISOString().split('T')[0];

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    };
    const priceChangeHandler = (e) => {
        setEnteredPrice(e.target.value);
    };
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            price: +enteredPrice,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredPrice("");
        setEnteredDate("");
    };


    return <div><form onSubmit={submitHandler}>
        <div className={styles["new-expense__controls"]}>
            <div className={styles["new-expense__control"]}>
                <label>Title</label>
                <input
                    type="text"
                    value={enteredTitle}
                    onChange={titleChangeHandler}
                />
            </div>
            <div className={styles["new-expense__control"]}>
                <label>Date</label>
                <input
                    type="date"
                    value={enteredDate}
                    min="2021-01-01"
                    max={today}
                    onChange={
                        dateChangeHandler
                    }
                />
            </div>
            <div className={styles["new-expense__control"]}>
                <label>Price</label>
                <input
                    type="number"
                    value={enteredPrice}
                    min="0.01"
                    step="0.01"
                    onChange={priceChangeHandler}
                />
            </div>
        </div>
        <div className={styles["new-expense__actions"]}>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form></div>
};

export default ExpenseForm;
