import { Request, Response } from "express";
import { IHouses } from "./houses.interface1";
import {
  createHouseInDB,
  deleteHouseFromDB,
  getAllHousesFromDB,
  getHouseByIdFromDB,
  updateHouseFieldsInDB,
  updateHouseInDB,
} from "./houses.service3";

export const getAllHouse = async (req: Request, res: Response) => {
  try {
    const filters: Record<string, any> = req.query;
    const houses = await getAllHousesFromDB(filters);
    res.send(houses);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getHouseById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const house = await getHouseByIdFromDB(id);

    if (!house) {
      return res.status(404).json({ message: "House not found" });
    }

    res.status(200).json(house);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const createHouse = async (req: Request, res: Response) => {
  try {
    const newHouseData: IHouses = req.body;
    const createdHouse = await createHouseInDB(newHouseData);
    res.status(201).json(createdHouse);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateHouse = async (req: Request, res: Response) => {
  try {
    const houseId: string = req.params.id;
    const updatedHouseData: IHouses = req.body;
    const updatedHouse = await updateHouseInDB(houseId, updatedHouseData);

    if (!updatedHouse) {
      return res.status(404).json({ message: "House not found" });
    }

    res.status(200).json(updatedHouse);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateHouseFields = async (req: Request, res: Response) => {
  try {
    const houseId: string = req.params.id;
    const updatedFields: Partial<IHouses> = req.body;
    const updatedHouse = await updateHouseFieldsInDB(houseId, updatedFields);

    if (!updatedHouse) {
      return res.status(404).json({ message: "House not found" });
    }

    res.status(200).json(updatedHouse);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteHouse = async (req: Request, res: Response) => {
  try {
    const houseId: string = req.params.id;
    const deletedHouse = await deleteHouseFromDB(houseId);

    if (!deletedHouse) {
      return res.status(404).json({ message: "House not found" });
    }

    res.status(200).json({ message: "House deleted successfully" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
