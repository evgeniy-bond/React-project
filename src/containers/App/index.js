import React, { Component } from 'react';

import Header from '../../components/Header';
// import Aside from '../../components/Aside';
                    // <Aside></Aside>

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Header></Header>
                <div className="row">
                    {this.props.children}
                </div>
            </div>
        );
    }
}