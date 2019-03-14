import React, { Component } from 'react';
import './CreateModule.css';
import Notifications, { notify } from 'react-notify-toast';
import {Redirect} from 'react-router-dom';
import Loading from '../../common/loading/Loading';
import { connect } from 'react-redux';
import { createModule } from '../../../store/actions/moduleActions';
import { CREATE_MODULE, CREATE_MODULE_ERROR } from '../../../store/types/moduleTypes';

class CreateModule extends Component {
    state = {
        module: '',
        parent_module_id: '',
        description: '',
        creator_id: '',
        is_active: true
    }
    
    componentDidMount() {
        this.setState({
            creator_id: this.props.user.user_entity.id
        });        
    }
    
    handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createModule(this.state);	
    }

    render() {
        const options = {
			zIndex: 200, top: '50px'
        }
        if (this.props.module.status === CREATE_MODULE) {
            return (
                <Redirect to='/home' />
            )
        }
        else if(this.props.module.status === CREATE_MODULE_ERROR) {
            if(this.props.module.error !== null)
                if(this.props.module.error.response !== undefined && this.props.module.error.response.status === 401)
                    notify.show(this.props.user.error.response.data['message'], 'error', 3000, 'red');
            else
                notify.show("Unable to create module...", 'error', 3000, 'red');            
            this.props.module.error = null;
        }        
        return ( 
            <div>
                <Notifications options={{ options }}/>
                { this.props.module.loading ? <Loading /> :            
                    <div className="container add-module">
                        <form action="/module" onSubmit={this.handleSubmit} method="POST">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="form-group">
                                        <h3 className="header">Add Module / Topic</h3>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-2">
                                    <div className="form-group">
                                        <input className="btn btn-md btn-success" id="submit" name="submit" type="submit" value="Upload"/>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-2">
                                    <div className="form-group">
                                        <input className="btn btn-md btn-secondary" id="clear" name="clear" type="button" value="Clear"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="module"><b><u>Module name</u></b></label>
                                        <input className="form-control form-control-sm" id="module" name="module" required="" type="text" autoComplete="module-name" value={this.state.module} onChange={this.handleChange}/>
                                    </div>                            
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="parent"><b><u>Parent module / topic</u></b></label>
                                        <input className="form-control form-control-sm" id="parent_module_id" name="parent_module_id" required="" type="text" autoComplete="parent-module-id" value={this.state.parent_module_id} onChange={this.handleChange}/>
                                    </div>                            
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="description"><b><u>Description</u></b></label>
                                        <textarea className="form-control form-control-sm description" id="description" name="description" required="" autoComplete="description" value={this.state.description} onChange={this.handleChange}/>
                                    </div>                            
                                </div>
                            </div>
                        </form>                        
                    </div>
                }
            </div>
        );        
    }    
}

const mapStateToProps = (state) => {
	return {
    	module: state.module,
        user: state.user
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        createModule: (module) => dispatch(createModule(module))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateModule);