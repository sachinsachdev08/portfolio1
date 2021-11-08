import React, { Component } from 'react'
import {Link} from 'react-scroll';
import "./components.css"


export default class Navbar extends Component {
    render() {
        return (
            <>
            <div className="flexbox" id="home">
            <h2>Sachin Sachdev</h2>
            <ul className="nav">
                <li><Link to="about" activeClass="active" spy={true} smooth={true}>Home</Link></li>
                <li><Link to="about1" spy={true} smooth={true}>About</Link></li>
                <li><Link to="portfolio" spy={true} smooth={true}>Portfolio</Link></li>
                <li><Link to="resume" spy={true} smooth={true}>Resume</Link></li>
                <li><Link to="contact" spy={true} smooth={true}>Contact</Link></li>
            </ul>
            </div>
            </>
        )
    }
}
