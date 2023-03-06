import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Graph = ({ weights }) => {

    return (
        <div>
            <LineChart width={600} height={400} data={weights}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tick={{ fontSize: 14 }} />
                <YAxis dataKey="weight" tick={{ fontSize: 14 }} tickCount={20} />
                <Tooltip contentStyle={{ backgroundColor: 'white', border: 'none', borderRadius: '5px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }} labelStyle={{ fontSize: 16 }} itemStyle={{ fontSize: 14 }} />
                <Legend formatter={(value, entry) => `Weight in Lbs`} />
                <Line type="monotone" dataKey="weight" stroke="#8884d8" />
            </LineChart>
        </div>
    )
}

export default Graph;