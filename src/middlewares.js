import { createExcelAPIEndpoint, ENDPOINTS } from "./services";
import {
    CONVERT_TITLE_TO_NUMBER_SUCCESS,
    CONVERT_NUMBER_TO_TITLE_SUCCESS,
    CONVERT_TITLE_TO_NUMBER_FAILURE,
    CONVERT_NUMBER_TO_TITLE_FAILURE,
    CONVERT_TITLE_TO_NUMBER,
    CONVERT_NUMBER_TO_TITLE
} from './actions'

export const convertTitleToNumber = ({
    dispatch
}) => next => async action => {
    next(action);
    if (action.type === CONVERT_TITLE_TO_NUMBER) {
        try {
            const { title } = action.data;
            const result = await createExcelAPIEndpoint(ENDPOINTS.TITLE_TO_NUMBER).fetch(title);
            dispatch({ type: CONVERT_TITLE_TO_NUMBER_SUCCESS, payload: result.data });
        } catch (error) {
            dispatch({ type: CONVERT_TITLE_TO_NUMBER_FAILURE, payload: error.message });
        }
    }
}

export const convertNumberToTitle = ({
    dispatch
}) => next => async action => {
    next(action);
    if (action.type === CONVERT_NUMBER_TO_TITLE) {
        try {
            const { number } = action.data;
            const result = await createExcelAPIEndpoint(ENDPOINTS.NUMBER_TO_TITLE).fetch(number);
            dispatch({ type: CONVERT_NUMBER_TO_TITLE_SUCCESS, payload: result.data });
        } catch (error) {
            dispatch({ type: CONVERT_NUMBER_TO_TITLE_FAILURE, payload: error.message });
        }
    }
}

export const excelMiddleware = [
    convertTitleToNumber,
    convertNumberToTitle
]