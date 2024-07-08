import { fetcher } from "../utils/axiosCommunity";

export const getFloorName = async (apartmentId, buildingId) => {
  try {
    const url = `v1/floorNames/12fb50f0-9998-456f-8aee-bb83ab2fbbdb/1`;
    const response = await fetcher(url);
    return response.items;
  } catch (error) {
    console.error("Error fetching events", error);
    throw error;
  }
};
