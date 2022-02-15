import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import './style.css';

const Footer = () => {
    return (
        <footer className="card">
            <div className="card-body row">
                <div className="col-6 text-start copy-rgt">
                    <h6>© Copyright 2021, Makeup Inc.</h6>
                </div>
                <div className="col-6 text-end">
                    <a href="#">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;