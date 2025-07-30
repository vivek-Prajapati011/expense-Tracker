import React from "react";

function CoontextMenu({
  menuPosition,
  setMenuPosition,
  setexpenses,
  rowId,
  expenses,
  setExpense,
  setEditingRowId
}) {
  if (!menuPosition.left || !menuPosition.top) return null;
  return (
    <>
      <div className="context-menu" style={{ ...menuPosition }}>
         <div
        onClick={() => {
          const { title, category, amount } = expenses.find(
            (expense) => expense.id === rowId
          )
          setEditingRowId(rowId)
          setExpense({ title, category, amount })
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
