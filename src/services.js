import axios from 'axios';

export const BASE_URL = 'https://localhost:7199';
export const ENDPOINTS = {
    NUMBER: 'number',
    NAME: 'name',
};

export const createExcelAPIEndpoint = (endpoint) => {
    const url = `${BASE_URL}/${endpoint}`;

    return {
        fetch: (param) => axios.get(`${url}/${param}`),
    };
};

export const excelNumberAPI = createExcelAPIEndpoint(ENDPOINTS.NUMBER);
export const excelNameAPI = createExcelAPIEndpoint(ENDPOINTS.NAME);
