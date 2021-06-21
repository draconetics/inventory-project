//declare this instead install @types/webrtc
//declare module 'types-module';
//import {Dispatch} from 'redux'

//REDUX ACTION
interface IActionReducer{
    type: string,
    value: any       
}

type AppDispatch = any

//BRAND

interface IBrand{
    _id?: string,
    code: string,
    name: string
}

interface IBrandStateReducer {
    brands:Brand[];
    brandLoading: boolean;
    brandError: string;
}
