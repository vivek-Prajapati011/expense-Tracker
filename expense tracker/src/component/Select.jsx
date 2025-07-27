import React from "react";

const Select = ({id, label, name, title, value, onChange, error }) => {
    return(
        <>
         <div className="input-container">
            <label htmlFor={id}>{label}</label>
            <select id={id}
             name={name}
             value={value}
             onChange = {onChange}
             >
                  <option value="" hidden>All</option>
                  <option value="grocery">Grocery</option>
                  <option value="clothes">Clothes</option>
                  <option value="bills">Bills</option>
                  <option value="education">Education</option>
                  <option value="medicine">Medicine</option>
             </select>
             <p className='err'>{error}</p>
          </div>
        </>
    )

}
export default Select