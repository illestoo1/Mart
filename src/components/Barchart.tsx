"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: ["20", "22", "24", "26", "28", "June", "July"],
    datasets: [
      {
        label: "",
        data: [3000, 2500, 4000, 5000, 4500, 4800, 5500],
        backgroundColor: "rgba(255, 137, 1, 1)",
        borderColor: "rgba(75, 192, 192, 1)",
        // borderWidth: 1,
        barThickness: 6, // Adjust this value to control the bar thickness
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false, // Remove grid lines on the x-axis
        },
      },
      y: {
        grid: {
          display: false, // Remove grid lines on the y-axis
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

  return <Bar data={data} options={options} width={400} height={300} />; // Adjust width and height
};

export default BarChart;
