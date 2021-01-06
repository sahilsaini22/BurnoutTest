
import {GET_QUESTIONS, NEXT, SCORE , COUNTS} from '../actions/types';
const initialState={    
        questions:[],
        current: 1, 
        score  : 0, 
        total : 2
};

const init = function (state=initialState, action){
//export default function(state=initialState, action){
    switch(action.type){

        case GET_QUESTIONS:
        return {
            ...state,
            questions: action.payload
        };

        case NEXT:
        return {
            ...state,
            current : action.payload + 1
        }; 

        case SCORE:
        return {
            ...state,
            score : action.payload 
        };

        case COUNTS:
        return {
            ...state            
        };

        default: return state;
    }
}

export {init as default};