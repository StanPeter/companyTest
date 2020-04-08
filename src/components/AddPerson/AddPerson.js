import React from "react";
import "./AddPerson.css";

const AddPersonControl = (props) => (
    <form className="CustomForm" onSubmit={!props.disabled? props.addPerson: props.updatePerson}>
        <div className="form-control">
            <label for="name">Name</label>
            <input className="form-control" type="text" id="name" name="name" required />
        </div>
        <div className="row m-0">
            <div className="form-control col-6">    
                <label for="age">Age</label>
                <input className="CustomInput form-control" type="number" id="age" name="age" required />
            </div>
            <div className="form-control col-6">    
                <label for="sex">Sex</label>
                <select  className="CustomInput form-control" id="sex" name="sex" required >
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

export default AddPersonControl;