import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import EmployeeCard from "./components/EmployeeCard";
import employeesData from "./employeesData.json";
import Wrapper from "./components/Wrapper";
import ButtonGroup from "./components/ButtonGroup";

class App extends Component {
    state = {
        employees : employeesData
    };

    // componentDidMount() {
    //     this.loadEmployees();
    //   }

    filterBySupervisor = e => {
        const supervisor = e.target.value

        const employees = employeesData.filter(employee => employee.supervisor === supervisor);
        this.setState({ employees })
    };

    sortByFirstName = e => {
        const employeesByFirstName = this.state.employees.sort((a, b) => (a["firstName"].charAt(0) > b["firstName"].charAt(0)) ? 1 : -1);
            this.setState({ employeesByFirstName })
    };

    sortByLastName = e => {
        const employeesByLastName = this.state.employees.sort((a, b) => (a["lastName"].charAt(0) > b["lastName"].charAt(0)) ? 1 : -1);
            this.setState({ employeesByLastName })
    };

    // loadNextDog = () => {
    //     API.getRandomDog()
    //       .then(res =>
    //         this.setState({
    //           image: res.data.message
    //         })
    //       )
    //       .catch(err => console.log(err));
    //   };

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