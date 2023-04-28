export const CONVERT_TITLE_TO_NUMBER = 'CONVERT_TITLE_TO_NUMBER';
export const CONVERT_TITLE_TO_NUMBER_SUCCESS = 'CONVERT_TITLE_TO_NUMBER_SUCCESS';
export const CONVERT_TITLE_TO_NUMBER_FAILURE = 'CONVERT_TITLE_TO_NUMBER_FAILURE';
export const CONVERT_NUMBER_TO_TITLE = 'CONVERT_NUMBER_TO_TITLE';
export const CONVERT_NUMBER_TO_TITLE_SUCCESS = 'CONVERT_NUMBER_TO_TITLE_SUCCESS';
export const CONVERT_NUMBER_TO_TITLE_FAILURE = 'CONVERT_NUMBER_TO_TITLE_FAILURE';

export function convertTitleToNumber(title) {
    return {
        type: CONVERT_TITLE_TO_NUMBER,
        data: {
            title,
        },
    };
}

export function convertNumberToTitle(number) {
    return {
        type: CONVERT_NUMBER_TO_TITLE,
        data: {
            number,
        },
    };
}