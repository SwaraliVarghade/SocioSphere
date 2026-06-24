import adminphoto from "../assets/swaraliphoto.jpg"
const users = [
  {
    id: 1,
    role: "admin",
    name: "Swarali Varghade",
    email: "swaralivarghade05@gmail.com",
    password: "123456",
    phone: "7666142301",
    gender: "Female",
    dob: "2005-03-18",
    address: "Karvenagar, Pune",
    profileImage: adminphoto,
    createdAt: "2026-06-22",
  },

  {
    id: 2,
    role: "resident",
    name: "Swaraj Varghade",
    email: "swaraj@gmail.com",
    password: "123456",
    phone: "9988776655",
    gender: "Male",
    dob: "1995-02-14",
    address: "Flat A-101",
    wing: "A",
    flatNo: "101",
    occupation: "Software Engineer",
    familyMembers: 4,
    profileImage:
      "https://i.pravatar.cc/150?img=2",

    createdAt: "2026-06-22",
  },
];

export default users;