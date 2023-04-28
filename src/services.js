import axios from 'axios';
import config from './config';

export const BASE_URL = config.apiServer;
export const ENDPOINTS = {
    TITLE_TO_NUMBER: 'number',
    NUMBER_TO_TITLE: 'name',
};

export const createExcelAPIEndpoint = (endpoint) => {
    const url = `${BASE_URL}/${endpoint}`;

    return {
        fetch: (param) => axios.get(`${url}/${param}`),
    };
};

export const excelNumberAPI = createExcelAPIEndpoint(ENDPOINTS.TITLE_TO_NUMBER);
export const excelNameAPI = createExcelAPIEndpoint(ENDPOINTS.NUMBER_TO_TITLE);
