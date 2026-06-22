import {
  Users,
  AlertTriangle,
  Building,
  IndianRupee,
} from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className="p-6 bg-slate-50">

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Users className="text-blue-600" />
            </div>

            <div>
              <p className="text-slate-500 text-sm">
                Total Residents
              </p>

              <h2 className="text-3xl font-bold">
                480
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-red-100 p-3 rounded-xl">
              <AlertTriangle className="text-red-600" />
            </div>

            <div>
              <p className="text-slate-500 text-sm">
                Active Complaints
              </p>

              <h2 className="text-3xl font-bold text-red-500">
                12
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <Building className="text-green-600" />
            </div>

            <div>
              <p className="text-slate-500 text-sm">
                Occupied Flats
              </p>

              <h2 className="text-3xl font-bold">
                420 / 450
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-yellow-100 p-3 rounded-xl">
              <IndianRupee className="text-yellow-600" />
            </div>

            <div>
              <p className="text-slate-500 text-sm">
                Maintenance Collection
              </p>

              <h2 className="text-3xl font-bold">
                92%
              </h2>
            </div>
          </div>
        </div>

      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">

        {/* Recent Residents */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <h3 className="text-lg font-semibold mb-4">
            Recent Resident Activity
          </h3>

          <div className="space-y-4">

            <div className="flex justify-between">
              <div>
                <p className="font-medium">
                  Rahul Sharma
                </p>
                <p className="text-sm text-slate-500">
                  Flat A-101
                </p>
              </div>

              <span className="text-sm text-slate-500">
                Today
              </span>
            </div>

            <div className="flex justify-between">
              <div>
                <p className="font-medium">
                  Priya Patil
                </p>
                <p className="text-sm text-slate-500">
                  Flat B-203
                </p>
              </div>

              <span className="text-sm text-slate-500">
                Yesterday
              </span>
            </div>

          </div>
        </div>

        {/* Notices */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <h3 className="text-lg font-semibold mb-4">
            Recent Notices
          </h3>

          <div className="space-y-4">

            <div>
              <p className="font-medium">
                Annual General Meeting
              </p>

              <p className="text-sm text-slate-500">
                June 25, 2026
              </p>
            </div>

            <div>
              <p className="font-medium">
                Water Supply Maintenance
              </p>

              <p className="text-sm text-slate-500">
                June 28, 2026
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="bg-white rounded-2xl shadow-sm  p-5">

        <h3 className="text-lg font-semibold mb-4">
          Latest Complaints
        </h3>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr>
                <th className="text-left py-3">
                  Complaint
                </th>

                <th className="text-left py-3">
                  Flat
                </th>

                <th className="text-left py-3">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="py-3">
                  Water Leakage
                </td>

                <td>A-101</td>

                <td>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                    Urgent
                  </span>
                </td>
              </tr>

              <tr>
                <td className="py-3">
                  Lift Issue
                </td>

                <td>B-203</td>

                <td>
                  <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">
                    Pending
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;