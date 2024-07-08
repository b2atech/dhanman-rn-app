import { fetcher } from "../utils/axiosCommunity";

export const endpoints = {
  list: "/",
  get: "v1/events",
};
export const getEvents = async (companyId, bookingFacilityId) => {
  try {
    const url = `${endpoints.state}${endpoints.list}${companyId}${endpoints.list}${bookingFacilityId}`;

    const response = await fetcher(url);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching events", error);
    throw error;
  }
};
