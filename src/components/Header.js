import React, { Component } from "react";
import Navigation from "./Navigation";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        };
    }

    navToggle = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    render = () => {
        return (
            <header>
                <div className="logo">
                    <a href="#" />
                </div>
                <div className="options">
                    <div>
                        <button
                            onClick={this.navToggle}
                            className={
                                this.state.expanded
                                    ? "hamburger-btn expanded"
                                    : "hamburger-btn"
                            }
                        />
                        <button className="cart-btn" />
                    </div>
                </div>
                <Navigation expanded={this.state.expanded} />
            </header>
        );
    };
}

export default Header;
