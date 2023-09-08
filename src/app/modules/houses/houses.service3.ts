import { IHouses } from "./houses.interface1";
import { Houses } from "./houses.model2";

export const getAllHousesFromDB = async (
  filters: Record<string, any>
): Promise<IHouses[]> => {
  const query = Houses.find();

  for (const key in filters) {
    if (filters.hasOwnProperty(key)) {
      query.where(key).equals(filters[key]);
    }
  }

  return query.sort({ createdAt: -1 });
};

export const getHouseByIdFromDB = async (id: string): Promise<IHouses[]> => {
  return Houses.find({ house_id: id });
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
