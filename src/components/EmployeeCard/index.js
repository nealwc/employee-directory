import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.lastName} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>First Name:</strong> {props.firstName}
          </li>
          <li>
            <strong>Last Name:</strong> {props.lastName}
          </li>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Supervisor:</strong> {props.supervisor}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;