import { SELECT_TAB } from '../actions/types';

export default (state, action) =>{
    switch(action.type){
        case SELECT_TAB:
            return action.payload;
        default:
            return null;
    }
};