import { combineReducers } from 'redux';
import TabReducer from './TabReducer';
import DisplayProfileReducer from './DisplayProfileReducer';
export default combineReducers({
    tab: TabReducer,
    display_profile: DisplayProfileReducer,
});