import { Typography } from '@mui/material';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data01 = [
  { name: 'M', value: 8 },
  { name: 'F', value: 2 },
  { name: 'null', value: 1 },
];
const data02 = [
  { name: 'M-true', value: 5 },
  { name: 'M-false', value: 3 },
  { name: 'F-true', value: 1 },
  { name: 'F-false', value: 1 },
  { name: 'null', value: 1 },
];

export default class PieExample extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-of-two-levels-gor24';

  render() {
    return (
        <div className='flexdown'>
            <Typography variant='subtitle2'>Number of Trx by Gender + Cart Completion</Typography>
        <PieChart width={400} height={250} style={{border: `1px solid gray`, marginLeft:'5px', marginBottom: '10px', borderRadius: '10px'}}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
            <Tooltip/>
        </PieChart>
        </div>
    );
  }
}
