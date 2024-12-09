import React from "react";
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

// Sample data
const data = [
  { date: "16", revenue: 1000000 },
  { date: "18", revenue: 1200000 },
  { date: "20", revenue: 1500000 },
  { date: "22", revenue: 2000000 },
  { date: "24", revenue: 1800000 },
  { date: "26", revenue: 1600000 },
  { date: "28", revenue: 1700000 },
  { date: "30", revenue: 2200000 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-orange-500 text-white text-sm p-2 rounded shadow">
        Revenue: ${payload[0].value.toLocaleString()}
      </div>
    );
  }
  return null;
};

const RevenueChart = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-[#FF8901] w-3 h-3"></div>
          <h2 className="text-lg font-semibold">Revenue</h2>
        </div>
        <button className="flex items-center space-x-1 hover:bg-[#FF8901] hover:text-white p-2 rounded-md text-black focus:outline-none">
          <p className="text-sm font-semibold">View Details</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"
            />
          </svg>
        </button>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          {/* X-Axis */}
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          {/* Y-Axis */}
          <YAxis
            tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
            axisLine={false}
            tickLine={false}
          />
          {/* Tooltip */}
        
          {/* Line */}
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#f97316"
            strokeWidth={2}
            dot={{ r: 4, stroke: "#fff", strokeWidth: 2 }}
            activeDot={{ r: 6 }} // Highlight point on hover
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
