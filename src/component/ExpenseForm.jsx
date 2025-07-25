import React from 'react'

function ExpenseForm() {
  return (
   <>
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <form className="expense-form">
          <div className="input-container">
            <label htmlFor="title">Title</label>
            <input id="title" />
          </div>
          <div className="input-container">
            <label htmlFor="category">Category</label>
            <input id="category" />
          </div>
          <div className="input-container">
            <label htmlFor="amount">Amount</label>
            <input id="amount" />
          </div>
          <button className="add-btn">Add</button>
        </form>
       
      </div>
    </main>
   </>
  )
}

export default ExpenseForm
