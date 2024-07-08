import { fetcher } from "../utils/axiosCommon";

export const endpoints = {
  list: "/",
  country: "v1/countries",
  state: "v1/states",
};
export const getCountries = async () => {
  try {
    const response = await fetcher(endpoints.country);
    return response.items;
  } catch (error) {
    console.error("Error fetching countries", error);
    throw error;
  }
};

export const getStates = async (countryId) => {
  try {
    const response = await fetcher(
      `${endpoints.state}${endpoints.list}${countryId}`
    );
    return response.items;
  } catch (error) {
    console.error("Error fetching states", error);
    throw error;
  }
};
