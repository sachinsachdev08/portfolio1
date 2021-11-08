import React, { Component } from 'react';
import "./components.css";
import about from "../about.png"
import languages from "../languages.png"
import react1 from "../react.png"
import github from "../github-logo.png"

export default class About extends Component{
    render(){
        return(
            <div className="aboutComp" id="about1">
                <div>
                    <img src={about} className="skills" alt=""/>
                </div>
                <div className="aboutdesc">
                    <p className="aboutdesc1">About Me</p>
                    <hr className="hr"/>
                    <p>I am an Aspiring Full Stack Developer.I have good problem solving skills and I like to build simple, interactive and free-flowing designs.I am an IT Engineer and I have graduated in the year 2021.</p>
                    <p>I can speak fluent English and Hindi languages. Right Now, I am learning to become a Full Stack Developer and would love to work in this field</p>
                    <div className="technologies">
                        <p style={{padding:'5px'}}>Languages/Library/Technologies</p>
                        <img src={languages} className="languages" alt=""/>
                        <img src={react1} className="languages1" alt=""/>
                        <img src={github} className="languages1" alt=""/>

                    </div>
                </div>
            </div>
        )
    }
}