import apiClient from "./ApiServices/commonApiService";
export const getCountries = async () => {
  try {
    const response = await apiClient.get("v1/countries");
    return response.data.items;
  } catch (error) {
    console.error("Error fetching countries", error);
    throw error;
  }
};

export const getStates = async (countryId) => {
  try {
    const response = await apiClient.get("v1/states", countryId);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching states", error);
    throw error;
  }
};
