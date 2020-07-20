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

    filterBySupervisor = event => {
        event.preventDefault();
        console.log("clicked supervisor");
        const supervisor = event.target.value

        const employeesBySupervisor = this.state.employees.filter(employee => employee.supervisor === supervisor);
        this.setState({ employeesBySupervisor })
    };

    sortByFirstName = e => {
        const employeesByFirstName = employees.sort((a, b) => (a["firstName"].charAt(0) > b["firstName"].charAt(0)) ? 1 : -1);
            this.setState({ employeesByFirstName })
    };

    sortByLastName = e => {
        const employeesByLastName = employees.sort((a, b) => (a["lastName"].charAt(0) > b["lastName"].charAt(0)) ? 1 : -1);
            this.setState({ employeesByLastName })
    };

    render() {
        return (
            <>
                <Jumbotron />
                <div className="container">
                <ButtonGroup 
                    sortByFirstName = {this.sortByFirstName}
                    sortByLastName = {this.sortByLastName}
                    filterBySupervisor = {this.filterBySupervisor}/>
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