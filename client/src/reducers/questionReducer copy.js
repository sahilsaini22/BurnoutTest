
import {GET_QUESTIONS} from '../actions/types';
const initialState={    
        questions:[],
        current: 1
};


export default function(state=initialState, action){
    switch(action.type){

        case GET_QUESTIONS:
        return {
            ...state,
            questions: action.payload
        };

        default: return state;
    }
}