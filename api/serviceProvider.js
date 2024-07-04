import { fetcher, fetcherPost } from "../utils/axiosCommunity";

export const getServiceProviders = async () => {
  try {
    const response = await fetcher("v1/serviceProviders");
    console.log("Service Providers Response:", response);
    return response.items;
  } catch (error) {
    console.error("Service Providers Error:", error);
    throw error;
  }
};

export const getServiceProviderType = async () => {
  try {
    const response = await fetcher("v1/serviceProviderType");
    console.log("Service Provider Type Response:", response);
    return response.items;
  } catch (error) {
    console.error("Service Provider Type Error:", error);
    throw error;
  }
};

export const getServiceProviderSubType = async () => {
  try {
    const response = await fetcher("v1/serviceProviderSubType");
    console.log("Service Provider SubType Response:", response);
    return response.items;
  } catch (error) {
    console.error("Service Provider SubType Error:", error);
    throw error;
  }
};

export const addServiceProvider = async (serviceProvider) => {
  try {
    const response = await fetcherPost("v1/serviceProviders", {
      data: serviceProvider,
    });
    console.log("Add Service Provider Response:", response);
    return response;
  } catch (error) {
    console.error("Add Service Provider Error:", error);
    throw error;
  }
};
