import React, { Component } from 'react';
import Notification from './Notification';

class NotificationList extends Component {
	state = {
		notify: [
			{is_dismiss: true, status: "danger", heading: "Error", message: "Error"},
			{is_dismiss: true, status: "warning", heading: "Warning", message: "Warning"},
			{is_dismiss: false, status: "success", heading: "Success", message: "Success"}
		]		
	}
  render() {
    return (
    	<div className="question-list section">
      {
				this.state.notify.map((notifyObj, index) => {
					return (<Notification key={ index } is_dismiss={ notifyObj.is_dismiss } status={ notifyObj.status } heading={ notifyObj.heading } message={ notifyObj.message } />);
				})
			}
      </div>
    )
  }
}

export default NotificationList;