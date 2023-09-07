import { IUser } from "./users.interface";
import { Users } from "./users.model";

export const getAllUsersFromDB = async (): Promise<IUser[]> => {
  return Users.find();
};

export const createUserInDB = async (userData: IUser): Promise<IUser> => {
  return Users.create(userData);
};
