import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ExpenseForm from "./component/ExpenseForm";
import ExpenseTable from "./component/ExpenseTable";
import expenseData from "./component/expenseData";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [expense, setExpense] = useLocalStorage("expense",{
    title: "",
    category: "",
    amount: "",
  });
  const [expenses, setexpenses] = useLocalStorage("expenses",expenseData);
  const[editingRowId, setEditingRowId] = useLocalStorage("editingRowId", "")

  return (
    <>
      <ExpenseForm
        setexpenses={setexpenses}
        expense={expense}
        setExpense={setExpense}
        editingRowId={editingRowId}
        setEditingRowId={setEditingRowId}
      />
      <ExpenseTable
        expenses={expenses}
        setexpenses={setexpenses}
        expense={expense}
        setExpense={setExpense}
        setEditingRowId={setEditingRowId}
      />
    </>
  );
}

export default App;
