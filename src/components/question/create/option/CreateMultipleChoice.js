import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CreateMultipleChoice.css';
import { QuillEditor } from '../../../ui-helpers/rich-text-editors/quill/QuillEditor';

class CreateMultipleChoice extends Component {
    handleRichEditorContent = (content) => {
        this.props.onContentChange({
            id: this.props.id,
            option: content,
            is_correct_option: this.props.is_correct_option
        });
    }
    handleCheckChange = (e) => {
        this.props.onContentChange({
            id: this.props.id,
            option: this.props.option,
            is_correct_option: e.target.checked
        });
    }
    render() {
        const option_style = {
            'padding': '0px 15px 15px 5px',
            'verticalAlign': 'middle',
            'fontWeight': '600'
        }
        const answer_style = {
            'padding': '0px 15px 15px 10px',
            'verticalAlign': 'middle',
            'fontWeight': '600'
        }
        const option_padding = {
            'marginBottom': '20px'
        }
        return (
            <table className="container" style={ option_padding }>
                <tbody>
                    <tr>
                        <td style={ option_style }>
                            Option { this.props.id }
                        </td>
                        <td style={ answer_style }>
                            Answer
                        </td>
                    </tr>
                    <tr>
                        <td className="option-td option-text" valign="middle">
                            <QuillEditor onContentChange={ this.handleRichEditorContent }/>
                        </td>
                        <td className="option-td" align="center" valign="top">
                            <label className="switch">
                                <input type="checkbox" id="option" name="option" className="success" checked={ this.props.is_correct_option } onChange={ this.handleCheckChange }/>
                                <span className="slider"></span>
                            </label>
                        </td>
                    </tr>
                </tbody>
            </table>
    )
  }
}

CreateMultipleChoice.defaultProps = {
    id: 0,
    option: '',
    is_correct_option: false
} 

CreateMultipleChoice.propTypes = {
    id: PropTypes.number.isRequired,
    option: PropTypes.string,
    is_correct_option: PropTypes.bool
} 

export default CreateMultipleChoice;