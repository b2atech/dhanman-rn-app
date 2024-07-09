import { fetcher } from "../utils/axiosCommunity";

export const getFloorName = async (apartmentId, buildingId) => {
  try {
    const url = `v1/floorNames/${apartmentId}/${buildingId}`;
    const response = await fetcher(url);
    return response.items;
  } catch (error) {
    console.error("Error fetching events", error);
    throw error;
  }
};
