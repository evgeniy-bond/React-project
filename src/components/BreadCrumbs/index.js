import React, { Component } from 'react';
import { Link } from 'react-router'

export default class BreadCrumbs extends Component {
    render() {
        let { children, routes, ...props } = this.props.routes;

        console.log(location.pathname);

        const depth = routes.length;
        routes = routes.map((item, i) => {

            try { 
                var title = item.component.title;
            } catch (err) {
                title = ''
            }

            try { 
                var path = item.component.title;
            } catch (err) {
                path = ''
            }

            return (
                <li key={i}>
                    <Link
                        onlyActiveOnIndex={true}
                        to={path}>
                        {title}
                    </Link>
                    {(i + 1) < depth && '\u2192'}
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