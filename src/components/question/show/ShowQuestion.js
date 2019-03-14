import React, { Component } from 'react';
import axios from 'axios';
import API from '../../common/APIHelper';
import OptionCard from './option/OptionCard';
import renderHTML from 'react-render-html';
import './ShowQuestion.css';

class ShowQuestion extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            question: '',
            options: []    
        }
    }
    
	componentWillUnmount() {
		this._isMounted = false;
    }
    
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
                <form action="/question/show" onSubmit={this.handleSubmit} method="POST">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="form-group">
                                <div><b><u>Question/Problem Statement</u></b></div>
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
                        <div className="col-md-4">
                            <div className="form-group">
                                <div><b><u>Options</u></b></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg">
                            {
                                this.state.options.map((optionObj, index) => {
                                    return (<OptionCard key={ index } id={ index } option_id={optionObj.id} option={ optionObj.option } is_correct_option={ optionObj.is_correct_option }  onContentChange={ this.handleOptionContent }/>);
                                })
                            }                                                                            
                        </div>            
                    </div>    
                </form>
            </div>            
        )
    };
}

export default ShowQuestion
