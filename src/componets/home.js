import React, { Component } from 'react'
import "./components.css"
import home from "../home.png"
import { Link } from 'react-scroll'
import resume from "../resume.pdf"
export default class Home extends Component{
    render(){
        return(
            <div id="about">
                <div className="about1">
                    <p className="para1">Hi, I am Sachin Sachdev</p>
                    <p className="para2">A Full Stack Developer</p><br/>
                    <p className="para3">Get Ready to turn ideas into Reality.</p>
                    <a href className="hire"><Link to="contact" spy={true} smooth={true}>Hire Me</Link></a>
                    <a href={resume} className="resume" download="Resume" target="_blank" rel="noreferrer">Get Resume</a>
                </div>
            
                <div>
                    <img src={home} className="img1" alt=""/>
                </div>
            </div>
        )
    }
}
