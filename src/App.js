import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import EmployeeCard from "./components/EmployeeCard";
import employees from "./employees.json";
import Wrapper from "./components/Wrapper";
import ButtonGroup from "./components/ButtonGroup";

class App extends Component {
    state = {
        employees
    };

    render() {
        return (
            <div>
                <Jumbotron />
                <div className="container">
                <ButtonGroup />
                <Wrapper>
                    {this.state.employees.map(employee => (
                        <EmployeeCard
                            id={employee.id}
                            firstName={employee.firstName}
                            lastName={employee.lastName}
                            image={employee.image}
                            occupation={employee.occupation}
                            supervisor={employee.supervisor}
                        />
                    ))}
                </Wrapper>
                </div>
            </div>
        )
    }
}

export default App;