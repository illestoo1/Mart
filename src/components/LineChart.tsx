"Use client";
import React from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '16', visits: 1500 },
  { name: '18', visits: 2000 },
  { name: '20', visits: 1200 },
  { name: '22', visits: 1800 },
  { name: '24', visits: 2500 },
  { name: '26', visits: 2200 },
  { name: '28', visits: 1600 },
  { name: '30', visits: 2800 },
];
const LineCard = () => {
  return (

<div className="relative h-40 bg-white">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#FFF', borderRadius: '5px', border: 'none', boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} 
                labelStyle={{ color: '#555' }} 
                formatter={(value) => [`${value}k`, 'Visits']}
              />
              <Line 
                type="monotone" 
                dataKey="visits" 
                stroke="#ff8500" 
                strokeWidth={3} 
                dot={{ r: 5 }} 
                activeDot={{ r: 8 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
    
  );
};

export default LineCard;