import React from "react";
import '../App.css';

const Nav = (props) => {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                    <li>
                        <a href="/blog">Blog</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
