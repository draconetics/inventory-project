import BrandListComponent from './BrandListComponent'
import { connect } from 'react-redux';

import {getBrands} from '../../store/actions/brandAction'
//import {CREATE_NOTE_DO_LIST, DELETE_NOTE, SAVE_NOTE_DO_LIST, SET_NOTES_DO,SET_NOTES_DONE, SET_NOTES_ERROR} from '../../actions/types'
//import * as actionCreators from '../../actions/noteAction'


export const mapStateToProps = (state:any) =>{
      return {
          brands: state.brandReducer.brands,
          brandLoading: state.brandReducer.brandLoading,
          brandError: state.brandReducer.brandError,
      }
  }
 
export const mapDispatchToProps = (dispatch: AppDispatch)=>{
    
    return {
      getBrands: () => dispatch(getBrands()),
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(BrandListComponent);