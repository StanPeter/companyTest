import React from "react";
import "./PersonControl.css";

const PersonControl = (props) => {

    return (
        <form className="CustomForm" onSubmit={!props.disabled ? props.addPerson : props.updatePerson}>
            <h2 className="FadeInSlow">{!props.disabled ? "Add Person" : "Edit Person"}</h2>
            <div className="form-control">
                <label for="name">{props.disabled ? props.editedPerson.name : "Name"}</label>
                <input className="form-control" type="text" pattern="[A-Za-z]{2,10}" minLength="2" maxLength="10" id="name" name="name" required />
            </div>
            <div className="row m-0">
                <div className="form-control col-6">
                    <label for="age">{props.disabled ? props.editedPerson.age : "Age"}</label>
                    <input className="CustomInput form-control" type="number" min="0" max="129" id="age" name="age" required />
                </div>
                <div className="form-control col-6">
                    <label for="sex">{props.disabled ? props.editedPerson.sex : "Sex"}</label>
                    <select className="CustomInput form-control" id="sex" name="sex" required >
                        <option value="M">M</option>
                        <option value="F">F</option>
                        <option value="O">O</option>
                    </select>
                </div>
            </div>
            <button className="btn btn-primary m-4" disabled={props.disabled}>Add</button>
            <button className="btn btn-warning m-4" disabled={!props.disabled}>Update</button>
        </form>
    )
}




export default PersonControl;