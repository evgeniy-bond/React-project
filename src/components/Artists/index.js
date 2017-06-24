import React, { Component } from 'react'
import BandCard from '../BandCard'

export default class Artists extends Component {
    static title = 'Artists';
    
    constructor() {
        super()

        this.state = {
            artists: []
        }
    }
    
    componentDidMount() {
        fetch('./artists.json')
            .then(response => response.json())
            .then(data => this.setState({ artists: data }))
            .catch(alert);
    }

    render() {
        let artists = this.state.artists;

        artists = artists.map((artist, i) => {
            return (
                <div className="col-xs-3" key={i}>
                    <BandCard
                        name={artist.artist}
                        description={artist.description}
                        link={`artists${artist.link}`}
                        img={artist.img}
                        alt={artist.alt}
                    >
                    </BandCard>
                </div>
            );
        })

        return (
            <div className="col-xs-12">
                <div className="panel panel-default panel-container">
                    <div className="panel-heading">
                        <h3>
                            <span className="category">Artists</span>
                        </h3>
                    </div>
                    <div className="panel-body main-container">
                        <div className="row">
                            {artists}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}