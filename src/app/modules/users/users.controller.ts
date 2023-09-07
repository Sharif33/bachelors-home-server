import { Request, Response } from "express";
import { IUser } from "./users.interface";
import { createUserInDB, getAllUsersFromDB } from "./users.service";

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsersFromDB();
    res.send(users);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUserData: IUser = req.body;
    const createdUser = await createUserInDB(newUserData);
    res.status(201).json(createdUser);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
