import * as actionTypes from '../actions/types'
const initialState:IBrandStateReducer = {
    brands:[],
    brandLoading:false,
    brandError:""
}
export const brandReducer = (
    state = initialState,
    action: IActionReducer
  ): IBrandStateReducer => {
    switch (action.type) {
        case actionTypes.SET_BRANDS:
            return {
                ...state,
                brands:action.value,
            }
        default: return state;
    }
  };
  
  