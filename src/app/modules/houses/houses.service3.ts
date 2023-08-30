import { IHouses } from "./houses.interface1";
import { Houses } from "./houses.model2";

export const getAllHousesFromDB = async (): Promise<IHouses[]> => {
  return Houses.find().sort({ createdAt: -1 });
};

export const getHouseByIdFromDB = async (id: string): Promise<IHouses[]> => {
  return Houses.find({ _id: id });
};

export const createHouseInDB = async (houseData: IHouses): Promise<IHouses> => {
  return Houses.create(houseData);
};

export const updateHouseInDB = async (
  houseId: string,
  houseData: IHouses
): Promise<IHouses | null> => {
  return Houses.findByIdAndUpdate(houseId, houseData, { new: true });
};

export const updateHouseFieldsInDB = async (
  houseId: string,
  updatedFields: Partial<IHouses>
): Promise<IHouses | null> => {
  return Houses.findByIdAndUpdate(houseId, updatedFields, { new: true });
};

export const deleteHouseFromDB = async (
  houseId: string
): Promise<IHouses | null> => {
  return Houses.findByIdAndDelete(houseId);
};
