import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseForm from './component/ExpenseForm'
import ExpenseTable from './component/ExpenseTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ExpenseForm />
     <ExpenseTable />
    </>
  )
}

export default App
