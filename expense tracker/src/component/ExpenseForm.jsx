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

  const[error, setError] = useState({}) 

  const validate = (formData) => {
    const errorData = {}
    if(!formData.title) {
     errorData.title =" Title is required"
    }

    if(!formData.category) {
     errorData.category =" category is required"
    }

    if(!formData.amount) {
     errorData.amount =" amount is required"
    }
    setError(errorData)
    return errorData

  }


  const handleSubmit = (e) => {
    e.preventDefault()
    const validateResult = validate(expense)
    if(Object.keys(validateResult).length) return
    
    setexpenses((prevState) => [...prevState, {...expense, id: crypto.randomUUID() }])
    
    setExpense({
    title : "",
    category : "",
    amount :""
  })
    
    
  }

const handleChange = (e) => {
  const {name, value} = e.target.value
  setExpense((prevState) => ({
    ...prevState, [name]: value
  }))

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
            onChange = {handleChange} />
            
          </div>
          <p className='err'>{error.title}</p>
          <div className="input-container">
            <label htmlFor="category">Category</label>
            <select id='category' 
             name='category'
             value={expense.category}
             onChange = {handleChange}
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
           onChange = {handleChange}/>
          </div>
          <button className="add-btn">Add</button>
        </form>
       
      </div>
    </main>
   </>
  )
}

export default ExpenseForm
