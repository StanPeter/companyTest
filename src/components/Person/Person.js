import React, { Component } from "react";
import "./Person.css";


const Person = (props) => {
    console.log(props.editedPerson);
    
    return (
        <tr style={{"backgroundColor": props.editedPerson===props.id ? "green": "unset"}}>
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