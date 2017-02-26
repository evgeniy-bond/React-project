import React, { Component } from 'react'

export default class Albums extends Component {
    render() {
        return (
            <div className="col-xs-12">
                <div className="panel panel-default panel-container">
                    <div className="panel-heading">
                        <h1>
                            <span className="category">Albums</span>
                        </h1>
                    </div>
                    <div className="panel-body main-container">
                        <div className="row">
                            <div className="col-xs-4">
                                <div className="thumbnail">
                                    <img src="http://www.metal-archives.com/images/1/2/4/6/1246_photo.jpg" alt="..." />
                                    <div className="caption">
                                        <h3>Nasum</h3>
                                        <p>Swedish Grindcore</p>
                                        <p><a href="#" className="btn btn-primary" role="button">More</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-4">
                                <div className="thumbnail">
                                    <img src="http://www.metal-archives.com/images/1/2/4/6/1246_photo.jpg" alt="..." />
                                    <div className="caption">
                                        <h3>Nasum</h3>
                                        <p>Swedish Grindcore</p>
                                        <p><a href="#" className="btn btn-primary" role="button">More</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-4">
                                <div className="thumbnail">
                                    <img src="http://www.metal-archives.com/images/1/2/4/6/1246_photo.jpg" alt="..." />
                                    <div className="caption">
                                        <h3>Nasum</h3>
                                        <p>Swedish Grindcore</p>
                                        <p>
                                            <a href="#" className="btn btn-primary" role="button">More</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}