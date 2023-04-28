import {
    CONVERT_TITLE_TO_NUMBER_SUCCESS,
    CONVERT_NUMBER_TO_TITLE_SUCCESS,
    CONVERT_TITLE_TO_NUMBER_FAILURE,
    CONVERT_NUMBER_TO_TITLE_FAILURE,
} from './actions'

const initialState = {
    columnTitle: '',
    columnNumber: '',
    error: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CONVERT_TITLE_TO_NUMBER_SUCCESS:
            return { ...state, columnNumber: action.payload, error: '' };
        case CONVERT_TITLE_TO_NUMBER_FAILURE:
            return { ...state, error: action.payload };
        case CONVERT_NUMBER_TO_TITLE_SUCCESS:
            return { ...state, columnTitle: action.payload, error: '' };
        case CONVERT_NUMBER_TO_TITLE_FAILURE:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default reducer;
