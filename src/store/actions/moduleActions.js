import axios from 'axios';
import API from '../../components/common/APIHelper';
import {CREATE_MODULE, CREATE_MODULE_ERROR, GET_MODULES, GET_MODULES_ERROR, SHOW_LOADING } from '../types/moduleTypes';

export const createModule = (module) => {    
    return (dispatch, getState) => {
        dispatch({ type: SHOW_LOADING });   
        axios.post(API.URI + 'api/v1/modules', {
                headers: {
                    'Content-Type': 'application/json',
                    'token': localStorage.getItem('token'),
                    'username': localStorage.getItem('username')
                },
                mode: 'cors',
                module: module.module,
                parent_module_id: (module.parent_module_id === '')? null : module.parent_module_id,
                is_active: true,
                description: module.description,
                creator_id: module.creator_id
            }
        ).then( function(response) {
            dispatch({ type: CREATE_MODULE, response });
        }).catch(error => {			
            dispatch({ type: CREATE_MODULE_ERROR, error });
        });        
    }
}

export const getModules = (params) => {
    return (dispatch, getState) => {
        dispatch({ type: SHOW_LOADING });
        var full_uri = API.URI + 'api/v1/modules'; 
		if (params.creator_id === '')
			full_uri = full_uri + '/latest/' + params.count
		else
			full_uri = full_uri + '/creator/' + params.creator_id +'/latest/' + params.count

		axios.get(full_uri, {
				headers: {
						'Content-Type': 'application/json'
				},
				mode: 'cors'    
		}).then( response => {											            
            dispatch({ type: GET_MODULES, response: response.data });
		}).catch(error => {			
            dispatch({ type: GET_MODULES_ERROR, error });
        });         
    }
}