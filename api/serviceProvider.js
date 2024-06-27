import apiClient from "./apiService";

export const getServiceProviders = async () => {
  try {
    const response = await apiClient.get("v1/serviceProviders");
    return response.data.items;
  } catch (error) {
    console.error("Error fetching service providers", error);
    throw error;
  }
};

export const getServiceProviderType = async () => {
  try {
    const response = await apiClient.get("v1/serviceProviderType");
    return response.data.items;
  } catch (error) {
    console.error("Error fetching service providers", error);
    throw error;
  }
};

export const getServiceProviderSubType = async () => {
  try {
    const response = await apiClient.get("v1/serviceProviderSubType");
    return response.data.items;
  } catch (error) {
    console.error("Error fetching service providers", error);
    throw error;
  }
};

export const addServiceProvider = async (serviceProvider) => {
  try {
    const response = await apiClient.post(
      "v1/serviceProviders",
      serviceProvider
    );
    return response.data;
  } catch (error) {
    console.error("Error adding service provider", error);
    throw error;
  }
};
