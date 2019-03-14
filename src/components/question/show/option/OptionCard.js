import React, { Component } from 'react';
import './OptionCard.css';
import renderHTML from 'react-render-html';

class OptionCard extends Component {
    handleCheckChange = (e) => {
        this.props.onContentChange({
            id: this.props.id,
            is_correct_option: e.target.checked
        });
    }
    render() {
        return (
            <div className="container option-card-border">
                <div className="row">
                    <div className="col-sm-1 col-md-2 col-lg-1 col-xl-1" valign="middle">
                        <label className="switch">
                            <input type="checkbox" id="option" name="option" className="success" checked={ this.props.is_correct_option } onChange={ this.handleCheckChange }/>                        
                            <span className="slider"></span>
                        </label>
                    </div>
                    <div className="col-sm-11 col-md-10 col-lg-11 col-xl-11">
                        <div className="option-container">
                            { renderHTML(this.props.option) }
                        </div>
                    </div>
                </div>                    
            </div>
    )
  }
}

export default OptionCard;