import apiClient from "./apiService";

export const getServiceProviders = async () => {
  try {
    const response = await apiClient.get('v1/serviceProviders');
    return response.data.items;
  } catch (error) {
    console.error('Error fetching service providers', error);
    throw error;
  }
};