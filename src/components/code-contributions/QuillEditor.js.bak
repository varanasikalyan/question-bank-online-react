import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './QuillEditor.css';

export class QuillEditor extends Component {
    constructor(props) {
        super(props);        
        this.handleEditorChange = this.handleEditorChange.bind(this);
    }
    
    handleEditorChange = (e) => {
        this.props.onContentChange(e);        
    }

    modules = {
        toolbar: [
            [{ 'font': [] }],
            [{ 'header': [1, 2, false, 4, 5, 6] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image', 'video'],          
            [{ 'script': 'sub'}, { 'script': 'super' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'color': [] }, { 'background': [] }],          
            [{ 'align': [] }],
            ['clean']
        ],
    }
    
    formats = [
        'header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'video', 'script', 'direction', 'size', 'color', 'background', 'font', 'align', 'clean'
    ]
    
    render() {
        return (
            <div className="text-editor">                
                <ReactQuill theme="snow"                    
                    modules={this.modules}
                    formats={this.formats}
                    onChange={ this.handleEditorChange }>
                </ReactQuill>
            </div>
        );
    }
}

export default QuillEditor;