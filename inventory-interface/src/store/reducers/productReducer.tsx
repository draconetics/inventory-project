import * as actionTypes from '../actions/types'
const initialState:IProductStateReducer = {
    products:[],
    productsLoading:false,
    productsError:""
}
export const productReducer = (
    state = initialState,
    action: IActionReducer
  ): IProductStateReducer => {
    switch (action.type) {
        case actionTypes.SET_PRODUCTS:
            return {
                ...state,
                products:action.value,
            }
        /* case actionTypes.SAVE_BRAND:         
            const newList = state.brands.map((item)=>{
                if(item._id === action.value._id){
                    item.code = action.value.code;
                    item.name = action.value.name;
                }
                return item;
            });
            
            return {
                ...state,
                brands:newList
            }*/
        case actionTypes.CREATE_PRODUCT:
            return {
                ...state,
                products:[...state.products, action.value]
            }/*
        case actionTypes.DELETE_BRAND:
            let filterList = state.brands.filter(item => item._id !== action.value._id);
            console.log(filterList);
            return {
                ...state,
                brands:filterList
            } */
        default: return state;
    }
  };
  
  