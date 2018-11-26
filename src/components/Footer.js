import React, { Component } from "react";
import Navigation from "./Navigation";

class Footer extends Component {
    render = () => {
        return (
            <footer>
                <div className="newsletter">
                    <div>
                        <h2>newsletter</h2>
                        Subscribe to our free weekly newsletter and never miss a
                        thing. No spam. Only hand-picked lifestyle trends.
                        <div className="subscribe-input">
                            <input
                                type="email"
                                placeholder="Enter your email"
                            />
                            <button>subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="options">
                    <div className="navigation">
                        <h2>navigation</h2>
                        <Navigation />
                    </div>
                    <div className="testimonial">
                        <h2>thuraya</h2>
                        <blockquote>
                            " Lorem ipsum dolor sit amet. Lorem ipsum dolor
                            sit amet. Lorem ipsum dolor sit amet. Lorem
                            ipsum dolor sit amet. Lorem ipsum dolor sit
                            amet. "
                        </blockquote>
                    </div>
                    <div className="socials">
                        <h2>follow us</h2>
                        <ul>
                            <li>
                                <a href="#" className="facebook-icon" />
                            </li>
                            <li>
                                <a href="#" className="twitter-icon" />
                            </li>
                            <li>
                                <a href="#" className="instagram-icon" />
                            </li>
                        </ul>
                    </div>
                </div>
                <p>
                    ©2018 - Thuraya - All rights reserved. - Developed by
                    <a href="mailto:pdgago.ballester@gmail.com">
                        {" "}
                        Pablo David Gago.
                    </a>
                </p>
            </footer>
        );
    };
}

export default Footer;
