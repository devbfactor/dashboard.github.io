import React, {PureComponent} from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend, Tooltip, CartesianGrid } from 'recharts';
import { stackedChartData } from '../../data/dummy';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
      <div className="custom-tooltip bg-gray-900 px-5 py-2 opacity-80">
        <p className="label text-sm text-white">{`Budget: ${payload[0].value}`}</p>
        <p className="label text-sm text-white">{`Month: ${label}`}</p>
      </div>
    )
  }
}

export default class Stacked extends PureComponent {
  state = {
    opacity: {
      uv: 1,
      pv: 1,
    },
  };

  handleMouseEnter = (e) => {
    const { dataKey } = e;
    const { opacity } = this.state;
    this.setState({
      opacity: {
        ...opacity, [dataKey]: 0.5
      },
    });
  };

  handleMouseLeave = (e) => {
    const { dataKey } = e;
    const { opacity } = this.state;
    this.setState({
      opacity: {
        ...opacity, [dataKey]: 1
      },
    });
  };

  render() {
    const { opacity } = this.state;

    return (
      <BarChart width={380} height={350} data={stackedChartData} >
        <CartesianGrid stroke="#ccc" strokeDasharray="0 5"/>
        <XAxis dataKey="name" fill="#4ade80" scale="none" padding={{left: 30, right: 30}} />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
        <Bar dataKey="pv" fillOpacity={opacity.pv} stackId="a" fill="#4ade80" barSize={30} legendType="circle"/>
        <Bar dataKey="uv" fillOpacity={opacity.uv} stackId="a" fill="#4b5563" barSize={30} legendType="circle"/>
      </BarChart>
    )
  }

}