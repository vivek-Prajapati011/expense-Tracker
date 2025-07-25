import React from 'react'

function ExpenseForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const getFormData = (form) => {
    const formData = new formData(form)
    const data = {}
    for(const[key, value] of formData.entries()){
      data[key] = value

    }
    return data

  }
  return (
   <>
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <form className="expense-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="title">Title</label>
            <input id="title" />
          </div>
          <div className="input-container">
            <label htmlFor="category">Category</label>
            <select id='category'>
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
