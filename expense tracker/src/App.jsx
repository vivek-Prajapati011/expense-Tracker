import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ExpenseForm from "./component/ExpenseForm";
import ExpenseTable from "./component/ExpenseTable";
import expenseData from "./component/expenseData";

function App() {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [expenses, setexpenses] = useState(expenseData);
  const[editingRowId, setEditingRowId] = useState("")

  return (
    <>
      <ExpenseForm
        setexpenses={setexpenses}
        expense={expense}
        setExpense={setExpense}
        editingRowId={editingRowId}
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
