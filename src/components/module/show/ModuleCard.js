import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ModuleCard.css';

export class ModuleCard extends Component {
    render() {
        const url = '/showmodule/' + this.props.id;
        return (              
            <Link to={ url } className='card-container'>
                <Card>
                    <Card.Header>{this.props.module}</Card.Header>
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
            </Link>
        )
    }
}

export default ModuleCard;