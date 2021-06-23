import {SET_PRODUCTS, SET_PRODUCTS_LOADING, SET_PRODUCTS_ERROR} from './types';
import productService from '../../services/productService';
import * as actionTypes from './types';

export const getProducts = () =>(dispatch:AppDispatch) =>{
        dispatch({
            type: SET_PRODUCTS_LOADING,
            value: true
        });
        return productService.getList()
            .then(resp => {
                
                console.log(resp);
                // dispatch
                dispatch({
                    type: SET_PRODUCTS,
                    value: resp.data.data
                });
                
                dispatch({
                    type: SET_PRODUCTS_LOADING,
                    value: false
                });
                dispatch({
                    type: SET_PRODUCTS_ERROR,
                    value: ""
                }); 
            }).catch((e)=>{
                //console.log("entra a catcher")
                dispatch({
                    type: SET_PRODUCTS_LOADING,
                    value: false
                });
                dispatch({
                    type: SET_PRODUCTS_ERROR,
                    value: "Error getting data from the server: " + e.message
                });
            });
};//end getProducts

export const createProduct = (data:IProduct) => (dispatch:AppDispatch) =>{
    const setLoadingTo = (flag:boolean) => ({type: actionTypes.SET_PRODUCTS_LOADING, value: flag});
    const setErrorTo = (error:string) => ({type: actionTypes.SET_PRODUCTS_ERROR, value: error});
    const createNewProduct = (item:IProduct) => ({type: actionTypes.CREATE_PRODUCT, value: item});

    dispatch(setLoadingTo(true));
    return productService.createProduct(data)
        .then(resp => {
            // dispatch
            //console.log("register action")
            console.log(resp);
            dispatch(setLoadingTo(false));
            dispatch(setErrorTo(''));
            dispatch(createNewProduct(resp.data.data))
            console.log('success on create new Product');
        }).catch((e)=>{
            console.log(e.response.data);
            let defaultError = "Failing conneting to server: " + e.message;
            if(e.response && e.response.data){
                const data = e.response.data;
                if(data.message){
                    defaultError = data.message;
                }
            }
            dispatch(setErrorTo(defaultError));
            dispatch(setLoadingTo(false)); 
        });
};//end create new brand
  