import React, { Component } from 'react';

export default class Album extends Component {
    static title = 'Album';
    
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        fetch('/albums.json')
            .then(response => response.json())
            .then(data => {
                let artist;
                data.forEach(item => {
                    if (item.artist.toLowerCase() == this.props.params.artist.toLowerCase() ) {
                        artist = item;
                        this.setState(artist);
                    }
                });
            })
            .catch(alert);
    }

    render() {
        return (
            <div className='col-xs-12'>
                <div className="row">
                    <div className="col-xs-4">
                        <img src={this.state.img} alt={this.state.alt} className="img-responsive" />
                    </div>
                    <div className="col-xs-8">
                        <div className="caption">
                            <h3>{this.state.artist}</h3>
                            <p>
                                {this.state.album}
                            </p>
                            <p>
                                {this.state.fullInfo}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//вопрос не решен