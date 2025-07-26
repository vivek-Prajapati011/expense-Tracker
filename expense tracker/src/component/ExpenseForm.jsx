import React, { useState } from 'react'

function ExpenseForm({setexpenses}) {
  const[title,setTitle] = useState("")
  const[category,setCategory] = useState("")
  const[amount,setAmount] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const exp = {title, category, amount, id: crypto.randomUUID()}
    setexpenses((prevState) => [...prevState, exp])
    setTitle("")
    setCategory("")
    setAmount("")
    
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
            value={title} 
            onChange = {(e) => setTitle(e.target.value)} />
          </div>
          <div className="input-container">
            <label htmlFor="category">Category</label>
            <select id='category' 
             name='category'
             value={category}
             onChange={(e) => setCategory(e.target.value)}
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
            value={amount} 
            onChange={(e) => setAmount(e.target.value)}/>
          </div>
          <button className="add-btn">Add</button>
        </form>
       
      </div>
    </main>
   </>
  )
}

export default ExpenseForm
