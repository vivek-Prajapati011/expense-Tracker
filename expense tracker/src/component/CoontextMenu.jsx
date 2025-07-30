import React from "react";

function CoontextMenu({
  menuPosition,
  setMenuPosition,
  setexpenses,
  rowId,
  expenses,
  setExpense,
}) {
  if (!menuPosition.left || !menuPosition.top) return null;
  return (
    <>
      <div className="context-menu" style={{ ...menuPosition }}>
        <div 
        onClick={() => {
          const {title, amount, category} = expenses.find(
            (expense) =>  expense.id === rowId
          )
          setExpense({title, amount, category})
          setMenuPosition({})
        }}
          >
            Edit
            </div>
        <div
          onClick={() => {
            setexpenses((prevState) =>
              prevState.filter((expense) => expense.id !== rowId)
            );
            setMenuPosition({});
          }}
        >
          Delete
        </div>
      </div>
    </>
  );
}

export default CoontextMenu;
