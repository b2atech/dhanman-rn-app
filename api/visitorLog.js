import { fetcher, fetcherPost } from "../utils/axiosCommunity";

export const endpoints = {
  list: "/",
  get: "v1/visitorLogs",
  insert: "v1/visitorLog",
};
export const getVisitorsLog = async (apartmentId, visitorId, visitorTypeId) => {
  try {
    const url = `${endpoints.get}${endpoints.list}${apartmentId}/${visitorId}/${visitorTypeId}`;
    const response = await fetcher(url);
    return response.items;
  } catch (error) {
    console.error("Error fetching visitors Log", error);
    throw error;
  }
};

export const addVisitorLog = async (visitorLog) => {
  try {
    const response = await fetcherPost([
      endpoints.insert,
      { data: visitorLog },
    ]);
    return response.data;
  } catch (error) {
    console.error("Error adding visitor Log", error);
    throw error;
  }
};
