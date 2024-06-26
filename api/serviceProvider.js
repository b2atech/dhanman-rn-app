import apiClient from "./ApiServices/apiService";


export const getServiceProviders = async () => {
  try {
    const response = await apiClient.get('v1/serviceProviders');
    return response.data.items;
  } catch (error) {
    console.error('Error fetching service providers', error);
    throw error;
  }
};

export const getServiceProviderType = async () => {
  try {
    const response = await apiClient.get('v1/serviceProviderType');
    return response.data.items;
  } catch (error) {
    console.error('Error fetching service providers', error);
    throw error;
  }
};

export const getServiceProviderSubType = async () => {
  try {
    const response = await apiClient.get('v1/serviceProviderSubType');
    return response.data.items;
  } catch (error) {
    console.error('Error fetching service providers', error);
    throw error;
  }
};