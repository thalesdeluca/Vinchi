import { EMAIL_CHANGED, SELECT_TAB } from './types';

export const selectTab = (tabId) => {
    return {
        type: SELECT_TAB,
        payload: tabId
    };
};

export const emailChanged = (text) =>{
    return{
        type: EMAIL_CHANGED,
        payload: text
    };
}