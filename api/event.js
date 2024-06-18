import apiClient from "./apiService";
export const getEvents = async (companyId, bookingFacilityId) => {
    try {
      const url = `v1/events/${companyId}/${bookingFacilityId}`;
  
      const response = await apiClient.get(url);
      return response.data.items;
    } catch (error) {
      console.error('Error fetching events', error);
      throw error;
    }
  };