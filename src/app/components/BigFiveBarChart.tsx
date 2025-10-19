import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export type BigFiveTrait = {
  name: string;
  value: number;
  color: string;
};

interface BigFiveBarChartProps {
  traits: BigFiveTrait[];
}

const options = {
  indexAxis: "x" as const,
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: false },
    tooltip: {
      enabled: false,
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      max: 20,
      grid: { display: false },
      ticks: { stepSize: 2 },
    },
    y: {
      grid: { display: false },
      ticks: { font: { size: 16 } },
    },
  },
};

const BigFiveBarChart: React.FC<BigFiveBarChartProps> = ({ traits }) => {
  const data = {
    labels: traits.map((t) => t.name),
    datasets: [
      {
        data: traits.map((t) => t.value),
        backgroundColor: traits.map((t) => t.color),
        borderRadius: 6,
        barPercentage: 0.7,
        categoryPercentage: 0.7,
      },
    ],
  };

  return (
    <div className="mx-auto my-10 flex w-full">
      <Bar data={data} options={options} height={80} />
      {/* <div className="mt-2 flex justify-between text-base">
        {traits.map((t) => (
          <div key={t.name} className="w-1/6 text-center">
            {t.name}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default BigFiveBarChart;
