// src/LineChart.tsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

// Register the components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

// Define the data type for the chart
const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Monthly Sales",
      data: [30, 45, 60, 40, 70, 55],
      borderColor: "rgb(255, 165, 0)", // Orange border color
      backgroundColor: "rgba(255, 165, 0, 0.2)", // Transparent orange background
      pointBorderColor: "rgb(255, 165, 0)", // Orange point border color
      tension: 0.3, // Smoothing the line
    },
  ],
};

// Define options with proper typing
const options: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Months",
      },
    },
    y: {
      title: {
        display: true,
        text: "Sales (in units)",
      },
      beginAtZero: true,
    },
  },
};

const LineChart: React.FC = () => {
  return <Line data={data} options={options} />;
};

export default LineChart;
