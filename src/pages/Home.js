// Home.js 
import React from "react";

const Home = () => {
    return (
        <div>
            <div id="hero-home" className="mb-5">
                <img className="img-fluid" src={process.env.PUBLIC_URL + "/hero-top-bg.svg"} />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12"></div>
                        <div className="col-md-6 col-12">
                            <div className="">
                                <h2 className="text-shadow-dark text-light text-end fw-bold display-4 py-4 px-3">Homepage</h2>
                                <p className="text-shadow-dark text-light text-end lead fs-4 py-4 px-3">Welcome to the home page. Place the content here for the Brand or Product.</p>
                                <ul className="nav nav justify-content-end">
                                    <li className="nav-item text-shadow-dark h1">
                                        <a className="nav-link text-white" href="#">
                                            <i className="bi bi-github"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item text-shadow-dark h1">
                                        <a className="nav-link text-white" href="#">
                                            <i className="bi bi-instagram"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item text-shadow-dark h1">
                                        <a className="nav-link text-white" href="#">
                                            <i className="bi bi-wordpress"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="img-fluid" src={process.env.PUBLIC_URL + "/hero-bottom-bg.svg"} />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-12"></div>
                    <div className="col-md-4 col-12">
                        <div className="card my-5">
                            <img src="https://images.pexels.com/photos/6664375/pexels-photo-6664375.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="text-center lead fs-3">About us</h5>
                                <hr className="d-block mx-auto w-50" />
                                <p className="text-center lead fs-6">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="card my-5">
                            <img src="https://images.pexels.com/photos/192136/pexels-photo-192136.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="text-center lead fs-3">Contact us</h5>
                                <hr className="d-block mx-auto w-50" />
                                <p className="text-center lead fs-6">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-12"></div>
                </div>
            </div>
        </div>
    );
};

export default Home;