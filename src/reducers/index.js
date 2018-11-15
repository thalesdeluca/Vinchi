import { combineReducers } from 'redux';
import TabReducer from './TabReducer';
import DisplayNameReducer from './DisplayNameReducer';
export default combineReducers({
    tab: TabReducer,
    display_name: DisplayNameReducer,
});