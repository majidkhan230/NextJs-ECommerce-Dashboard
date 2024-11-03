'use client'

import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Mon",
    sales: 150,
    returns: 10,
  },
  {
    name: "Tue",
    sales: 200,
    returns: 15,
  },
  {
    name: "Wed",
    sales: 180,
    returns: 40,
  },
  {
    name: "Thu",
    sales: 220,
    returns: 5,
  },
  {
    name: "Fri",
    sales: 170,
    returns: 8,
  },
];

const ECommerceChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#4CAF50" activeBar={<Rectangle fill="#81C784" stroke="#388E3C" />} />
        <Bar dataKey="returns" fill="#E57373" activeBar={<Rectangle fill="#FFCDD2" stroke="#D32F2F" />} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default ECommerceChart;
