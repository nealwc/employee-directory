import React from "react";

function ButtonGroup() {
    return (
        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
        <button type="button" className="btn btn-outline-secondary">All</button>
        <button type="button" className="btn btn-outline-secondary">Last Name</button>
      
        <div className="btn-group" role="group">
          <button id="btnGroupDrop1" type="button" className="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Supervisor
          </button>
          <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
          <button type="button" className="dropdown-item">Jim Boatwright</button>
            <button type="button" className="dropdown-item">Michael Ferrari</button>
            <button type="button" className="dropdown-item">Ryan Berryman</button>
          </div>
        </div>
      </div>
    )
}

export default ButtonGroup;