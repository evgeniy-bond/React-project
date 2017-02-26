import React, { Component } from 'react';

import Header from '../../components/Header';
import BreadCrumbs from '../../components/BreadCrumbs';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Header></Header>
                <BreadCrumbs
                    routes={this.props.routes}
                />
                <div className="row">
                    {this.props.children}
                </div>
            </div>
        );
    }
}