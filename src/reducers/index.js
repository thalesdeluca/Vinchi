import { combineReducers } from 'redux';
import TabReducer from './TabReducer';
import AuthReducer from './AuthReducer';
export default combineReducers({
    tab: TabReducer,
    auth: AuthReducer,
});