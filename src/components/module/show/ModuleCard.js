import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import './ModuleCard.css';

export class ModuleCard extends Component {
    render() {
        return (
            <div className='card-container'>
                <Card>
                    <Card.Header>{this.props.id}. {this.props.module}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <p>
                            {' '}{this.props.description}{' '}
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

export default ModuleCard;