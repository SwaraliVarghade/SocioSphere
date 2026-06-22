import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../modules/pages/LoginPage/Login";
import AdminDashboard from "../modules/pages/AdminDashboard/AdminDashBoard";
import ResidentDashboard from "../modules/pages/ResidentDashboard/ResidentDashboard";

import ProtectedRoutes from "./ProtectedRoutes";
import AdminLayout from "../components/AdminLayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoutes>
              <AdminLayout />
            </ProtectedRoutes>
          }
        >
          <Route
            path="dashboard"
            element={<AdminDashboard />}
          />

          
          {/* <Route path="residents" element={<Residents />} /> */}
          {/* <Route path="complaints" element={<Complaints />} /> */}
          {/* <Route path="notices" element={<Notices />} /> */}
        </Route>

        {/* Resident Routes */}
        <Route
          path="/resident/dashboard"
          element={
            <ProtectedRoutes>
              <ResidentDashboard />
            </ProtectedRoutes>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;