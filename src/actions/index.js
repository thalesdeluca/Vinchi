import { SELECT_TAB, DISPLAY_PROFILE } from './types';

export const selectTab = (tabId) => {
    return {
        type: SELECT_TAB,
        payload: tabId
    };
};

export const changeProfile = (profile) => {
    return {
        type: DISPLAY_PROFILE,
        payload: profile
    };
}

