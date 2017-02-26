import React, { Component } from 'react';
import { Link } from 'react-router'

export default class BreadCrumbs extends Component {
    render() {
        let routes = this.props.routes;
        console.log(this.props.params)
        routes = routes.map((item, i) => {
            return (
                <li key={i}>
                    <Link
                        onlyActiveOnIndex={true}
                        to={item.path || ''}>
                    </Link>
                </li>
            );
        })

        return (
            <ol className="breadcrumb">
                {routes}
            </ol>
        );
    }
}