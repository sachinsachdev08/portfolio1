import React, { Component } from 'react';
import "./components.css";
import todo from "../todo.PNG"
import clock from "../clock.PNG"
import bloodbnk from "../bloodbnk.PNG"


export default class Portfolio extends Component{
    render(){
        return(
            <div id="portfolio">
                <p className="aboutdesc1"  style={{textAlign:'center'}}>Portfolio</p>
                <hr className="hr" style={{margin:'auto'}}/>
                <div className="projects-main" >
                    <a href="https://sachinsachdev08.github.io/to-do-js-final/" target="_blank" rel="noreferrer"><img className="projects" src={todo} alt=""/></a>
                    <a href="https://sachinsachdev08.github.io/Clock-1/" target="_blank" rel="noreferrer"><img className="projects" src={clock} alt=""/></a>
                    <img className="projects" src={bloodbnk} alt=""/>
                    
                </div>
            </div>

        )
    }
}