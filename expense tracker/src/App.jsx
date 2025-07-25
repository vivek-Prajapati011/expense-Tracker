import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseForm from './component/ExpenseForm'
import ExpenseTable from './component/ExpenseTable'
import expenseData from './component/expenseData'

function App() {
  const [expenses, setexpenses] = useState(expenseData)

  return (
    <>
     <ExpenseForm setexpenses = {setexpenses} />
     <ExpenseTable expenses={expenses} />
    </>
  )
}

export default App
