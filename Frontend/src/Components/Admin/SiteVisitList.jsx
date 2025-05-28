import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstanceAdmin } from "../../api/axiosInstance";
import toast from "react-hot-toast";
import AdminNavbar from "../Admin/AdminNavbar";
import Swal from 'sweetalert2';

const SiteVisitList = () => {
  const [sitevisits, setSitevisits] = useState([]);

  useEffect(() => {
    axiosInstanceAdmin
      .get("/getallsitevisits")
      .then((response) => {
        if (response.data.sitevisitDetails) {
          setSitevisits(response.data.sitevisitDetails);
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
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstanceAdmin
          .delete(`/deletesitevisit/${id}`)
          .then(() => {
            setSitevisits(sitevisits.filter((sitevisit) => sitevisit._id !== id));
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
      <div className="bg-gradient-to-b from-teal-300 to-white p-4 rounded-lg">
        <div className="px-3 mt-10">
          <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-md">
            <div className="bg-white p-4 sm:flex sm:justify-between items-center rounded-t-lg">
              <h3 className="text-2xl font-bold mb-4 sm:mb-0 sm:mr-4 text-teal-600">
                Sitevisit Table
              </h3>
              <Link to="/addsitevisit">
                <button className="bg-teal-300 text-white px-3 py-1 rounded-lg">
                  Add New Sitevisit
                </button>
              </Link>
            </div>

            <div className="overflow-x-auto w-full">
              <table className="table text-gray-400 border-separate space-y-6 text-sm w-full">
                <thead className="bg-teal-600 text-white">
                  <tr>
                    <th className="p-3">Sl No</th>
                    <th className="p-3 text-left">Sitevisit</th>
                    <th className="p-3 text-left">Description</th>
                    <th className="p-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {sitevisits.map((sitevisit, index) => (
                    <tr key={sitevisit._id} className="bg-teal-50 lg:text-black">
                      <td className="p-3 font-medium capitalize">{index + 1}</td>
                      <td className="p-3">{sitevisit.title}</td>
                      <td className="p-3">{sitevisit.description}</td>
                      <td className="p-3">
                        <Link to={`/editsitevisit/${sitevisit._id}`}>
                          <button className="px-4 py-2 mr-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
                            Edit
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDelete(sitevisit._id)}
                          className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}

                  {!sitevisits.length && (
                    <tr>
                      <td colSpan={4} className="text-center py-4 text-gray-500">
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
