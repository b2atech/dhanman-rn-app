import { fetcher } from "../utils/axiosCommon";
export const getCountries = async () => {
  try {
    const response = await fetcher("v1/countries");
    return response.items;
  } catch (error) {
    console.error("Error fetching countries", error);
    throw error;
  }
};

export const getStates = async (countryId) => {
  try {
    const response = await fetcher(`v1/states/${countryId}`);
    return response.items;
  } catch (error) {
    console.error("Error fetching states", error);
    throw error;
  }
};
