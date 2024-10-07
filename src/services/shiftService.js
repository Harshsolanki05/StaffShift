import { getShifts as fetchShifts } from '../api/apiService';

export const getShifts = async () => {
    try {
        const response = await fetchShifts();
        return response.data;
    } catch (error) {
        console.error('Error fetching shifts:', error);
    }
};
