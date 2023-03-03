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
            <form className="form" onSubmit={handleSubmit}>
                <ul>
                    <li>
                        Weight in lbs &nbsp;
                        <input type="number" onChange={handleChange} id="weight"></input>
                    </li>
                    <li>
                        Date &nbsp;
                        <input type="date" id="date" onChange={handleChange}></input>
                    </li>
                    <li>
                        <button >Save</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default Form;