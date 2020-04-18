// packages
import React, {Component} from "react";
import ScrollReveal from 'scrollreveal'

// components
import Nav from "../components/Nav";
import Focus from "../components/Focus";
import Footer from "../components/Footer"
// code
class Main extends Component{
    constructor(props){
        super(props)
        this.state={
            hp: 1,
            worker: [
                {name: "Elena Morel", pro: "Photographer", start: "15/10/2015"},
                {name: "Taher Tabba5", pro: "pro cook", start: "15/10/2015"},
                {name: "Marie Joeh", pro: "Photographer", start: "15/10/2015"},
                    ],
        }
    }
    menuAnimation = (event) =>{
        ScrollReveal().reveal(".m", {delay:200, duration:600, distance:"100px", origin:"right", reset:true});
    }
    navigate(event){
        let hp = document.querySelector(".hp");
        let number = event.currentTarget.innerText;
        switch (number){
            case "01":
                hp.id = "hp1"
                break
            case "02":
                hp.id = "hp2"
                break
            default:
                hp.id = "hp3"
        }
    }
    render(){
        return(
            <section className="hp" id="hp1">
                <Nav menuAnimation={this.menuAnimation}/>
                <Focus navigate={this.navigate} />
                <Footer />
            </section>
        )
    }
}
export default Main