import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer>
            <h6>© Copyright 2021, Makeup Inc.</h6>
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
        </footer>
    )
}

export default Footer;