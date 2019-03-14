import React, { Component } from 'react';

class Loading extends Component {
    render() {
        const style = {
            'margin': '0px 40px 200px 40px'            
        }
        return (
            <div className="d-flex justify-content-center" style={ style }>
                <img src={require("../../../static/images/loading-hourglass.gif")} alt="Loading" />
            </div>
        );
    }
}

export default Loading;