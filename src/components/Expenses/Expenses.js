import styles from "./Expenses.module.css";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const currentYear = new Date().getFullYear().toString();
  const [filteredYear, setFilteredYear] = useState(currentYear);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    const expenseDate = new Date(expense.date);

    if (isNaN(expenseDate)) {
      return false;
    }

    return expenseDate.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className={styles["expenses"]}>
        <ExpensesFilter
          selected={filteredYear}
          onSelectedYear={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} onDelete={props.onDeleteExpense} />
      </Card>
    </div>
  );
};


export default Expenses;
