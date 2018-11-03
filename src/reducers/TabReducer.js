export default (state, action) =>{
    console.log(action);
    switch(action.type){
        case "select_tab":
            return action.payload;
        default:
            return null;
    }
};