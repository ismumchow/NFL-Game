import React from "react";

const Navbar = (props) => (
    <nav className="navbar">
            <span>
                <a href = "/" id="logo"> <span className="brand"></span></a>
            </span>

            <span className="">
                {props.message}
            </span>

            <span>
                Score: {props.correct} | Top Score: {props.topscore}
            </span>
    </nav>
)
export default Navbar;