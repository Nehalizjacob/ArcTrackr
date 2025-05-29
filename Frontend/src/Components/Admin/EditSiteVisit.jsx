import { useState, useEffect } from 'react';
import { axiosInstanceAdmin } from '../../api/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';
import AdminNavbar from '../Admin/AdminNavbar';

function EditSiteVisit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [department, setDepartment] = useState("");
  const [batch, setBatch] = useState("");
  const [siteName, setSiteName] = useState("");
  const [location, setLocation] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    axiosInstanceAdmin.get(`/getallsitevisit1/${id}`)
      .then((response) => {
        if (response.data && response.data.sitevisitDetails) {
          const sv = response.data.sitevisitDetails;
          setDepartment(sv.department);
          setBatch(sv.batch);
          setSiteName(sv.siteName);
          setLocation(sv.location);
          setVisitDate(sv.visitDate.slice(0, 10)); // Format as YYYY-MM-DD
          setStatus(sv.status);
        }
      })
      .catch(error => {
        console.error("Error fetching sitevisit details:", error);
      });
  }, [id]);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    axiosInstanceAdmin.put(`/editsitevisit/${id}`, {
      department,
      batch,
      siteName,
      location,
      visitDate,
      status,
    })
      .then((response) => {
        if (response) {
          navigate('/sitevisits');
        } else {
          console.error("Failed to update sitevisit");
        }
      })
      .catch((error) => {
        console.error("Error occurred:", error);
      });
  };

  return (
    <>
      <AdminNavbar />
      <div className="bg-gradient-to-b from-teal-200 to-white p-4 rounded-lg">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold px-6 py-4 bg-teal-600 text-white rounded-t-lg">
            Edit Site Visit
          </h2>
          <form onSubmit={handleEditSubmit} className="p-6 grid grid-cols-1 gap-4">
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="Department"
              className="p-2 border rounded-md"
              required
            />
            <input
              type="text"
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
              placeholder="Batch"
              className="p-2 border rounded-md"
              required
            />
            <input
              type="text"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              placeholder="Site Name"
              className="p-2 border rounded-md"
              required
            />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="p-2 border rounded-md"
              required
            />
            <input
              type="date"
              value={visitDate}
              onChange={(e) => setVisitDate(e.target.value)}
              className="p-2 border rounded-md"
              required
            />
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="p-2 border rounded-md"
              required
            >
              <option value="">Select Status</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditSiteVisit;
