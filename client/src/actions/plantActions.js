import {GET_PLANTS,ADD_PLANT,DELETE_PLANT,PLANTS_LOADING} from './types';
import axios from 'axios';

export const getPlants = () => dispatch =>{dispatch(setPlantsLoading());
    
    axios
    .get('/plants')
    .then(res=>dispatch({type:GET_PLANTS, payload:res.data}))

};    

export const deletePlant = id => dispatch =>{
    axios.delete(`/plants/${id}`)
    .then(res=> dispatch({
        type: DELETE_PLANT,
        payload: id
    }))
};

export const addPlant = plant => dispatch=>{
    axios
    .post('/plants', plant)
    .then(res=> dispatch({type: ADD_PLANT, payload:res.data}))
};

export const setPlantsLoading =()=>{
    return {
        type: PLANTS_LOADING
    }
}
