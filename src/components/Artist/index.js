import React, { Component } from 'react';

export default class Artist extends Component {

    render() {
        return (
            <div className='col-xs-12'>
                <div className="row">
                    <div className="col-xs-4">
                        <img src={this.props.params.img} alt={this.props.params.alt} className="img-responsive" />
                    </div>
                    <div className="col-xs-8">
                        <div className="caption">
                            <h3>{this.props.params.artist}</h3>
                            <p>
                                {this.props.params.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//вопрос не решен