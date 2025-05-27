import { useState } from "react";
import { logout } from "../../../Redux/Slices/AdminSlice";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logoArcite from "../../assets/logoArcite.png";

function AdminNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const adminUser = useSelector((state) => state.admin.admindata);


  const handleLogout = () => {
    dispatch(logout());
    navigate("/admin"); // Redirect to login page or admin login page
  };

  return (
    <div>
      <nav className="flex flex-wrap items-center justify-between p-3 bg-gray-200">
        {/* Logo */}
        <img
          src={logoArcite}
          className="h-12 w-32"
          alt="Job Portal"
          width="100"
        />

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden">
          <button onClick={toggleMenu}>
            <img
              className={menuOpen ? "hidden" : "block"}
              src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
              width="40"
              height="40"
              alt="Menu"
            />
            <img
              className={menuOpen ? "block" : "hidden"}
              src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              width="40"
              height="40"
              alt="Close"
            />
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`w-full flex-grow md:flex md:items-center md:w-auto ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div className="ml-40 text-right text-bold mt-5 md:mt-0 border-t-2 border-white md:border-none">
            <a
              href="/admindashboard"
              className="block md:inline-block text-navy hover:text-yellow-400 px-3 py-3 border-b-2 border-transparent md:border-none"
            >
              Dashboard
            </a>
            <a
              href="/addsitvisit"
              className="block md:inline-block text-navy hover:text-yellow-400 px-3 py-3 border-b-2 border-transparent md:border-none"
            >
              Add Site visit
            </a>
          </div>
        </div>

        {/* Logout Button */}
        {adminUser && (
          <button
            onClick={handleLogout}
            className="hidden md:flex px-4 py-2 text-right bg-aqua text-navy font-bold hover:bg-yellow-400 hover:text-black md:rounded"
          >
            Logout
          </button>
        )}
      </nav>
    </div>
  );
}

export default AdminNavbar;