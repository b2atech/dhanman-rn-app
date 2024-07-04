import apiClient from "../utils/axiosCommunity";

export const getBuildingNames = async (apartmentId) => {
  try {
    const url = `v1/buildingNames/${apartmentId}`;

    const response = await apiClient.get(url);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching events", error);
    throw error;
  }
};
