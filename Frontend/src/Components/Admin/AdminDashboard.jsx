import { useState, useEffect } from "react";
import LineChart from "../Admin/LineChart";
import {
  FaChartLine,
  FaUsers,
  FaSignOutAlt,
  FaClock,
} from "react-icons/fa";

function AdminDashboard() {
  const [siteVisitsMonthlyData, setSiteVisitsMonthlyData] = useState([]);
  const [uniqueVisitorsMonthlyData, setUniqueVisitorsMonthlyData] = useState([]);

  useEffect(() => {
    const dummySiteVisitsMonthlyData = [3200, 4500, 4900, 4100, 5200, 6100, 5800, 6200, 6400, 7000, 7300, 7100];
    const dummyUniqueVisitorsMonthlyData = [1800, 2100, 2300, 1900, 2500, 2700, 2600, 2800, 3000, 3300, 3400, 3200];

    setSiteVisitsMonthlyData(dummySiteVisitsMonthlyData);
    setUniqueVisitorsMonthlyData(dummyUniqueVisitorsMonthlyData);
  }, []);

  return (
    <section className="bg-gray-100 min-h-screen">
      {/* Dashboard Header */}
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center text-navy mb-10">
          SiteVisit Analytics Dashboard
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 ">
          {/* Card */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">Total Site Visits</h2>
                <p className="text-3xl font-semibold text-white">85,200</p>
              </div>
              <FaChartLine className="text-5xl text-white" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-400 p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">Unique Visitors</h2>
                <p className="text-3xl font-semibold text-white">43,700</p>
              </div>
              <FaUsers className="text-5xl text-white" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-400 to-red-600 p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">Bounce Rate</h2>
                <p className="text-3xl font-semibold text-white">42%</p>
              </div>
              <FaSignOutAlt className="text-5xl text-white" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-400 to-teal-500 p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">Avg. Session Duration</h2>
                <p className="text-3xl font-semibold text-white">3m 25s</p>
              </div>
              <FaClock className="text-5xl text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="px-4 py-10 flex justify-center">
        <div className="w-full max-w-5xl bg-white p-4 md:p-8 rounded-lg shadow-md h-[400px] md:h-[500px]">
          <LineChart
            data1={siteVisitsMonthlyData}
            data2={uniqueVisitorsMonthlyData}
          />
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;