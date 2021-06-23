import BrandListComponent from './ProductCreateComponent'
import { connect } from 'react-redux';

import {getBrands} from '../../store/actions/brandAction';
import {createProduct} from '../../store/actions/productAction';
//import {CREATE_NOTE_DO_LIST, DELETE_NOTE, SAVE_NOTE_DO_LIST, SET_NOTES_DO,SET_NOTES_DONE, SET_NOTES_ERROR} from '../../actions/types'
//import * as actionCreators from '../../actions/noteAction'


export const mapStateToProps = (state:any) =>{
      return {
          brands: state.brandReducer.brands,
      }
  }
 
export const mapDispatchToProps = (dispatch: AppDispatch)=>{
    
    return {
      getBrands: () => dispatch(getBrands()),
      createProduct: (data:IProduct) => dispatch(createProduct(data)),/*
      updateBrand: (data:IBrand) => dispatch(updateBrand(data)),
      deleteBrand: (data:IBrand) => dispatch(deleteBrand(data)) */
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(BrandListComponent);