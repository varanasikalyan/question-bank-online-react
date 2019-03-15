import React, { Component } from 'react';
import axios from 'axios';
import API from '../../common/APIHelper';
import renderHTML from 'react-render-html';
import './ShowModule.css';

export class ShowModule extends Component {  
    componentDidMount() {
        this._isMounted = true;
        axios.get(API.URI + 'api/v1/questions?id=' + this.state.id, {
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors'    
        }).then( response => {								
            if (this._isMounted) {
                var option_list = Object.keys(response.data['question']['options']).map(function (i) {
                    return response.data['question']['options'][i];
                });
                this.setState({
                    question: response.data['question']['question'],
                    options: option_list
                });
            }
        });
    }

    handleOptionContent = (content) => {
        const index = this.state.options.findIndex((optionObj) => {
            return (optionObj.id === content.id);
        });
        const option = Object.assign({}, this.state.options[index]);
        option.option = content.option;
        option.is_correct_option = content.is_correct_option;

        const tamperable_options = Object.assign([], this.state.options);
        tamperable_options[index] = option;
        this.setState({
            options: tamperable_options
        })
    };

    render() {
        return (
            <div className="container show-question">                                
                <div className="row">
                    <div className="col-md-7">
                        <div className="form-group">
                            <div><b><u>Module</u></b></div>
                        </div>
                    </div>
                </div>                    
                <div className="row">
                    <div className="col-md">
                        <div className="form-group">
                            <div className="container question-card-border">
                                <div className="row">
                                    <div className="col-*" valign="middle">
                                        { renderHTML(this.state.question) }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <div className="form-group">
                            <div><b><u>Parent module</u></b></div>
                        </div>
                    </div>
                </div>                    
                <div className="row">
                    <div className="col-md">
                        <div className="form-group">
                            <div className="container question-card-border">
                                <div className="row">
                                    <div className="col-*" valign="middle">
                                        { renderHTML(this.state.question) }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <div className="form-group">
                            <div><b><u>Description</u></b></div>
                        </div>
                    </div>
                </div>                    
                <div className="row">
                    <div className="col-md">
                        <div className="form-group">
                            <div className="container question-card-border">
                                <div className="row">
                                    <div className="col-*" valign="middle">
                                        { renderHTML(this.state.question) }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        )
    };
}

export default ShowModule
