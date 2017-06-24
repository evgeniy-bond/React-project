import React, { Component } from 'react'

export default class Albums extends Component {

    static title = 'Albums';
    
    constructor() {
        super()

        this.state = {
            albums: []
        };
    }

    componentDidMount() {
        fetch('/albums.json')
            .then(response => response.json())
            .then(data => this.setState({ albums: data }))
            .catch(alert);
    }

    render() {
        let albums = this.state.albums;
        albums = albums.map((album, i) => {
            return (
                <div className="col-xs-4" key={i}>
                    <div className="thumbnail">
                        <img src={album.img} alt={album.alt} />
                        <div className="caption">
                            <h3>{album.artist}</h3>
                            <p>{album.album}</p>
                            <p><a href={`artists${album.link}`} className="btn btn-primary" role="button">More</a></p>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className="col-xs-12">
                <div className="panel panel-default panel-container">
                    <div className="panel-heading">
                        <h2>
                            <span className="category">Albums</span>
                        </h2>
                    </div>
                    <div className="panel-body main-container">
                        <div className="row">
                            {albums}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}