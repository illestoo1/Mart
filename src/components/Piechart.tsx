import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: { labels: string[]; values: number[] };
  colors?: string[];
  legendPosition?: "top" | "bottom" | "left" | "right";
}

const PieChart: React.FC<PieChartProps> = ({
  data,
  colors = ["#FF392B", "#2F80ED", "#00C3F8", "#FF8901"],
  legendPosition = "bottom",
}) => {
  const totalValue = data.values.reduce((acc, value) => acc + value, 0);
  const percentage = ((data.values[0] / totalValue) * 100).toFixed(0);

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: colors,
        hoverBackgroundColor: colors.map((color) => `${color}90`), // Lighter hover colors
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      legend: {
        display: true,
        position: legendPosition,
        labels: {
          usePointStyle: true,
          padding: 15,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            const value = tooltipItem.raw;
            const percentage = ((value / totalValue) * 100).toFixed(2);
            return `${tooltipItem.label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="w-[265px] h-[265px] relative">
      <Pie data={chartData} options={options} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="font-bold text-2xl text-gray-800">{`${percentage}%`}</div>
        <div className="text-sm text-gray-600">Total: {totalValue}</div>
      </div>
    </div>
  );
};

export default PieChart;
