import React from 'react'

function ExpenseForm() {
  return (
   <>
    <main>
      <h1>Track Your Expense</h1>
      <div class="expense-tracker">
        <form class="expense-form">
          <div class="input-container">
            <label for="title">Title</label>
            <input id="title" />
          </div>
          <div class="input-container">
            <label for="category">Category</label>
            <input id="category" />
          </div>
          <div class="input-container">
            <label for="amount">Amount</label>
            <input id="amount" />
          </div>
          <button class="add-btn">Add</button>
        </form>
       
      </div>
    </main>
   </>
  )
}

export default ExpenseForm
