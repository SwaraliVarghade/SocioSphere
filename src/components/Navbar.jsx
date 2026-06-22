import { useState } from "react";
import { Bell, ChevronDown } from "lucide-react";
import { useSelector } from "react-redux";
import ProfileDropdown from "./ProfileDropdown";
import { selectUser } from "../modules/redux/LoginPage/loginSlice";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const user = useSelector(selectUser);

  const today = new Date().toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between">
      {/* Left Side */}
      <div>
        <h2 className="text-lg font-semibold text-slate-800">
          Dashboard
        </h2>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        <span className="text-sm text-slate-500">
          {today}
        </span>

        <button className="relative p-2 rounded-lg hover:bg-slate-100">
          <Bell size={20} className="text-slate-600" />
        </button>

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3 rounded-lg hover:bg-slate-100 px-2 py-1 transition"
          >
            <img
              src={user?.profileImage}
              alt="profile"
              className="w-10 h-10 rounded-full border-2 border-teal-500"
            />

            <div className="text-left hidden md:block">
              <p className="font-semibold text-slate-800">
                {user?.name || "Administrator"}
              </p>

              <p className="text-xs text-slate-500">
                {user?.email}
              </p>
            </div>

            <ChevronDown
              size={18}
              className={`transition ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {open && (
            <ProfileDropdown
              closeDropdown={() => setOpen(false)}
            />
          )}

        </div>

      </div>
    </header>
  );
};

export default Navbar;