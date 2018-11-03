export const selectTab = (tabId) => {
    return {
        type: 'select_tab',
        payload: tabId
    };
};