import React from 'react';
import { LineChart, Line, Tooltip} from 'recharts';
import { SparklineAreaData } from '../../data/dummy';

const SparkLine = () => {
  return (
    <LineChart
      width={250}
      height={80}
      data={SparklineAreaData}
    >
      <Line type="monotone" data-tip="yval" dataKey="yval" stroke="#82ca9d" />
      <Tooltip/>
    </LineChart>
  )
}

export default SparkLine