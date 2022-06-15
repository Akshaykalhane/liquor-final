import React from "react";
import { Link } from 'react-router-dom';
import './footer.css'
const Footer = () => {
    return (
        <>

            <footer id="footer">
                <div className="footabout">
                    <h2>About</h2>
                    <p>Liquorrrr is website for buying online liquor. from liquorrr you can buy liquor of your choice from home
                        using mobile or Laptop. We have all types of liquor. we also have our limited Editon.</p>
                    <p><span><i className="fa fa-facebook" aria-hidden="true"></i></span>
                        <span><i className="fa fa-twitter" aria-hidden="true"></i></span>
                        <span><i className="fa fa-instagram" aria-hidden="true"></i></span></p>

                </div>
                <div className="footquicklink">
                    <h2>Quick Link</h2>
                    <ul>
                        <li> <Link to="/beer">Beer</Link> </li>
                        <li> <Link to="/wine">Wine</Link> </li>
                        <li> <Link to="/vodka">Vodka</Link> </li>
                        <li> <Link to="/whisky">Whisky</Link> </li>
                        <li> <Link to="/rum">Rum</Link> </li>
                        <li> <Link to="/tequila">Tequila</Link> </li>
                    </ul>
                </div>
                <div className="footcontact">
                <h2>Contact</h2>
                        <ul>
                            <li><span><i className="fa fa-map-marker" aria-hidden="true"></i></span> Sai Nagar, Gulshan Tower , Amravati
                            </li>
                            <li><span><i className="fa fa-envelope" aria-hidden="true"></i> </span> liquor2211@gmail.com</li>
                            <li><span><i className="fa fa-mobile" aria-hidden="true"></i> </span> 8844918439</li>
                        </ul>
                </div>
                <div className="copyright">
                    <p> &copy; Copyright 2022</p>
                </div>
            </footer>
        </>

    )
}

export default Footer;