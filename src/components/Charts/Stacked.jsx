import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend, Tooltip, CartesianGrid, ResponsiveContainer} from 'recharts';
import { stackedChartData, stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';

const Stacked = () => {
  return (
    <BarChart width={380} height={350} data={stackedChartData}>
      <CartesianGrid stroke="#ccc" strokeDasharray="1 5"/>
      <XAxis dataKey="name" fill="#4ade80" max="2000"/>
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" stackId="a" fill="#4ade80" barSize={30}/>
      <Bar dataKey="uv" stackId="a" fill="#4b5563" barSize={30} className="hover:fill-gray-500"/>
    </BarChart>
  )
}

export default Stacked