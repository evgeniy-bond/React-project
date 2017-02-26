import React, { Component } from 'react';
import ListGroup from '../ListGroup';

export default class Aside extends Component {
    render() {
        return (
            <aside className="col-xs-3">
                <ListGroup></ListGroup>
            </aside>
        );
    }
}