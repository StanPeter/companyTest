import React, { Component } from "react";
import "./Person.css";


const Person = (props) => {

    return (
        <tr style={{display: props.filter === props.person.sex || props.filter === null? "table-row" : "none"}}>
            <td>{props.person.name}</td>
            <td>{props.person.age}</td>
            <td>{props.person.sex}</td>
            <td>{props.person.updatedDate}</td>
            <button onClick={() => props.editPerson(props.id)} className="mr-3" >E</button>
            <button onClick={() => props.removePerson(props.id)}>R</button>
        </tr>
    )
}


export default Person;