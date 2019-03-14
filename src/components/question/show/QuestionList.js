import React, { Component } from 'react';
import QuestionCard from './QuestionCard';

class QuestionList extends Component {
	state = {
		questions: [
			{module: "Python", title: "What are _ and __ used for in python?", author: "Roger Federer"},
			{module: "CSS", title: "What are uses of bootstrap?", author: "Rafael Nadal"},
			{module: "HTML", title: "What is the full form of HTML?", author: "Novak Djokovic"}
		]		
	}
  render() {
    return (
    	<div className="question-list section">
      {
				this.state.questions.map((questionObj, index) => {
					return (<QuestionCard key={ index } module={ questionObj.module } title={ questionObj.title } author={ questionObj.author } />);
				})
			}
      	</div>
    )
  }
}

export default QuestionList;