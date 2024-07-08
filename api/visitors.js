import { fetcher, fetcherPost } from "../utils/axiosCommunity";

export const endpoints = {
  get: "v1/visitors",
  insert: "v1/visitor",
};
export const getVisitors = async () => {
  try {
    const response = await fetcher(endpoints.get);
    return response.items;
  } catch (error) {
    console.error("Error fetching visitors", error);
    throw error;
  }
};

export const addVisitor = async (visitor) => {
  try {
    const response = await fetcherPost([endpoints.insert, { data: visitor }]);
    return response.data;
  } catch (error) {
    console.error("Error adding visitor", error);
    throw error;
  }
};
