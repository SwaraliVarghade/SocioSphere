import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  LayoutDashboard,
  Users,
  MessageSquareWarning,
  Bell,
  CreditCard,
  UserCog,
  LogOut,
  Building2,
} from "lucide-react";

import { logout } from "../modules/redux/LoginPage/loginSlice";

const menus = [
  {
    section: "Main",
    items: [
      {
        title: "Dashboard",
        path: "/admin/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Residents",
        path: "/admin/residents",
        icon: Users,
      },
    ],
  },

  {
    section: "Management",
    items: [
      {
        title: "Complaints",
        path: "/admin/complaints",
        icon: MessageSquareWarning,
      },
      {
        title: "Notices",
        path: "/admin/notices",
        icon: Bell,
      },
      {
        title: "Maintenance",
        path: "/admin/maintenance",
        icon: CreditCard,
      },
    ],
  },

  {
    section: "Account",
    items: [
      {
        title: "Profile",
        path: "/admin/profile",
        icon: UserCog,
      },
    ],
  },
];

const AdminSideBar = () => {
  const [expanded, setExpanded] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());

    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <aside
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`
        bg-white
        border-r
        border-slate-200
        min-h-screen
        flex
        flex-col
        shadow-sm
        transition-all
        duration-300
        ease-in-out
        ${expanded ? "w-64" : "w-20"}
      `}
    >
      {/* Logo */}
      <div className="h-16 border-b border-slate-200 flex items-center px-4">

        <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center flex-shrink-0">
          <Building2 className="w-5 h-5 text-white" />
        </div>

        {expanded && (
          <div className="ml-3 overflow-hidden">
            <h1 className="font-bold text-slate-800 whitespace-nowrap">
              SocioSphere
            </h1>

            <p className="text-xs text-slate-500 whitespace-nowrap">
              Society Management
            </p>
          </div>
        )}

      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">

        {menus.map((group, index) => (
          <div
            key={group.section}
            className={index !== 0 ? "mt-5" : ""}
          >
            {expanded && (
              <p className="px-3 mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                {group.section}
              </p>
            )}

            <div className="space-y-1">

              {group.items.map((menu) => {
                const Icon = menu.icon;

                return (
                  <NavLink
                    key={menu.path}
                    to={menu.path}
                    title={!expanded ? menu.title : ""}
                    className={({ isActive }) =>
                      `
                      flex
                      items-center
                      gap-3
                      px-3
                      py-3
                      rounded-xl
                      transition-all
                      duration-200
                      ${
                        isActive
                          ? "bg-teal-50 text-teal-600"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }
                    `
                    }
                  >
                    <Icon
                      size={20}
                      className="flex-shrink-0"
                    />

                    {expanded && (
                      <span className="font-medium whitespace-nowrap">
                        {menu.title}
                      </span>
                    )}
                  </NavLink>
                );
              })}

            </div>
          </div>
        ))}

      </nav>

      {/* Logout */}
      <div className="border-t border-slate-200 p-3">

        <button
          onClick={handleLogout}
          title={!expanded ? "Logout" : ""}
          className="
            w-full
            flex
            items-center
            gap-3
            px-3
            py-3
            rounded-xl
            text-slate-600
            hover:bg-red-50
            hover:text-red-600
            transition-all
            duration-200
          "
        >
          <LogOut
            size={20}
            className="flex-shrink-0"
          />

          {expanded && (
            <span className="font-medium">
              Logout
            </span>
          )}
        </button>

      </div>

    </aside>
  );
};

export default AdminSideBar;