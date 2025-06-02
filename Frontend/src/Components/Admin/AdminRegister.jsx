import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import logoArcite from "../../assets/logoArcite.png";
import tutor6 from "../../assets/tutor6.jpg";
import { axiosInstanceAdmin } from '../../api/axiosInstance';
import { useFormik } from 'formik';

function AdminRegister() {
  const navigate = useNavigate();

  const validate = values => {
    const errors = {};
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length < 3) {
      errors.name = 'Must be 3 characters or more';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 6) {
      errors.password = 'Must be 6 characters or more';
    } else if (!passwordRegex.test(values.password)) {
      errors.password = 'Password must include uppercase, lowercase, number, and special character.';
    }

    if (!values.confirmpassword) {
      errors.confirmpassword = 'Required';
    } else if (values.confirmpassword !== values.password) {
      errors.confirmpassword = 'Passwords do not match';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmpassword: ''
    },
    validate,
    onSubmit: (values) => {
      axiosInstanceAdmin
        .post('/adminregister', values)
        .then((response) => {
          toast.success(response.data.message);
          navigate("/");
        })
        .catch((error) => {
          toast.error(error.response?.data?.message || "Registration failed");
        });
    }
  });

  return (
    <section>
      <div
        className="flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8 bg-gray-500"
        style={{
          backgroundImage: `url(${tutor6})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '120vh',
          width: '100vw'
        }}
      >
        <div className="flex flex-col items-center px-6 py-4 md:h-screen lg:py-0">
          <div className="w-full bg-white border border-customColor lg:mt-0 sm:max-w-lg xl:p-0">
            <div className="p-6 space-y-4 md:space-y-2 sm:p-8">
              <div className="flex justify-center items-center">
                <img src={logoArcite} className="h-9 w-110" alt="ACME" width="120" />
              </div>
              <h1 className="font-semibold text-xl">Sign up to your account</h1>
              <form onSubmit={formik.handleSubmit} className="space-y-4 md:space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className="bg-white border border-gray-400 text-gray-900 text-sm block w-full p-2.5"
                    required
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="text-red-600 text-sm mt-1 font-medium">{formik.errors.name}</div>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className="bg-white border border-gray-400 text-gray-900 text-sm block w-full p-2.5"
                    required
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-red-600 text-sm mt-1 font-medium">{formik.errors.email}</div>
                  )}
                </div>

                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className="bg-white border border-gray-400 text-gray-900 text-sm block w-full p-2.5"
                    required
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="text-red-600 text-sm mt-1 font-medium">{formik.errors.password}</div>
                  )}
                </div>

                <div>
                  <input
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirm Password"
                    value={formik.values.confirmpassword}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className="bg-white border border-gray-400 text-gray-900 text-sm block w-full p-2.5"
                    required
                  />
                  {formik.touched.confirmpassword && formik.errors.confirmpassword && (
                    <div className="text-red-600 text-sm mt-1 font-medium">{formik.errors.confirmpassword}</div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-customColor text-white hover:bg-customColor-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customColor"
                >
                  Signup
                </button>
              </form>

              <p className="text-center text-sm font-semibold text-gray-900">
                Already have an account?{" "}
                <Link to="/" className="font-medium text-customColor hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminRegister;
