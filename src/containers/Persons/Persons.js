import React, { Component } from "react";
import { connect } from "react-redux";
import "./Persons.css"
import Person from "../../components/Person/Person";
import Data from "./data.json"
import Aux from "../../hoc/Aux";
import AddPerson from "../../components/AddPerson/AddPerson";

// import CounterControl from "../../components/CounterControl/CounterControl";
// import CounterOutput from "../../components/CounterOutput/CounterOutput";
// import * as actionTypes from "../../store/action";

class Persons extends Component {
    state = {
        persons: [...Data],
        isEdit: false,
        editedPerson: null
    };

    addPerson = (e) => {
        const now = new Date();
        const updatedDate = now.toISOString();

        const newPerson = {
            name: e.target.name.value,
            age: e.target.age.value,
            sex: e.target.sex.value,
            updatedDate: updatedDate
        };
        const updatedPersons = [...this.state.persons, newPerson];
        this.setState({persons: updatedPersons});

        e.preventDefault();
    };

    prepEditPerson = (personIndex) => {
        if(this.state.isEdit) {
            this.setState({isEdit: false, editPerson: null});
        } else {
            this.setState({isEdit: true, editedPerson: personIndex});
        }
        }

    updatePerson = (e) => {
        const now = new Date();
        const updatedDate = now.toISOString();
        const persons = [...this.state.persons];

        const updatedPersonIndex = this.state.persons.findIndex((_, index) => {
            return this.state.editedPerson === index;
        });

        persons[updatedPersonIndex].name = e.target.name.value;
        persons[updatedPersonIndex].age = e.target.age.value;
        persons[updatedPersonIndex].sex = e.target.sex.value;
        persons[updatedPersonIndex].updatedDate = updatedDate;

        this.setState({persons: persons, isEdit: false, editPerson: null});        

        e.preventDefault();
    }

    removePerson = (personIndex) => {
        const updatedPersons = [...this.state.persons];
        updatedPersons.splice(personIndex, 1);

        this.setState({persons: updatedPersons, isEdit: false, editPerson: null});
        console.log(personIndex);
        console.log("removed");
    }


    render () {        
        return (
            <Aux>
                <div className="Persons">
                    <table border="1" className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Sex</th>
                                <th>Updated On</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.persons.map((person, index) => (
                            <Person 
                                person={person} 
                                key={index} 
                                id={index}
                                removePerson={this.removePerson}
                                editPerson={this.prepEditPerson}
                                editedPerson={this.state.editedPerson} />
                            ))}
                        </tbody>
                    </table>
                </div>
                <AddPerson 
                    addPerson={this.addPerson} 
                    updatePerson={this.updatePerson}
                    disabled={this.state.isEdit}/>
            </Aux>
        );
    }
}

export default Persons;