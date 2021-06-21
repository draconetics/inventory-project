import {SET_BRANDS, SET_BRANDS_LOADING, SET_BRANDS_ERROR} from './types';
import brandService from '../../services/brandService';

export const getBrands = () =>(dispatch:AppDispatch) =>{
        dispatch({
            type: SET_BRANDS_LOADING,
            value: true
        });
        return brandService.getList()
            .then(resp => {
                
                //console.log(resp);
                // dispatch
                dispatch({
                    type: SET_BRANDS,
                    value: resp.data.data
                });
                
                dispatch({
                    type: SET_BRANDS_LOADING,
                    value: false
                });
                dispatch({
                    type: SET_BRANDS_ERROR,
                    value: ""
                });
            }).catch((e)=>{
                //console.log("entra a catcher")
                dispatch({
                    type: SET_BRANDS_LOADING,
                    value: false
                });
                dispatch({
                    type: SET_BRANDS_ERROR,
                    value: "Error getting data from the server: " + e.message
                });
            });
    };//end getBrands
  
