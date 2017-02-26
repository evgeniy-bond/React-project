import React, { Component } from 'react';
import { Link } from 'react-router'

import NavLink from '../../components/NavLink'

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Tube.fm</Link>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><NavLink to="/" onlyActiveOnIndex={true}>Главная</NavLink></li>
                            <li><NavLink to="/artists">Исполнители</NavLink></li>
                            <li><NavLink to="/albums">Альбомы</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}