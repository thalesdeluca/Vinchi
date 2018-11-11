import { SELECT_TAB } from './types';

export const selectTab = (tabId) => {
    return {
        type: SELECT_TAB,
        payload: tabId
    };
};

