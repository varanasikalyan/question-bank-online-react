import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class Notification extends Component {            
    render() {
        const style = {
            margin: '10px'        
        }
        return (
            <div style={style}>
                {
                    (this.props.is_dismiss === true) ? 
                        <Alert dismissible variant={this.props.status}>
                            <Alert.Heading>{this.props.heading}</Alert.Heading>
                            <p>
                                {this.props.message}
                            </p>
                        </Alert>
                    :
                    <Alert variant={this.props.status}>
                        <Alert.Heading>{this.props.heading}</Alert.Heading>
                        <p>
                            {this.props.message}
                        </p>
                    </Alert>
                }                              
            </div>
        );
    }
}
export default Notification;