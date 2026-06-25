import { useSelector } from "react-redux";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  User,
} from "lucide-react";
import { selectUser } from "../../../redux/LoginPage/loginSlice";
import CustomDrawer from "../../../../components/CustomDrawer";
import { useState } from "react";
import EditProfile from "./EditProfile";


const ProfileOfAdmin = () => {
  const user = useSelector(selectUser);
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          {/* Top Banner */}
          <div className="h-36 bg-gradient-to-r from-teal-600 to-teal-500" />
          <div className="px-8 pb-8">
            {/* Profile Image */}
            <div className="-mt-16 flex flex-col md:flex-row md:items-end md:justify-between">
              <div className="flex items-end gap-5">
                <img
                  src={user?.profileImage}
                  alt={user?.name}
                  className="
                    w-32 h-32
                    rounded-full
                    border-4 border-white
                    object-cover
                    shadow-md
                    bg-white
                  "
                />
                <div className="pb-2">
                  <h1 className="text-3xl font-bold text-slate-800">
                    {user?.name}
                  </h1>
                  <p className="text-slate-500 mt-1">
                    Administrator
                  </p>
                  <span className="
                    inline-block
                    mt-3
                    bg-teal-100
                    text-teal-700
                    text-sm
                    font-medium
                    px-4 py-1
                    rounded-full
                  ">
                    Active Account
                  </span>
                </div>
              </div>
                <button
                    onClick={()=>setOpenDrawer(true)}
                    className="
                    mt-4 md:mt-0
                    bg-teal-600
                    hover:bg-teal-700
                    text-white
                    px-5
                    py-2.5
                    rounded-xl
                    font-medium
                    transition
                    "
                >
                    Edit Profile
                </button>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Personal Information */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-5">
              Personal Information
            </h2>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <User className="text-teal-600" />
                <div>
                  <p className="text-sm text-slate-500">
                    Full Name
                  </p>
                  <p className="font-medium">
                    {user?.name}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-teal-600" />
                <div>
                  <p className="text-sm text-slate-500">
                    Email
                  </p>
                  <p className="font-medium">
                    {user?.email}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-teal-600" />
                <div>
                  <p className="text-sm text-slate-500">
                    Phone Number
                  </p>
                  <p className="font-medium">
                    {user?.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

            <h2 className="text-xl font-semibold text-slate-800 mb-5">
              Additional Details
            </h2>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <User className="text-teal-600" />
                <div>
                  <p className="text-sm text-slate-500">
                    Gender
                  </p>
                  <p className="font-medium">
                    {user?.gender}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Calendar className="text-teal-600" />
                <div>
                  <p className="text-sm text-slate-500">
                    Date of Birth
                  </p>
                  <p className="font-medium">
                    {user?.dob}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-teal-600" />
                <div>
                  <p className="text-sm text-slate-500">
                    Address
                  </p>
                  <p className="font-medium">
                    {user?.address}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Account Information */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mt-6">

          <h2 className="text-xl font-semibold text-slate-800 mb-5">
            Account Information
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm text-slate-500">
                Password
              </p>

              <p className="font-semibold text-slate-800 mt-1">
                {user?.password}
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm text-slate-500">
                Role
              </p>

              <p className="font-semibold text-slate-800 mt-1">
                {user?.role}
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm text-slate-500">
                Joined On
              </p>

              <p className="font-semibold text-slate-800 mt-1">
                {user?.createdAt}
              </p>
            </div>

          </div>

        </div>

      </div>

      <CustomDrawer
        isOpen={openDrawer}
        onClose={() => setOpenDrawer(false)}
        title="Edit Profile">
          <EditProfile onClose={() => setOpenDrawer(false)}/>
      </CustomDrawer>
    </div>
  );
};

export default ProfileOfAdmin;