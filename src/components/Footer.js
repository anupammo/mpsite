//  Footer.js 
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="text-center pt-3">
                            <Link className="text-white" to="/">Home</Link> | <Link className="text-white" to="/about">About</Link> | <Link className="text-white" to="/contact">Contact</Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="text-center">&copy; 2023 Brand Name</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;