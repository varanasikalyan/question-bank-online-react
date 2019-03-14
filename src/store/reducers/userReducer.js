import { CREATE_USER, 
         CREATE_USER_ERROR, 
         GET_USER,
         GET_USER_ERROR,
         UPDATE_USER, 
         DELETE_USER, 
         SHOW_LOADING,
         AUTHENTICATE_USER, 
         AUTHENTICATE_USER_ERROR,
         SIGNOUT_USER } from '../types/userTypes';

const initState = {
    response: null,
    status: '',
    user_entity: null,
    error: null,
    loading: false,    
    token: null,
    username: null,
    is_authenticated: false
}

const userReducer = (state = initState, action) => {
    switch(action.type) {
        case SHOW_LOADING:
            return {
                ...state,
                loading: true
            }            
        case SIGNOUT_USER:
            return {
                ...state,
                token: null,
                username: null,
                is_authenticated: false,
                status: SIGNOUT_USER,
                loading: false
            }       
        case AUTHENTICATE_USER:
            return {
                ...state,
                token: action.response['auth_token'],
                username: action.response['username'],
                user_entity: action.response['user'],
                loading: false,
                is_authenticated: true,
                status: AUTHENTICATE_USER
            }
        case AUTHENTICATE_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
                status: AUTHENTICATE_USER_ERROR
            }
        case CREATE_USER:
            return {
                ...state,
                loading: false,
                status: CREATE_USER,
                response: action.response
            }            
        case CREATE_USER_ERROR:
            return {
                ...state,
                loading: false,
                status: CREATE_USER_ERROR,
                error: action.error
            }        
        case GET_USER:
            return {                                
                ...state,
                response: action.response,
                loading: false,
                user_entity: action.response.data,
                status: GET_USER
            }
        case GET_USER_ERROR:
            return {
                ...state,                
                loading: false,
                entity: action.error,
                status: GET_USER_ERROR
            }
        case UPDATE_USER:
            return {
                ...state,
                loading: false,
                status: UPDATE_USER,
                entity: action.response                
            }            
        case DELETE_USER:
            return {
                ...state,
                loading: false,
                entity: action.response
            }            
        default:
            return state;
    }
}

export default userReducer;