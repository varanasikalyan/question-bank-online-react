import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import './QuestionCard.css';

class QuestionCard extends Component {
    render() {
        return (
            <div className='card-container'>
                <Card>
                    <Card.Header>{this.props.module}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <p>
                            {' '}{this.props.title}{' '}
                        </p>
                        <footer className="blockquote-footer">
                            <cite title="Source Title">{this.props.author}</cite>
                        </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default QuestionCard;