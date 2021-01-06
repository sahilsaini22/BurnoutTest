import {GET_QUESTIONS, NEXT, SCORE, COUNTS} from './types';
import axios from 'axios';

export const getQuestions = () => dispatch =>{    
    axios
    .get('/questions')
    .then(res=>dispatch({type:GET_QUESTIONS, payload:res.data}))
};   


export const next = (current)=> dispatch =>  {    
    dispatch({
        type: NEXT, 
        payload: current 
        
    })  
};   


export const score = (score)=> dispatch =>  {    
    dispatch({
        type: SCORE, 
        payload: score 
        
    })  
};   

export const getcounts =()=>{
    return({
        type: COUNTS         
        
    })  
}; 

