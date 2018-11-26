import React, { Component } from "react";

class Navigation extends Component {
    render = () => {
        return (
            <nav className={this.props.expanded ? "expanded" : ""}>
                <ul>
                    <li>
                        <a href="#">home</a>
                    </li>
                    <li>
                        <a href="#">thuraya</a>
                    </li>
                    <li>
                        <a href="#">the collection</a>
                    </li>
                    <li>
                        <a href="#">blog</a>
                    </li>
                    <li>
                        <a href="#">stores</a>
                    </li>
                    <li>
                        <a href="#">contact</a>
                    </li>
                </ul>
            </nav>
        );
    };
}

export default Navigation;