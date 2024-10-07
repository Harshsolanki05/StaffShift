import axios from 'axios';

const API_BASE_URL = '';

export const getShifts = () => {
  return axios.get(`${API_BASE_URL}/shifts`);
};
