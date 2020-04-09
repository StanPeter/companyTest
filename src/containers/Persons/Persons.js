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
        filter: null,
        isEdit: false,
        editedPersonIndex: null,
        editedPerson: null,
        isOrdered: "MFO" 
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
        if(this.state.isEdit && this.state.editedPersonIndex === personIndex) {
            this.setState({isEdit: false, editedPersonIndex: null, editedPerson: null});
        } else {
            const editedPerson = this.state.persons[personIndex];
            this.setState({isEdit: true, editedPersonIndex: personIndex, editedPerson: editedPerson});
        }
        }

    updatePerson = (e) => {
        const now = new Date();
        const updatedDate = now.toISOString();
        const persons = [...this.state.persons];

        const updatedPersonIndex = this.state.persons.findIndex((_, index) => {
            return this.state.editedPersonIndex === index;
        });

        persons[updatedPersonIndex].name = e.target.name.value;
        persons[updatedPersonIndex].age = e.target.age.value;
        persons[updatedPersonIndex].sex = e.target.sex.value;
        persons[updatedPersonIndex].updatedDate = updatedDate;

        this.setState({persons: persons, isEdit: false, editedPersonIndex: null, editedPerson: null});        

        e.preventDefault();
    }

    removePerson = (personIndex) => {
        const updatedPersons = [...this.state.persons];
        updatedPersons.splice(personIndex, 1);

        this.setState({persons: updatedPersons, isEdit: false, editedPersonIndex: null, editedPerson: null});
    }

    orderByAge = () => {
        if(!this.state.isOrdered) {
            const orderedPersons = [...this.state.persons];
            orderedPersons.sort((a,b) => (a.age > b.age)? 1 : -1);
            
            this.setState({persons: orderedPersons, isOrdered: true});
        } else {
            const orderedDescPersons = [...this.state.persons];
            orderedDescPersons.sort((a,b) => (a.age > b.age)? -1 : 1);

            this.setState({persons: orderedDescPersons, isOrdered: false});
        }
    }

    orderBySex = (e) => {
        if(e.target.value === "null"){
            this.setState({filter: null})
        } else {
            this.setState({filter: e.target.value});
        }
    }

    render () {   
        return (
            <Aux>
                <div className="Persons">
                    <table border="1" className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age <button onClick={this.orderByAge}>click</button></th>
                                <th>Sex 
                                    <select onChange={this.orderBySex}>
                                        <option value="null"> </option>
                                        <option value="M">M</option>
                                        <option value="F">F</option>
                                        <option value="O">O</option>
                                    </select></th>
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
                                editedPersonIndex={this.state.editedPersonIndex}
                                filter={this.state.filter} />
                            ))}
                        </tbody>
                    </table>
                </div>
                <AddPerson 
                    addPerson={this.addPerson} 
                    updatePerson={this.updatePerson}
                    editedPerson={this.state.editedPerson}
                    disabled={this.state.isEdit}/>
            </Aux>
        );
    }
}

export default Persons;