import users from "../../../data/users";

export const loginUserService = async (
  credentials
) => {
  await new Promise((resolve) =>
    setTimeout(resolve, 1000)
  );

  const user = users.find(
    (u) =>
      u.email === credentials.email &&
      u.password === credentials.password &&
      u.role === credentials.role
  );

  if (!user) {
    throw new Error("Invalid Credentials");
  }

  return user;
};