import React, { Component } from 'react';
import './ShowModule.css';
import { Link } from 'react-router-dom';
import Notifications, { notify } from 'react-notify-toast';
import Loading from '../../common/loading/Loading';
import { connect } from 'react-redux';
import { getModule } from '../../../store/actions/moduleActions';
import { GET_MODULE_ERROR, GET_MODULE_SUCCESS } from '../../../store/types/moduleTypes';

export class ShowModule extends Component {  
    constructor(props) {
        super(props);
        this.props.getModule({id: this.props.match.params.id});
    }

    renderModule() {        	
		if (this.props.module.status === GET_MODULE_ERROR) {
            if(this.props.module.error !== null)
                if(this.props.module.error.response !== undefined && this.props.module.error.response.status === 401)
                    notify.show(this.props.user.error.response.data['message'], 'error', 3000, 'red');
            else
                notify.show("Unable to retrieve module...", 'error', 3000, 'red');

			const exams_style = {
				'margin': '0px 0px 25px 15px' 
            }
            
			return (<div style={ exams_style }>Unable to retrieve module...</div>);
		}
		else if (this.props.module.status === GET_MODULE_SUCCESS) {		
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className="container show-module">                      
                                <div className="row">
                                    <div className="col-*">
                                        <div className="form-group">
                                            <div><b><u>Module</u></b></div>
                                        </div>
                                    </div>
                                </div>                    
                                <div className="row">
                                    <div className="col-*">
                                        <div className="form-group">
                                            { this.props.module.current_module.module }
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-*">
                                        <div className="form-group">
                                            <div><b><u>Parent module</u></b></div>
                                        </div>
                                    </div>
                                </div>                    
                                <div className="row">
                                    <div className="col-*">
                                        <div className="form-group">
                                            { this.props.module.current_module.parent_module_id === null ? 'N/A' : this.props.module.current_module.parent_module_id }
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-*">
                                        <div className="form-group">
                                            <div><b><u>Description</u></b></div>
                                        </div>
                                    </div>
                                </div>                    
                                <div className="row">
                                    <div className="col-*">
                                        <div className="form-group">
                                            { this.props.module.current_module.description }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <Link to="/question" className="nav-item nav-link">                    
                                <img
                                    src={require("../../../static/images/add.png")}
                                    alt="Add Question"					
                                    className='image-style'
                                /><span className='add-question-link'>Add Question</span>
                            </Link>
                            <Link to="/exam" className="nav-item nav-link">                    
                                <img
                                    src={require("../../../static/images/add.png")}
                                    alt="Add Exam"					
                                    className='image-style'
                                /><span className='add-question-link'>Add Exam</span>
                            </Link>
                        </div>
                    </div>                    
                </div>
			);
        }
        else {
            return (<Loading />);
        }
    }
    render() {
        const options = {
			zIndex: 200, top: '50px'
        }
        const modules_style = {
			'margin': '25px 0px 25px 0px' 
        }
        return (
            <div>
                <Notifications options={{ options }}/>
                <div style={ modules_style }>							
                    { this.renderModule() }
                </div>                                               
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
        getModule: (params) => dispatch(getModule(params))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowModule);
