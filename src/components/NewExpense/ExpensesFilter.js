import React from "react";

import styles from "./ExpensesFilter.module.css";

const ExpensesFilter = (props) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2019 }, (_, index) => 2020 + index);


  const pickedYearHandler = (e) => {
    props.onSelectedYear(e.target.value);
  };

  return (
    <div className={styles["expenses-filter"]}>
      <div className={styles["expenses-filter__control"]}>
        <label>Filter by year</label>
        <select value={props.selected} onChange={pickedYearHandler}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
