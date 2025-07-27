import React from 'react'

function Input({id, label, name, title, value, onChange, error }) {
  return (
    <>
    <div className="input-container">
            <label htmlFor={id}>{label}</label>
            <input id={id} name={name} 
            value={value} 
            onChange = {onChange} />
           <p className='err'>{error}</p> 
          </div>
    </>
  )
}

export default Input
