import users from "../../../data/users";

export const updateAdminProfile = async (
  updatedData
) => {
  await new Promise((resolve) =>
    setTimeout(resolve, 1000)
  );

  const updatedUser = {
    ...updatedData,
  };

  return updatedUser;
};