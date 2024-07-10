import { fetcher, fetcherPost } from "../utils/axiosCommunity";

export const endpoints = {
  key: "v1/serviceProviders",
  type: "v1/serviceProviderType",
  subType: "v1/serviceProviderSubType",
};

export const getServiceProviders = async () => {
  try {
    const response = await fetcher(endpoints.key);
    return response.items;
  } catch (error) {
    console.error("Service Providers Error:", error);
    throw error;
  }
};

export const getServiceProviderType = async () => {
  try {
    const response = await fetcher(endpoints.type);
    return response.items;
  } catch (error) {
    console.error("Service Provider Type Error:", error);
    throw error;
  }
};

export const getServiceProviderSubType = async () => {
  try {
    const response = await fetcher(endpoints.subType);
    return response.items;
  } catch (error) {
    console.error("Service Provider SubType Error:", error);
    throw error;
  }
};

export const addServiceProvider = async (serviceProvider) => {
  console.log("serviceProvider", serviceProvider);
  try {
    const response = await fetcherPost([
      endpoints.key,
      { data: serviceProvider },
    ]);
    console.log("response", response);
    return response;
  } catch (error) {
    console.error("Error adding Service Provider:", error);
    throw error;
  }
};
