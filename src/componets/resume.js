import React, { Component } from 'react';
import "./components.css";
import education from "../education.png"

export default class Resume extends Component{
    render(){
        return(
            <>
            <p className="aboutdesc1" style={{textAlign:'center'}}>Resume</p>
            <hr className="hr"/>
            <div className="resume-main" id="resume">
            
            
            <div className="resume-resp">
            <p className="resume-heading">Additional Projects</p>
            <hr className="resume-hr"/>
            <ul className="resume-ul">
                <li className="resume-list">
                    <div className="resume-div">
                    <span className="resume-desc">
                        <p>Monitoring of an Epidemic using Social media data.</p>
                        <p style={{fontSize:'small'}}>ML,NLP</p>
                    </span>
                    <span className="resume-tag">2019-2020</span>
                    </div>
                </li>
                
               
            </ul>
            <p className="resume-heading">Education</p>
            <hr className="resume-hr"/>
            <ul className="resume-ul">
                <li className="resume-list">
                    <div className="resume-div">
                    <span className="resume-desc">
                        <p>Vivekanand Education Society's Institute of Technology, Chembur, Mumbai</p>
                        <p style={{fontSize:'small'}}>BE (Information Technology)</p>
                    </span>
                    <span className="resume-tag">2017-2021</span>
                    </div>
                </li>
            </ul>
            </div>
            <div className="resume-img">
                <img src={education} alt=""/>
            </div>
            </div>
            </>
        )
    }
}