import ProductListComponent from './ProductListComponent'
import { connect } from 'react-redux';

import {getBrands, createBrand, updateBrand, deleteBrand} from '../../store/actions/brandAction'
import {getProducts} from '../../store/actions/productAction';
//import {CREATE_NOTE_DO_LIST, DELETE_NOTE, SAVE_NOTE_DO_LIST, SET_NOTES_DO,SET_NOTES_DONE, SET_NOTES_ERROR} from '../../actions/types'
//import * as actionCreators from '../../actions/noteAction'


export const mapStateToProps = (state:any) =>{
      return {
          products: state.productReducer.products,
          productLoading: state.productReducer.brandLoading,
          productError: state.productReducer.productError,
      }
  }
 
export const mapDispatchToProps = (dispatch: AppDispatch)=>{
    
    return {
      getProducts: () => dispatch(getProducts()),
      /* createBrand: (data:IBrand) => dispatch(createBrand(data)),
      updateBrand: (data:IBrand) => dispatch(updateBrand(data)),
      deleteBrand: (data:IBrand) => dispatch(deleteBrand(data)) */
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ProductListComponent);