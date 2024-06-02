import api from './api';
import dotenv from 'dotenv';
dotenv.config();
const url = process.env.API_URL

export const getServices = async () => {
    const response = await api.get(`${url}/services`);
    return response.data;
};

export const getService = async (id) => {
    const response = await api.get(`${url}/services/${id}`);
    return response.data;
};

export const createService = async (service) => {
    const response = await api.post(`${url}/services`, service);
    return response.data;
};

export const updateService = async (id, service) => {
    const response = await api.put(`${url}/services/${id}`, service);
    return response.data;
};

export const deleteService = async (id) => {
    await api.delete(`${url}/services/${id}`);
};