import axios from 'axios';
import config from './config';

export const BASE_URL = config.apiServer;
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
