import { combineReducers } from "redux";

const initialState = {
    name: 'Halo',
};

const InitialStateRegister = {
    form:{
        namaLengkap: '',
        email:'',
        noHp:'',
        pass:'',
        rePass:'',
    },
};

const registerReducer = {state =  InitialStateRegister, action} =>{
    if(action.type === 'SET_TITLE'){
        return{
            ...state,
            title: 'Register Ganti Title',
        }
    }
    if(action.type === 'SET_FORM'){
        return{
            ...state,
            form:{
                ...state.form,
                [action.inputType]: action.inputValue,
            }
        }
    } 
    return state;
};

const initialStateLogin = {
    info: 'Tolong masukkan pasowrd anda',
    isLogin: true,
};

const loginReducer = {state = initialStateLogin, action} => {
    return state;
};

const reducer = combineReducers({
    registerReducer,
    loginReducer,
})

export default reducer;