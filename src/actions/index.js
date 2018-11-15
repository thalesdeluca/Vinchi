import { SELECT_TAB, DISPLAY_NAME } from './types';

export const selectTab = (tabId) => {
    return {
        type: SELECT_TAB,
        payload: tabId
    };
};

export const changeName = (name) => {
    return {
        type: DISPLAY_NAME,
        payload: name
    };
}

