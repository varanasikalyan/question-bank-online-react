import { CREATE_MODULE, CREATE_MODULE_ERROR, GET_MODULES, GET_MODULES_ERROR, UPDATE_MODULE, DELETE_MODULE, SHOW_LOADING } from '../types/moduleTypes';

const initState = {
    response: null,
    status: '',
    modules: [],    
    error: null,
    loading: false    
}

const moduleReducer = (state = initState, action) => {
    switch(action.type) {
        case CREATE_MODULE:
            return {
                ...state,
                loading: false,
                status: CREATE_MODULE,
                response: action.response
            }
        case CREATE_MODULE_ERROR:    
            return {
                ...state,
                loading: false,
                status: CREATE_MODULE_ERROR,
                error: action.error
            }
        case GET_MODULES:
            return {
                ...state,
                loading: false,
                status: GET_MODULES,
                modules: action.response.modules,
                response: action.response
            }
        case GET_MODULES_ERROR:
            return {
                ...state,
                loading: false,
                status: GET_MODULES_ERROR,
                error: action.error
            }
        case UPDATE_MODULE:
            return {
                ...state,
                loading: false,
                status: UPDATE_MODULE,
                response: action.response
            }
        case SHOW_LOADING:
            return {
                ...state,
                loading: true            
            }
        case DELETE_MODULE:
            return {
                ...state,
                loading: false,
                status: DELETE_MODULE,                
                response: action.response
            }
        default:
            return state;
    }
}

export default moduleReducer