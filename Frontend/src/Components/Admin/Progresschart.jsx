import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Chart configuration options
export const options = {
  responsive: true,
  maintainAspectRatio: false, // ✅ Important for responsive height
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Site Visits and Unique Visitors per Month",
    },
  },
};

const Progresschart = ({ data1, data2 }) => {
  const labels = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Site Visits",
        data: data1,
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        tension: 0.4,
      },
      {
        label: "Unique Visitors",
        data: data2,
        borderColor: "rgb(255, 206, 86)",
        backgroundColor: "rgba(255, 206, 86, 0.5)",
        tension: 0.4,
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default Progresschart;