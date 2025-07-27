import React, { useState } from 'react'
import Input from './Input'
import Select from './Select'

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
  const {name, value} = e.target
  setExpense((prevState) => ({
    ...prevState, [name]: value
  }))
setError({})
}  
  return (
   <>
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <form className="expense-form" onSubmit={handleSubmit}>
          
          <Input
           label="Title"
           id="title" 
           name='title' 
           value={expense.title} 
           onChange = {handleChange}
           error = {error.title}
          
           />
         
         <Select
           label="Category"
           id="category" 
           name='category' 
           value={expense.category} 
           onChange = {handleChange}
           error = {error.category}
          
          />
           
          <Input
           label="Amount"
           id="amount" 
           name='amount' 
           value={expense.amount} 
           onChange = {handleChange}
           error = {error.amount}
           defaultOption = "Select Category "
           option = {[Grocery,Clothes, Bills,Education,Medicine]}
          
           />
           
          <button className="add-btn">Add</button>
        </form>
       
      </div>
    </main>
   </>
  )
}

export default ExpenseForm
