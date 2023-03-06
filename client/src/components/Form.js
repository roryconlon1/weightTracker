import React, { useState } from "react";
import { postWeight } from "../service/dbService";
import './Form.css'

const Form = ({ addWeight }) => {

    const [formData, setFormData] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("hello");
        formData["weight"] = formData.weight;
        formData["date"] = formData.date;
        postWeight(formData)
            .then((data) => {
                addWeight(data)
            })
    }

    const handleChange = (event) => {
        formData[event.target.id] = event.target.value;
        console.log(formData);
        setFormData(formData)
    }

    return (
        <div>
            <form className="form" class="ui form" onSubmit={handleSubmit}>
                <div class="field">
                    <label>Weight in lbs</label>
                    <input type="number" onChange={handleChange} id="weight"></input>
                </div>
                <div class="field">
                    <label>Date</label>
                    <input type="date" id="date" onChange={handleChange}></input>
                </div>
                <button class="ui button">Save</button>
            </form>
        </div>
    )
}

export default Form;