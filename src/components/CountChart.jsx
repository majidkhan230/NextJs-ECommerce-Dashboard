'use client'

import Image from 'next/image';
import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Total",
    count: 500,
    fill: "white",
  },
  {
    name: "Electronics",
    count: 300,
    fill: "#FFA726", // orange
  },
  {
    name: "Clothing",
    count: 200,
    fill: "#42A5F5", // blue
  },
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

const CountChart = () => {
  return (
    <div className="w-full h-full p-4 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-md font-semibold">Product Categories</h1>
        <Image src="/moreDark.png" alt="More options" width={16} height={16} />
      </div>
      
      {/* Radial Bar Chart Container */}
      <div style={{ width: '100%', height: "90%", borderRadius: "10px", backgroundColor: "white" }}>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={20} data={data}>
            <RadialBar
              minAngle={15}
              label={{ position: 'insideStart', fill: '#fff' }}
              background
              clockWise
              dataKey="count"
            />
            <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-center gap-16 mt-4">
        <div className="flex flex-col items-center gap-1">
          <div className="w-5 h-5 bg-[#42A5F5] rounded-full" />
          <h1 className="font-bold">300</h1>
          <h2 className="text-xs text-gray-500">Electronics (60%)</h2>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-5 h-5 bg-[#FFA726] rounded-full" />
          <h1 className="font-bold">200</h1>
          <h2 className="text-xs text-gray-500">Clothing (40%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
