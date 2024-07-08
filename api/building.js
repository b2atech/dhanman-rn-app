import { fetcher } from "../utils/axiosCommunity";

export const getBuildingNames = async (apartmentId) => {
  try {
    const url = `v1/buildingNames/${apartmentId}`;

    const response = await fetcher(url);
    return response.items;
  } catch (error) {
    console.error("Error fetching buildings", error);
    throw error;
  }
};
