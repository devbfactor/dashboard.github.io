import React from 'react';
import { LineChart, Line, Tooltip} from 'recharts';
import { SparklineAreaData } from '../../data/dummy';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
      <div className="custom-tooltip bg-gray-900 px-5 py-2 opacity-80">
        <p className="label text-sm text-white">{`${label} : ${payload[0].value}`}</p>
      </div>
    )
  }
}

const SparkLine = () => {
  return (
    <LineChart
      width={250}
      height={80}
      data={SparklineAreaData}
    >
      <Line type="monotone" data-tip="yval" dataKey="yval" stroke="#82ca9d" />
      <Tooltip content=<CustomTooltip />/>
    </LineChart>
  )
}

export default SparkLine