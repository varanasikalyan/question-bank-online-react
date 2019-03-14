import React, { Component } from 'react';
import Trumbowyg from 'react-trumbowyg'
import 'react-trumbowyg/dist/trumbowyg.min.css';

export class TrumbowygEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
        this.handleEditorChange = this.handleEditorChange.bind(this);
    }

    handleEditorChange = (e) => {        
        this.props.onContentChange(e.target.getContent());        
    }

    render() {
        return (
            <div>
                <Trumbowyg id='react-trumbowyg'
                    buttons={
                        [
                            ['undo', 'redo'],
                            ['formatting'],
                            ['strong', 'em', 'del'],
                            ['superscript', 'subscript'],
                            ['link'],
                            ['insertImage'],
                            ['viewHTML'],
                            ['table'],
                            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
                            ['unorderedList', 'orderedList'],
                            ['horizontalRule'],
                            ['removeformat'],
                            ['fullscreen']                            
                        ]
                    }
                    data={this.state.data}
                    placeholder='Type your text!'
                    onChange={this.handleEditorChange}
                    ref="trumbowyg"
                />
            </div>
        )
    }
}

export default TrumbowygEditor;