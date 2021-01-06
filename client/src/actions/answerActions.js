import { GET_ANSWERS} from './types';
import axios from 'axios';


export const getAnswers = () => dispatch =>{    
    axios
    .get('/answers')
    .then(res=>dispatch({type:GET_ANSWERS, payload:res.data}))
}; 

