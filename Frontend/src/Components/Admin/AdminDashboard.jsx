import { useState, useEffect } from "react";
import LineChart from "../Admin/LineChart";

function AdminDashboard() {
  const [siteVisitsMonthlyData, setSiteVisitsMonthlyData] = useState();
  const [uniqueVisitorsMonthlyData, setUniqueVisitorsMonthlyData] = useState();

  useEffect(() => {
    // Example data for a site visit dashboard
    const dummySiteVisitsMonthlyData = [3200, 4500, 4900, 4100, 5200, 6100, 5800, 6200, 6400, 7000, 7300, 7100];
    const dummyUniqueVisitorsMonthlyData = [1800, 2100, 2300, 1900, 2500, 2700, 2600, 2800, 3000, 3300, 3400, 3200];

    setSiteVisitsMonthlyData(dummySiteVisitsMonthlyData);
    setUniqueVisitorsMonthlyData(dummyUniqueVisitorsMonthlyData);
  }, []);

  return (
    <div className="bg-gray-100 flex justify-center">
      <div className="flex justify-center items-center bg-blue-100 border-2 border-blue-500 p-4">
        <div
          id="chart"
          className="bg-white p-8 rounded-lg shadow-md"
          style={{ height: "550px", width: "900px" }}
        >
          <LineChart
            label1="Site Visits"
            label2="Unique Visitors"
            data1={siteVisitsMonthlyData}
            data2={uniqueVisitorsMonthlyData}
          />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;