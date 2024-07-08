import { fetcher } from "../utils/axiosCommunity";

export const getUnitNames = async (apartmentId, buildingId, floorId) => {
  try {
    const url = `v1/unitNames/${apartmentId}/${buildingId}/${floorId}`;

    const response = await fetcher(url);
    return response.items;
  } catch (error) {
    console.error("Error fetching events", error);
    throw error;
  }
};
