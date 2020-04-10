import React from "react";
import "./Person.css";


const Person = (props) => {

    return (
        <tr className="FadeIn" style={{display: props.filter === props.person.sex || props.filter === null? "table-row" : "none"}}>
            <td>{props.person.name}</td>
            <td>{props.person.age}</td>
            <td>{props.person.sex}</td>
            <td>{props.person.updatedDate}</td>

            <a href="" onClick={() => props.editPerson(props.id)}><i className="fas fa-edit Yellow m-3 mx-1"></i></a>
            <a href="" onClick={() => props.removePerson(props.id)}><i className="fas fa-trash-alt Red my-3 mx-2"></i></a>        
        </tr>
    )
}


export default Person;