import { DISPLAY_NAME } from '../actions/types';

export default (state, action) => {
  switch(action.type){
    case DISPLAY_NAME:
      return action.payload;
    default:
      return null;
  }
}