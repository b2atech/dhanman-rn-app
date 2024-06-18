import apiClient from "./apiService";

export const getVisitors = async () => {
  try {
    const response = await apiClient.get('v1/visitors');
    return response.data.items;
  } catch (error) {
    console.error('Error fetching visitors', error);
    throw error;
  }
};