// packages
import React from "react";

// components
// code
const Focus = (props) =>{
    return(
        <section className="focus">
            <div id="placeholder"></div>
            <div id="taher" className="name">
                <h1>Taher Tabba5</h1>
                <h4>Pro cook</h4>
            </div>
            <div id="joni" className="name">
                <h1>Joni Morel</h1>
                <h4>Photographer</h4>
            </div>
            <div id="marie" className="name">
                <h1>Marie Joneh</h1>
                <h4>Medel</h4>
            </div>
            <div className="imgs">
                <div className="img img1"></div>
                <div className="img img2"></div>
            </div>
            <div className="nav_list">
                <p id="one" onClick={props.navigate}>01</p>
                <p id="two" onClick={props.navigate} className="middle">02</p>
                <p id="three" onClick={props.navigate} >03</p>
            </div>
        </section>
    )
}
export default Focus;