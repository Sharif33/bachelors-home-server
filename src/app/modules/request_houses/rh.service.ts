import { IReqHouses } from "./rh.interface";
import { ReqHouses } from "./rh.model";

export const getAllUReqHousesFromDB = async (): Promise<IReqHouses[]> => {
  return ReqHouses.find().sort({ createdAt: -1 });
};

export const getReqHouseByIdFromDB = async (
  id: string
): Promise<IReqHouses[]> => {
  return ReqHouses.find({ req_house_id: id });
};

export const createReqHouseInDB = async (
  houseData: IReqHouses
): Promise<IReqHouses> => {
  return ReqHouses.create(houseData);
};

export const updateReqHouseInDB = async (
  houseId: string,
  houseData: IReqHouses
): Promise<IReqHouses | null> => {
  return ReqHouses.findByIdAndUpdate(houseId, houseData, { new: true });
};

export const updateReqHouseFieldsInDB = async (
  houseId: string,
  updatedFields: Partial<IReqHouses>
): Promise<IReqHouses | null> => {
  return ReqHouses.findByIdAndUpdate(houseId, updatedFields, { new: true });
};

export const deleteReqHouseFromDB = async (
  houseId: string
): Promise<IReqHouses | null> => {
  return ReqHouses.findByIdAndDelete(houseId);
};
