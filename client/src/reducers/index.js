import {combineReducers} from 'redux';
import plantReducer from './plantReducer';
import questionReducer from './questionReducer';
import answerReducer from './answerReducer';

export default combineReducers({
    plant: plantReducer,
    question: questionReducer,
    answer: answerReducer
});
