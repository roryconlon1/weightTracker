import React, { useState } from "react";
import { Form, Radio } from "semantic-ui-react";
import './Tdee.css';

const Tdee = ({ weights }) => {
    let lastWeight = "No weight data available";

    if (weights.length > 0 && weights[weights.length - 1].weight) {
        lastWeight = weights[weights.length - 1].weight;
    }

    let bmr = 5 + (10 * (lastWeight * 0.453592) + (6.25 * 183) - (5 * 27))
    let tdee = bmr * 1.2;
    let light = bmr * 1.375;
    let moderate = bmr * 1.55;

    const [selectedValue, setSelectedValue] = useState("BMR");

    const handleChange = (e, { value }) => {
        setSelectedValue(value);
    };

    let value;

    switch (selectedValue) {
        case "BMR":
            value = bmr;
            break;
        case "TDEE Sedentary":
            value = tdee;
            break;
        case "Light":
            value = light;
            break;
        case "Moderate":
            value = moderate;
            break;
        default:
            value = bmr;
    }

    let mildWeight = (value * 0.85).toFixed(0);
    let moderateWeight = (value * 0.8).toFixed(0);
    let extremeWeight = (value * 0.75).toFixed(0);

    return (
        <div className="calories">
            <ul className="calorieIntakeList">
                <li className="listItem">Maintenance Calories: <b>{value.toFixed(0)}</b></li>
                <li className="listItem">Mild Weight Loss Calories: <b>{mildWeight}</b></li>
                <li className="listItem">Moderate Weight Loss Calories: <b>{moderateWeight}</b></li>
                <li className="listItem">Extreme Weight Loss Calories: <b>{extremeWeight}</b></li>
            </ul>
            <Form className="radioButtons">
                <Form.Field>
                    <Radio
                        label="BMR"
                        name="radioGroup"
                        value="BMR"
                        checked={selectedValue === "BMR"}
                        onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Radio
                        label="TDEE Sedentary"
                        name="radioGroup"
                        value="TDEE Sedentary"
                        checked={selectedValue === "TDEE Sedentary"}
                        onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Radio
                        label="Light"
                        name="radioGroup"
                        value="Light"
                        checked={selectedValue === "Light"}
                        onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Radio
                        label="Moderate"
                        name="radioGroup"
                        value="Moderate"
                        checked={selectedValue === "Moderate"}
                        onChange={handleChange}
                    />
                </Form.Field>
            </Form>
        </div>
    );
};

export default Tdee;
