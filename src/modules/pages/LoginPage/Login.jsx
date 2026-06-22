import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Building2, Mail, Lock, AlertCircle } from "lucide-react";
import { loginUserThunk } from "../../redux/LoginPage/loginThunk";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { selectError, selectLoading, selectUser } from "../../redux/LoginPage/loginSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    role: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUserThunk(formData));
  };

  useEffect(() => {
    if (user?.role === "admin") {
      navigate("/admin/dashboard");
    }

    if (user?.role === "resident") {
      navigate("/resident/dashboard");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-8">

        {/* Logo / Branding */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-teal-600 p-3 rounded-xl mb-3">
            <Building2 className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800">
            SocioSphere
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Society Management System
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="flex items-center gap-2 mb-5 bg-red-50 border border-red-100 text-red-600 text-sm px-4 py-3 rounded-lg">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Login As
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
            >
              <option value="">Select Role</option>
              <option value="admin">Administrator</option>
              <option value="resident">Resident</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full border border-slate-300 rounded-lg pl-10 pr-3 py-2.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full border border-slate-300 rounded-lg pl-10 pr-3 py-2.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-300 disabled:cursor-not-allowed text-white font-medium py-2.5 rounded-lg transition mt-2"
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>

        <p className="text-center text-xs text-slate-400 mt-6">
          © {new Date().getFullYear()} SocioSphere. All rights reserved.
        </p>
      </div>
    </div>
  );  
};

export default Login;