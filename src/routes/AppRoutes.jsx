import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "../modules/pages/LoginPage/Login";

import ProtectedRoutes from "./ProtectedRoutes";
import AdminDashboard from "../modules/pages/admin/AdminDashboard/AdminDashBoard";
import ResidentDashboard from "../modules/pages/Resident/ResidentDashboard/ResidentDashboard";
import AdminLayout from "../components/AdminLayout";
import ProfileOfAdmin from "../modules/pages/admin/AdminProfile/ProfileOfAdmin";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route
          path="/"
          element={<Login />}
        />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoutes allowedRole="admin">
              <AdminLayout />
            </ProtectedRoutes>
          }
        >
          <Route
            path="dashboard"
            element={<AdminDashboard />}
          />
          <Route
            path="profile"
            element={<ProfileOfAdmin/>}
          />

          <Route
            path="residents"
            element={<h1>Residents Page</h1>}
          />

          <Route
            path="complaints"
            element={<h1>Complaints Page</h1>}
          />
        </Route>

        {/* Resident Routes */}
        <Route
          path="/resident"
          element={
            <ProtectedRoutes allowedRole="resident">
              <ResidentDashboard />
            </ProtectedRoutes>
          }
        >
          <Route
            path="dashboard"
            element={<ResidentDashboard />}
          />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;