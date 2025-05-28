import { useState } from "react";
import { axiosInstanceAdmin } from "../../api/axiosInstance.jsx";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AdminNavbar from "../Admin/AdminNavbar.jsx";

function AddSiteVisit() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    department: "",
    batch: "",
    siteName: "",
    location: "",
    visitDate: "",
    status: "Scheduled",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axiosInstanceAdmin.post("/addsitevisit", formData);

      if (response.data.message) {
        toast.success(response.data.message);
        navigate("/addsitevisits");
      }
    } catch (error) {
      if (error.response?.data?.error) {
        toast.error(error.response.data.error);
      } else {
        console.error("Error:", error);
        toast.error("An error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="bg-gradient-to-b from-teal-500 to-white p-4 rounded-lg">
        <br />
        <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-md">
          <h2 className="text-2xl font-bold px-6 py-4 bg-teal-800 text-white rounded-t-lg">
            Add Site Visit
          </h2>
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {[
              { label: "Department", name: "department", type: "text" },
              { label: "Batch", name: "batch", type: "text" },
              { label: "Site Name", name: "siteName", type: "text" },
              { label: "Location", name: "location", type: "text" },
              { label: "Visit Date", name: "visitDate", type: "date" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-700">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full border border-teal-500 rounded-md focus:ring-teal-800 focus:border-teal-800"
                />
              </div>
            ))}

            {/* Status Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-teal-500 rounded-md focus:ring-teal-800 focus:border-teal-800"
              >
                <option value="Scheduled">Scheduled</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-800 focus:ring-2 focus:ring-teal-500"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddSiteVisit;