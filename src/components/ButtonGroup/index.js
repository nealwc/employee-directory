import React from "react";
import "./style.css";

function ButtonGroup(props) {

  return (
    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={props.sortByFirstName}>
        First Name</button>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={props.sortByLastName}>
        Last Name</button>
      <div className="btn-group" role="group">
        <button id="btnGroupDrop1" type="button" className="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Supervisor
          </button>
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
          <button
            onClick={props.filterBySupervisor}
            value="Mirza Trejo"
            type="button"
            className="dropdown-item"
          >Mirza Trejo</button>
          <button
            onClick={props.filterBySupervisor}
            value="Klay Douglas"
            type="button"
            className="dropdown-item"
          >Klay Douglas</button>
        </div>
      </div>
    </div>
  )
}

export default ButtonGroup;