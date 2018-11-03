import { combineReducers } from 'redux';
import TabReducer from './TabReducer';
export default combineReducers({
    tab: TabReducer,
});