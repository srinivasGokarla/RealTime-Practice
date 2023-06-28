import { Reducer } from "redux";
import { ActionTypes } from "./ActionTypes";
import { AppAction } from "./actions";

 export interface AppState {
    count : number;
}

const initialState : AppState = {
    count: 0,
}


const reducer : Reducer<AppState, AppAction> = (state= initialState, action) => {
    switch(action.type){
        case ActionTypes.Incriment : 
        return {
            ...state,
            count: state.count +1,
        }
case ActionTypes.Decriment : 
return {
    ...state,
    count : state.count - 1,
}
default:
    return state;
    }
}
export default reducer;