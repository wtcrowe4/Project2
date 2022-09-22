import React from "react";
import '../App.css';
//react router

const Nav = (props) => {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/signin">Sign In</a>
                    </li>
                    <li>
                        <a href="/todos">To Do Lists</a>
                    </li>
                    <li>
                        <a href="/settings">Account Settings</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
