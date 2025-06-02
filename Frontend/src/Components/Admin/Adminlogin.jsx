import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { setAdminInfo } from '../../../Redux/Slices/AdminSlice';
import { axiosInstanceAdmin } from '../../api/axiosInstance';

import logoArcite from '../../assets/logoArcite.png';
import admin1 from '../../assets/admin1.jpg';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const adminUser = useSelector((state) => state.admin.admindata);

  useEffect(() => {
    if (adminUser) {
      navigate('/admindashboard');
    }
  }, [adminUser, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosInstanceAdmin.post('/admin', { email, password })
      .then((response) => {
        if (response.data.message) {
          localStorage.setItem("adminToken", response.data.token);
          localStorage.setItem("adminRefreshToken", response.data.refreshToken);
          dispatch(setAdminInfo(response.data));
          toast.success(response.data.message);
          navigate('/admindashboard');
        }
      })
      .catch((error) => {
        toast.error(error.response?.data?.message || "Login failed");
      });
  };

  return (
    <div
      className="flex min-h-screen justify-center items-center bg-blue-50"
      style={{
        backgroundImage: `url(${admin1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw'
      }}
    >
      <div className="bg-white rounded-lg border border-gray-300 shadow-md overflow-hidden sm:max-w-sm sm:w-full">
        <div className="px-6 py-8">
          <img
            className="mx-auto h-20 w-auto"
            src={logoArcite}
            alt="Arcite logo"
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 text-gray-900">
            Login As Admin
          </h2>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              ADMIN LOGIN
            </button>
          </form>

          <p className="text-center text-sm font-semibold text-gray-900 mt-4">
            Don't have an account?{' '}
            <Link
              to="/adminregister"
              className="font-medium text-indigo-600 hover:underline"
            >
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
