import { ActionTypes } from "./ActionTypes";
import { Action } from "redux";


interface IncrimentAction extends Action {
    type: typeof ActionTypes.Incriment;
}

interface DecrimentAction extends Action {
    type: typeof ActionTypes.Decriment;
}

export const increment = (): IncrimentAction => ({
    type: ActionTypes.Incriment,
})

export const decriment = (): DecrimentAction => ({
    type: ActionTypes.Decriment,
});

export type AppAction = IncrimentAction  | DecrimentAction;