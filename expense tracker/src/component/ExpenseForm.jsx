import React, { useState } from 'react'

function ExpenseForm({setexpenses}) {
 // const[title,setTitle] = useState("")
 // const[category,setCategory] = useState("")
 // const[amount,setAmount] = useState("")
  const[expense, setExpense] = useState({
    title : "",
    category : "",
    amount :""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    setexpenses((prevState) => [...prevState, {...expense, id: crypto.randomUUID() }])
    
    setExpense({
    title : "",
    category : "",
    amount :""
  })
    
    
  }

  
  return (
   <>
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <form className="expense-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="title">Title</label>
            <input id="title" name='title' 
            value={expense.title} 
            onChange = {(e) => setExpense((prevState) => ({...prevState, title: e.target.value}))} />
          </div>
          <div className="input-container">
            <label htmlFor="category">Category</label>
            <select id='category' 
             name='category'
             value={expense.category}
             onChange = {(e) => setExpense((prevState) => ({...prevState, category: e.target.value}))}
             >
                  <option value="" hidden>All</option>
                  <option value="grocery">Grocery</option>
                  <option value="clothes">Clothes</option>
                  <option value="bills">Bills</option>
                  <option value="education">Education</option>
                  <option value="medicine">Medicine</option>
             </select>
          </div>
          <div className="input-container">
            <label htmlFor="amount">Amount</label>
            <input id="amount"  
            name='amount' 
            value={expense.amount} 
           onChange = {(e) => setExpense((prevState) => ({...prevState, amount: e.target.value}))}/>
          </div>
          <button className="add-btn">Add</button>
        </form>
       
      </div>
    </main>
   </>
  )
}

export default ExpenseForm
