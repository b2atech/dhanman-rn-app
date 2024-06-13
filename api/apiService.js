// apiService.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api-dhanman-myhome-nonprod.azurewebsites.net/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getServiceProviders = async () => {
  try {
    const response = await apiClient.get('v1/serviceProviders');
    return response.data.items;
  } catch (error) {
    console.error('Error fetching service providers', error);
    throw error;
  }
};

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

