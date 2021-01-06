
import {GET_ANSWERS} from '../actions/types';
const initialState={    
        answers:[],
        current: 1
};

const init = function (state=initialState, action){
//export default function(state=initialState, action){
    switch(action.type){

        case GET_ANSWERS:
        return {
            ...state,
            answers: action.payload
        };

        default: return state;
    }
}

export {init as default};