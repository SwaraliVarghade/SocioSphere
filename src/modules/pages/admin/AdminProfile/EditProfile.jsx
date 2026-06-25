import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../redux/LoginPage/loginSlice";
import { updateAdminThunk } from "../../../redux/UserProfile/UserThunk";

const EditProfile = ({ onClose }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ 
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    gender: user?.gender || "",
    dob: user?.dob || "",
    address: user?.address || "",
    profileImage: user?.profileImage || "",
    password: user?.password || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateAdminThunk({
      ...user, ...formData,
    }));
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <img
          src={formData.profileImage}
          alt="profile"
          className="
            w-24 h-24
            rounded-full
            object-cover
            border-4 border-teal-100
          "
        />

        <input
          type="file"
          className="mt-3 text-sm"
        />
      </div>

      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Full Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="
            w-full
            border border-slate-300
            rounded-xl
            px-4 py-2.5
            focus:outline-none
            focus:ring-2
            focus:ring-teal-500
          "
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Email
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="
            w-full
            border border-slate-300
            rounded-xl
            px-4 py-2.5
            focus:outline-none
            focus:ring-2
            focus:ring-teal-500
          "
        />
      </div>

      {/* Phone */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Phone Number
          </label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="
              w-full
              border border-slate-300
              rounded-xl
              px-4 py-2.5
              focus:outline-none
              focus:ring-2
              focus:ring-teal-500
            "
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Password
          </label>

          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="
              w-full
              border border-slate-300
              rounded-xl
              px-4 py-2.5
              focus:outline-none
              focus:ring-2
              focus:ring-teal-500
            "
          />
        </div>
      </div>

      {/* Gender + DOB */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Gender
          </label>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="
              w-full
              border border-slate-300
              rounded-xl
              px-4 py-2.5
              focus:outline-none
              focus:ring-2
              focus:ring-teal-500
            "
          >
            <option value="">
              Select Gender
            </option>

            <option value="Male">
              Male
            </option>

            <option value="Female">
              Female
            </option>

            <option value="Other">
              Other
            </option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Date of Birth
          </label>

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="
              w-full
              border border-slate-300
              rounded-xl
              px-4 py-2.5
              focus:outline-none
              focus:ring-2
              focus:ring-teal-500
            "
          />
        </div>
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Address
        </label>

        <textarea
          rows="3"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="
            w-full
            border border-slate-300
            rounded-xl
            px-4 py-2.5
            resize-none
            focus:outline-none
            focus:ring-2
            focus:ring-teal-500
          "
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onClose}
          className="
            px-5 py-2.5
            border border-slate-300
            rounded-xl
            hover:bg-slate-100
          "
        >
          Cancel
        </button>

        <button
          type="submit"
          className="
            px-5 py-2.5
            bg-teal-600
            hover:bg-teal-700
            text-white
            rounded-xl
          "
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default EditProfile;