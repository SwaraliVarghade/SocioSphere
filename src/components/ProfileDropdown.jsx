import { User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../modules/redux/LoginPage/loginSlice";
const ProfileDropdown = ({
  closeDropdown,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());

    localStorage.removeItem("userSociety");

    navigate("/");
  };

  return (
    <div className="absolute right-0 top-14 w-72 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden z-50">

      <div className="p-4 bg-slate-50 border-b">

        <h3 className="font-semibold text-slate-800">
          {user?.name}
        </h3>

        <p className="text-sm text-slate-500">
          {user?.email}
        </p>

      </div>

      <button
        onClick={() => {
          navigate("/admin/profile");
          closeDropdown();
        }}
        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-teal-50 text-slate-700"
      >
        <User size={18} />
        View Profile
      </button>

      <button
        onClick={handleLogout}
        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 text-red-600"
      >
        <LogOut size={18} />
        Logout
      </button>

    </div>
  );
};

export default ProfileDropdown;