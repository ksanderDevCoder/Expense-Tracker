import { useEffect, useState } from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
  const [expenses, setExpenses] = useState(storedExpenses)

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }

  const deleteExpenseHandler = (expenseId) => {
    setExpenses(prevExpenses => {
      return prevExpenses.filter(expense => expense.id !== expenseId);
    });
  }


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} onDeleteExpense={deleteExpenseHandler} />
    </div>
  );
}

export default App;
