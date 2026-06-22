import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import AdminSideBar from "./AdminSideBar";

const AdminLayout = () => {
  return (
    <div className="flex bg-slate-50 min-h-screen">

      <AdminSideBar/>

      <div className="flex-1 flex flex-col">

        <Navbar />

        <main className="flex-1 p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default AdminLayout;