import React from "react";
import ".//Footer.css"
const Footer = (props) =>{
    const {handleaNoSearch} = props
    return(
        <footer className="footer_box" onClick={handleaNoSearch}>
            <h2>Power By: QUINEL DEVELOPERS</h2>
        </footer>
    );
};

export default Footer;