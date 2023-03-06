import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Graph.css'


const Graph = ({ weights }) => {

    const formatDate = (date) => {
        const [year, month, day] = date.split('-');
        return `${day}/${month}/${year}`;
    };

    return (
        <div className="graphBox">
            <LineChart width={600} height={400} data={weights}>
                <CartesianGrid strokeDasharray="3 3" fill="white"/>
                <XAxis dataKey="date" tick={{ fontSize: 14 }} tickFormatter={formatDate}/>
                <YAxis dataKey="weight" tick={{ fontSize: 14 }} tickCount={10} domain={[150, 'auto']} />
                <Tooltip  labelStyle={{ fontSize: 16 }} itemStyle={{ fontSize: 14 }} />
                <Legend formatter={(value, entry) => `Weight in Lbs`} />
                <Line type="monotone" dataKey="weight" stroke="#6E8B3D" strokeWidth={2}/>
            </LineChart>
        </div>
    )
}

export default Graph;