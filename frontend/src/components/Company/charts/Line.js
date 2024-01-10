import { Typography } from '@mui/material';
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const formatDate = (date) => {
    return `${date.getDate()}-${date.toLocaleString('default', { month: 'short' })}`
}

const data = [
  {
    name: formatDate(new Date(new Date().setDate(new Date().getDate() - 6))),
    Customers: 20,
    Transactions: 34,
  },
  {
    name: formatDate(new Date(new Date().setDate(new Date().getDate() - 5))),
    Customers: 9,
    Transactions: 11,
  },
  {
    name: formatDate(new Date(new Date().setDate(new Date().getDate() - 4))),
    Customers: 14,
    Transactions: 28,
  },
  {
    name: formatDate(new Date(new Date().setDate(new Date().getDate() - 3))),
    Customers: 12,
    Transactions: 31,
  },
  {
    name: formatDate(new Date(new Date().setDate(new Date().getDate() - 2))),
    Customers: 21,
    Transactions: 24,
  },
  {
    name: formatDate(new Date(new Date().setDate(new Date().getDate() - 1))),
    Customers: 4,
    Transactions: 7,
  },
  {
    name: formatDate(new Date()),
    Customers: 24,
    Transactions: 47,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
        <div className='flexdown'>
        <Typography variant='subtitle2'>Number of Customers & Transactions</Typography>
        <LineChart
          width={450}
          height={250}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 10,
          }}
          style={{border: `1px solid gray`, marginLeft:'5px', marginBottom: '10px', borderRadius: '10px'}}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Customers" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Transactions" stroke="#82ca9d" />
        </LineChart>
        </div>
    );
  }
}
