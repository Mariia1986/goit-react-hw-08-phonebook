import axios from 'axios'
import { AccordionCollapse } from 'react-bootstrap';
import{
    registerRequest,
    registerSuccess,
    registerError,
    loginSuccess,
    loginRequest,
    loginError,
    logoutSuccess,
    logoutRequest,
    logoutError,
    getCurrentUserSuccess,
    getCurrentUserRequest,
    getCurrentUserError
} from './auth-actions'

axios.defaults.baseURL =  'https://goit-phonebook-api.herokuapp.com';

const token={}

const register=credentials=> async dispatch=>{
    dispatch(loginRequest())  
  try {
      const {data}=await axios.post('/users/signup', credentials);
      dispatch(loginSuccess(data))
    }
      catch(error){
        dispatch(loginError(error.message))
      }
}

const login=credentials=>async dispatch=>{
    dispatch(registerRequest())  
    try {
        const {data}=await axios.post('/users/login', credentials);
        dispatch(registerSuccess(data))
      }
        catch(error){
          dispatch(registerError(error.message))
        }

}

const logout=credentials=>dispatch=>{}

const getCurrentUser=()=>dispatch=>{}


export default{
    token,
    register,
    login,
    logout,
    getCurrentUser




}