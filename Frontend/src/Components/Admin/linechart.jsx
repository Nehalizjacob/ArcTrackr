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

const LineChart = () => {
  // Example data: site visits and unique visitors per month
  const siteVisitsMonthlyData = [3200, 4500, 4900, 4100, 5200, 6100, 5800, 6200, 6400, 7000, 7300, 7100];
  const uniqueVisitorsMonthlyData = [1800, 2100, 2300, 1900, 2500, 2700, 2600, 2800, 3000, 3300, 3400, 3200];

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const data = {
    labels,
    datasets: [
      {
        label: "Site Visits",
        data: siteVisitsMonthlyData,
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        tension: 0.4,
      },
      {
        label: "Unique Visitors",
        data: uniqueVisitorsMonthlyData,
        borderColor: "rgb(255, 206, 86)",
        backgroundColor: "rgba(255, 206, 86, 0.5)",
        tension: 0.4,
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default LineChart;