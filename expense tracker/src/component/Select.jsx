import React from "react";

const Select = ({
  id,
  label,
  name,
  title,
  value,
  onChange,
  options,
  defaultOption,
  error,
}) => {
  return (
    <>
      <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <select id={id} name={name} value={value} onChange={onChange}>
          {defaultOption && (
            <option value="" hidden>
              {defaultOption}
            </option>
          )}
          {options.map((option, i) => {
            <option key={i} value={option}>
              {option}
            </option>;
          })}
        </select>
        <p className="err">{error}</p>
      </div>
    </>
  );
};
export default Select;
