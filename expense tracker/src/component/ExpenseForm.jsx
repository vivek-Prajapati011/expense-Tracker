import React, { useState } from 'react'
import Input from './Input'
import Select from './Select'

function ExpenseForm({setexpenses,setExpense,expense,editingRowId,setEditingRowId }) {
 // const[title,setTitle] = useState("")
 // const[category,setCategory] = useState("")
 // const[amount,setAmount] = useState("")
 

  const[error, setError] = useState({}) 

  const validationConfig = {
    title:[
      {require: true, message: "please entre title"}, 
      {minLenght: 5, message:"title should be atleast five character "}
    ],
    category:[{require: true, message: "please entre category"}],
    amount: [
      {
        required: true,
        message: 'Please enter an amount',
      },
      {
        pattern: /^[1-9]\d*(\.\d+)?$/,
        message: 'Please enter a valid number',
      },
    ],
  }


  const validate = (formData) => {
    const errorData = {}
    Object.entries(formData).forEach(([key,value]) => {
      validationConfig[key].some((rule) => {
        if(rule.require && !value){
          errorData[key] = rule.message
          return true
        }
         if(rule.minLenght && value.length < 5){
          errorData[key] = rule.message
          return true
        }
         if (rule.pattern && !rule.pattern.test(value)) {
          errorData[key] = rule.message
          return true
        }
      }
       
    )

    })
    
    setError(errorData)
    return errorData

  }


  const handleSubmit = (e) => {
    e.preventDefault()
    const validateResult = validate(expense)
    if(Object.keys(validateResult).length) return

       if (editingRowId) {
      setexpenses((prevState) =>
        prevState.map((prevExpense) => {
          if (prevExpense.id === editingRowId) {
            return { ...expense, id: editingRowId }
          }
          return prevExpense
        })
      )
      setExpense({
        title: '',
        category: '',
        amount: '',
      })
      setEditingRowId('')
      return
    }
    
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
            defaultOption = "Select Category "
           options = {["Grocery","Clothes", "Bills","Education","Medicine"]}
          
          />
           
          <Input
           label="Amount"
           id="amount" 
           name='amount' 
           value={expense.amount} 
           onChange = {handleChange}
           error = {error.amount}
          
          
           />
           
          <button className="add-btn">{editingRowId?  "save" : "Add"}</button>
        </form>
       
      </div>
    </main>
   </>
  )
}

export default ExpenseForm
