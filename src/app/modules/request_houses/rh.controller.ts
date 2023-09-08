import { Request, Response } from "express";
import { IReqHouses } from "./rh.interface";
import { ReqHouses } from "./rh.model";
import {
  createReqHouseInDB,
  deleteReqHouseFromDB,
  getAllUReqHousesFromDB,
  getReqHouseByIdFromDB,
  updateReqHouseFieldsInDB,
  updateReqHouseInDB,
} from "./rh.service";

export const getAllReqHouse = async (req: Request, res: Response) => {
  try {
    const houses = await getAllUReqHousesFromDB();
    res.send(houses);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getReqHouseById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const house = await getReqHouseByIdFromDB(id);

    if (!house) {
      return res.status(404).json({ message: "House not found" });
    }

    res.status(200).json(house);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const createReqHouse = async (req: Request, res: Response) => {
  try {
    // Find the latest house in the database
    const latestHouse = await ReqHouses.findOne(
      {},
      {},
      { sort: { req_house_id: -1 } }
    );

    let newHouseData: IReqHouses;

    if (latestHouse) {
      // If there is a latest house, increment its house_id
      const latestHouseIdParts = latestHouse.req_house_id.split("-");
      const newHouseIdNumber = parseInt(latestHouseIdParts[2]) + 1;
      const newHouseId = `bh-reqh-${newHouseIdNumber}`;
      newHouseData = { ...req.body, req_house_id: newHouseId };
    } else {
      // If there are no houses in the database, start with bh-sh-1
      newHouseData = { ...req.body, req_house_id: "bh-reqh-1" };
    }

    const createdReqHouse = await createReqHouseInDB(newHouseData);
    res.status(201).json(createdReqHouse);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateReqHouse = async (req: Request, res: Response) => {
  try {
    const houseId: string = req.params.id;
    const updatedHouseData: IReqHouses = req.body;
    const updatedHouse = await updateReqHouseInDB(houseId, updatedHouseData);

    if (!updatedHouse) {
      return res.status(404).json({ message: "House not found" });
    }

    res.status(200).json(updatedHouse);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateReqHouseFields = async (req: Request, res: Response) => {
  try {
    const houseId: string = req.params.id;
    const updatedFields: Partial<IReqHouses> = req.body;
    const updatedHouse = await updateReqHouseFieldsInDB(houseId, updatedFields);

    if (!updatedHouse) {
      return res.status(404).json({ message: "House not found" });
    }

    res.status(200).json(updatedHouse);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteReqHouse = async (req: Request, res: Response) => {
  try {
    const houseId: string = req.params.id;
    const deletedHouse = await deleteReqHouseFromDB(houseId);

    if (!deletedHouse) {
      return res.status(404).json({ message: "House not found" });
    }

    res.status(200).json({ message: "House deleted successfully" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
