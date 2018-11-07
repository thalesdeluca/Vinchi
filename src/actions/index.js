import { EMAIL_CHANGED, SELECT_TAB,PASSWORD_CHANGED } from './types';

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
};

export const passwordChanged = (text) =>{
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
};