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

    filterSupervisor = supervisor => {
        const employees = this.state.employees.filter(employee => employee.supervisor === supervisor);
        this.setState({ employees })
    };

    sortByName = event => {
        const option = event.target.value;
        const sortByName = employees.sort((a, b) => (a[option].charAt(0) > b[option].charAt(0)) ? 1 : -1);
            this.setState({ employees })
    }

    render() {
        return (
            <>
                <Jumbotron />
                <div className="container">
                <ButtonGroup 
                    sortByName = {this.sortByName}
                    filterSupervisor = {this.filterSupervisor}/>
                <Wrapper>
                    {this.state.employees.map(employee => (
                        <EmployeeCard
                            id={employee.id}
                            firstName={employee.firstName}
                            lastName={employee.lastName}
                            image={employee.image}
                            title={employee.title}
                            supervisor={employee.supervisor}
                        />
                    ))}
                </Wrapper>
                </div>
            </>
        )
    }
}

export default App;