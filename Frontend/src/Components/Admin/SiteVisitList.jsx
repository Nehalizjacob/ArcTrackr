import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstanceAdmin } from "../../api/axiosInstance";
import toast from "react-hot-toast";
import AdminNavbar from "../Admin/AdminNavbar";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const SiteVisitList = () => {
  const [sitevisitDetails, setSitevisitDetails] = useState([]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    axiosInstanceAdmin
      .get("/getallsitevisits")
      .then((response) => {
        if (response.data.sitevisitDetails) {
          setSitevisitDetails(response.data.sitevisitDetails);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        toast.error("Error fetching data. Please try again later.");
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this sitevisit!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      customClass: {
        confirmButton:
          "bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400",
        cancelButton:
          "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400",
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstanceAdmin
          .delete(`/deletesitevisit/${id}`)
          .then(() => {
            setSitevisitDetails(
              sitevisitDetails.filter((sitevisit) => sitevisit._id !== id)
            );
            toast.success("Sitevisit deleted successfully");
          })
          .catch((error) => {
            console.error("Error deleting Sitevisit", error);
            toast.error("Error in deleting Sitevisit");
          });
      }
    });
  };

  return (
    <>
      <AdminNavbar />
      <div className="bg-gradient-to-b from-teal-300 to-white p-5 rounded-lg">
        <div className="px-3 mt-10">
          <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-md">
            <div className="bg-white p-4 sm:flex sm:justify-between items-center rounded-t-lg">
              <h3 className="text-2xl font-bold mb-4 sm:mb-0 sm:mr-4 text-teal-600">
                Sitevisit Table
              </h3>
              <Link to="/addsitevisit">
                <button className="bg-teal-500 text-white px-3 py-1 rounded-lg">
                  Add New Sitevisit
                </button>
              </Link>
            </div>

            <div className="overflow-x-auto w-full">
              <table className="table text-gray-700 border-separate space-y-6 text-sm w-full">
                <thead className="bg-teal-600 text-white">
                  <tr>
                    <th className="p-3">Sl No</th>
                    <th className="p-3 text-left">Department</th>
                    <th className="p-3 text-left">Batch</th>
                    <th className="p-3 text-left">Site Name</th>
                    <th className="p-3 text-left">Location</th>
                    <th className="p-3 text-left">Visit Date</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-5 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {sitevisitDetails.map((sitevisit, index) => (
                    <tr key={sitevisit._id} className="bg-teal-50 lg:text-black">
                      <td className="p-3 font-medium capitalize">{index + 1}</td>
                      <td className="p-3">{sitevisit.department}</td>
                      <td className="p-3">{sitevisit.batch}</td>
                      <td className="p-3">{sitevisit.siteName}</td>
                      <td className="p-3">{sitevisit.location}</td>
                      <td className="p-3">{formatDate(sitevisit.visitDate)}</td>
                      <td className="p-3">{sitevisit.status}</td>
                      <td className="p-3">
                        <div className="flex items-center space-x-2">
                          <Link to={`/editsitevisit/${sitevisit._id}`}>
                            <button className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
                              Edit
                            </button>
                          </Link>

                          <button
                            onClick={() => handleDelete(sitevisit._id)}
                            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {!sitevisitDetails.length && (
                    <tr>
                      <td colSpan={8} className="text-center py-4 text-gray-500">
                        No sitevisit found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteVisitList;
