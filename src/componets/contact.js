import React, { Component } from 'react';
import "./components.css";

export default class Contact extends Component{
    render(){
        return(
            <div className="contact-main" id="contact">
                <p className="aboutdesc1"  style={{textAlign:'center'}}>Contact me</p>
                <hr className="hr"/>
                <div className="contact-flex">
                    <div className="contact-div1">
                        <div style={{width:'70%'}}>
                        <p className="contact-heading">Lets Connect</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm</p>
                        <div className="contact-details">
                            <div style={{display:'flex'}}>
                                <p>Email : sachinsachdev28@gmail.com</p>
                                
                            </div>
                            <div style={{display:'flex'}}>
                                <p>Phone : 92284670395</p>
                            </div>

                            <div style={{display:'flex'}}>
                                <p>Address : Akola</p>
                            </div>

                            <div style={{display:'flex'}}>
                                <p>Github : <a className="github" href="https://github.com/sachinsachdev08" target="_blank" rel="noreferrer">https://github.com/sachinsachdev08</a></p>
                            </div>
                            
                            
                        </div>
                        </div>
                    </div>
                    <div className="contact-div">
                        <p className="contact-heading">Send me a Message</p>
                        <label>First and Last Name</label> <br/>
                        <input type="text"/><br/><br/>
                        <label>Phone Number</label> <br/>
                        <input type="number"/><br/><br/>
                        <label>Email Address</label> <br/>
                        <input type="text"/><br/><br/>
                        <label>Message</label> <br/>
                        <textarea cols="50" rows="5"></textarea><br/><br/>
                        <button className="send-btn">Send Message</button>
                    </div>
                </div>
            </div>
        )
    }
}