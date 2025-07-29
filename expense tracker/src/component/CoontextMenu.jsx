import React from 'react'

function CoontextMenu({menuPosition}) {
  return (
    <>
       <div className="context-menu" style={menuPosition}>
            <div>Edit</div>
            <div>Delete</div>
        </div>
    </>
  )
}

export default CoontextMenu
