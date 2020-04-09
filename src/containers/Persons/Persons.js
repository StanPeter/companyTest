import React, { Component } from "react";
import "./Persons.css"
//components
import Person from "../../components/Person/Person";
import Aux from "../../hoc/Aux";
import AddPerson from "../../components/AddPerson/AddPerson";
//for redux
import { connect } from "react-redux";
import * as actionTypes from "../../store/action";


class Persons extends Component {

    render () {   
        return (
            <Aux>
                <div className="Persons">
                    <table border="1" className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age <button onClick={this.props.orderByAge}>click</button></th>
                                <th>Sex 
                                    <select onChange={this.props.orderBySex}>
                                        <option value="null"> </option>
                                        <option value="M">M</option>
                                        <option value="F">F</option>
                                        <option value="O">O</option>
                                    </select></th>
                                <th>Updated On</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.persons.map((person, index) => (
                            <Person 
                                person={person} 
                                key={index} 
                                id={index}
                                removePerson={this.props.removePerson}
                                editPerson={this.props.prepEditPerson}
                                editedPersonIndex={this.props.editedPersonIndex}
                                filter={this.props.filter} />
                            ))}
                        </tbody>
                    </table>
                </div>
                <AddPerson 
                    addPerson={this.props.addPerson} 
                    updatePerson={this.props.updatePerson}
                    editedPerson={this.props.editedPerson}
                    disabled={this.props.isEdit}/>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons,
        filter: state.filter,
        isEdit: state.isEdit,
        editedPersonIndex: state.editedPersonIndex,
        editedPerson: state.editedPerson,
        isOrdered: state.isOrdered
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addPerson: (e) => dispatch({type: actionTypes.ADD_PERSON, e: e}),
        prepEditPerson: (personIndex) => dispatch({type: actionTypes.PREP_EDIT_PERSON, personIndex: personIndex}),
        updatePerson: (e) => dispatch({type: actionTypes.UPDATE_PERSON, e: e}),
        removePerson: (personIndex) => dispatch({type: actionTypes.REMOVE_PERSON, personIndex: personIndex}),
        orderByAge: () => dispatch({type: actionTypes.ORDER_BY_AGE}),
        orderBySex: (e) => dispatch({type: actionTypes.ORDER_BY_SEX, e: e})
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Persons);