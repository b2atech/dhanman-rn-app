import apiClient from "./ApiServices/apiService";

export const getVisitors = async () => {
  try {
    const response = await apiClient.get('v1/visitors');
    return response.data.items;
  } catch (error) {
    console.error('Error fetching visitors', error);
    throw error;
  }
};

export const addVisitor = async (visitor) => {
  try {
    const response = await apiClient.post('v1/visitor', visitor);
    return response.data;
  } catch (error) {
    console.error('Error adding visitor', error);
    throw error;
  }
};