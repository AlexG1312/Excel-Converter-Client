import { createExcelAPIEndpoint, ENDPOINTS } from "./services";

export const convertTitleToNumber = (title) => async (dispatch) => {
    try {
        const res = await createExcelAPIEndpoint(ENDPOINTS.NUMBER).fetch(title);
        dispatch({ type: 'CONVERT_TITLE_TO_NUMBER_SUCCESS', payload: res.data });
    } catch (error) {
        dispatch({ type: 'CONVERT_TITLE_TO_NUMBER_FAILURE', payload: error.message });
    }
};

export const convertNumberToTitle = (number) => async (dispatch) => {
    try {
        const res = await createExcelAPIEndpoint(ENDPOINTS.NAME).fetch(number);
        dispatch({ type: 'CONVERT_NUMBER_TO_TITLE_SUCCESS', payload: res.data });
    } catch (error) {
        dispatch({ type: 'CONVERT_NUMBER_TO_TITLE_FAILURE', payload: error.message });
    }
};