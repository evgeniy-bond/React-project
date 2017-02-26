import React, { Component } from 'react'
import NavLink from '../NavLink'

export default class BandCard extends Component {
    render() {
        return (
            <div className="thumbnail">
                <img src={this.props.img} alt={this.props.alt} />
                <div className="caption">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.description}</p>
                    <p><NavLink to={this.props.link} className="btn btn-primary" role="button">More</NavLink></p>
                </div>
            </div>
        );
    }
}