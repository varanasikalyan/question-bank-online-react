import React, { Component } from 'react';
import {Editor} from '@tinymce/tinymce-react';
import '../../node_modules/trumbowyg/dist/plugins/table/trumbowyg.table';

export class TinyMCE extends Component {
    constructor(props) {
		super(props);
		this.state = {
            apiKey: 'cq0usdgr9p670ekcty42w6b16d7dmgk0xd7r9ly2ro9f6f2s'
		}
		this.handleEditorChange = this.handleEditorChange.bind(this);
	}
    handleEditorChange = (e) => {
        this.props.onContentChange(e.target.getContent());        
    }
    render() {
        const style = {
            'padding': '0px 0px 15px 0px'
        }
        return (
            <div id="richTextEditor" style={ style }>
                <Editor initialValue=''
                    apiKey={ this.state.apiKey }
                    init={{
                        plugins: "preview fullpage powerpaste searchreplace autolink image code directionality advcode fullscreen image link media codesample table charmap hr anchor toc insertdatetime advlist lists tinymcespellchecker a11ychecker imagetools textpattern help",
                        toolbar: "formatselect | bold italic forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat",
                        image_title: true,
                        /* enable automatic uploads of images represented by blob or data URIs*/
                        automatic_uploads: true,
                        height: 500,
                        branding: false,
                        file_picker_types: 'image',
                        file_picker_callback: function (cb) {
                            var input = document.createElement('input');
                            input.setAttribute('type', 'file');
                            input.setAttribute('accept', 'image/*');

                            /*
                            Note: In modern browsers input[type="file"] is functional without
                            even adding it to the DOM, but that might not be the case in some older
                            or quirky browsers like IE, so you might want to add it to the DOM
                            just in case, and visually hide it. And do not forget do remove it
                            once you do not need it anymore.
                            */

                            input.onchange = function () {
                                var file = this.files[0];

                                var reader = new FileReader();
                                reader.onload = function () {
                                    /*
                                    Note: Now we need to register the blob in TinyMCEs image blob
                                    registry. In the next release this part hopefully won't be
                                    necessary, as we are looking to handle it internally.
                                    */
                                    var id = 'blobid' + (new Date()).getTime();
                                    var blobCache =  window.tinymce.activeEditor.editorUpload.blobCache;
                                    var base64 = reader.result.split(',')[1];
                                    var blobInfo = blobCache.create(id, file, base64);
                                    blobCache.add(blobInfo);

                                    /* call the callback and populate the Title field with the file name */
                                    cb(blobInfo.blobUri(), { title: file.name });
                                };
                                reader.readAsDataURL(file);
                            };

                            input.click();
                        },                        
                        template_cdate_format: "[CDATE: %m/%d/%Y : %H:%M:%S]",
                        template_mdate_format: "[MDATE: %m/%d/%Y : %H:%M:%S]",
                        image_caption: true,

                        spellchecker_dialog: true,
                        spellchecker_whitelist: ["Ephox", "Moxiecode"]
                        }}
                    onChange={this.handleEditorChange}
                    textareaName="tinyMceContent" className="col"
                />
            </div>
        )
    }
}

export default TinyMCE
