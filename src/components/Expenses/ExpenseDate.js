import styles from "./ExpenseDate.module.css";

const ExpenseDate = (props) => {
  const dateObject = new Date(props.date);

  if (isNaN(dateObject)) {
    return <div>Error: Invalid Date</div>;
  }

  const month = dateObject.toLocaleString("en-US", { month: "long" });
  const day = dateObject.toLocaleString("en-US", { day: "2-digit" });
  const year = dateObject.getFullYear();

  return (
    <div className={styles["expense-date"]}>
      <div className={styles["expense-date__month"]}>{month}</div>
      <div className={styles["expense-year"]}>{year}</div>
      <div className={styles["expense-date__day"]}>{day}</div>
    </div>
  );
};

export default ExpenseDate;
