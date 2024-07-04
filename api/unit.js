import apiClient from "../utils/axiosCommunity";

export const getUnitNames = async (apartmentId, buildingId, floorId) => {
  try {
    const url = `v1/unitNames/${apartmentId}/${buildingId}/${floorId}`;

    const response = await apiClient.get(url);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching events", error);
    throw error;
  }
};
