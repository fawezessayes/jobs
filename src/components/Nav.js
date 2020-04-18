// packages
import React from "react";

// components
// code
const Nav = (props) =>{
    return(
        <nav>
            <h2>Dimitiri Diana</h2>
            <div id="menu">
                <img onMouseOver={props.menuAnimation} src="/img/menu.png" alt="menu"/>
                <div>
                    <p className="m">Home</p>
                    <p className="m">About</p>
                    <p className="m">Contact</p>
                    <p className="m">story</p>
                </div>   
            </div>
        </nav>
    )
}
export default Nav;