export interface IReqHouses {
  req_house_id: string;
  avatar: string;
  email: string;
  name: string;
  gender: string;
  profession: string;
  phone: string;
  houseType: string;
  prferrableRent: number;
  division: string;
  district: string;
  upazilla: string;
  description: string;
  fromDate: string;
}
export interface IReqHousesComments {
  req_house_id: string;
  requester_email: string;
  requester_name: string;
  comments: string;
}
