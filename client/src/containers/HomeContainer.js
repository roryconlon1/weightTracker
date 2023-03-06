import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import { getWeight } from "../service/dbService";
import './HomeContainer.css';
import Graph from "../components/Graph";

const HomeContainer = () => {

    const [weights, setWeights] = useState([]);

    useEffect(() => {
        getWeight()
        .then((data) => {
            setWeights(data)
        })
    }, [])

    const displayWeight = weights.map((myWeight, index) => {
        return <li key={index}>
            {myWeight.weight}
        </li>
    })

    const addWeight = (weight) => {
        let temp = weights.map(w => w);
        temp.push(weight);
        setWeights(temp);
    }

    return(
        <div className="homeContainer">
            <Form  addWeight={addWeight}/>
            <div className="weight">
            <Graph weights={weights}/>
            </div>
        </div>
    )
}

export default HomeContainer;