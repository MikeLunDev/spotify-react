import React, { Component } from 'react'
import logo from '../assets/logo.png'



export default class SpotifySideBar extends Component {
    render() {
        return (
            <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 pl-0 h-100">

            <nav className="navbar navbar-expand-lg navbar-dark d-flex flex-column justify-content-between align-items-start h-100 mywidth">

                <div>
                    <a className="navbar-brand py-4 pl-2" href="#">
                        <img src={logo}
                            width="130px" height="40px"/>
                                
                            </a>


                    <ul className="navbar-nav pl-1 mr-auto flex-column">
                        <li className="nav-item pt-2 py-1">
                            <a id="home" className="nav-link spotifyFont active" href="#"> <i
                                    className="fas fa-home pr-1"></i>
                                Home</a>
                        </li>
                        <li className="nav-item  py-1">
                            <a className="nav-link spotifyFont" href="#search"><i className="fas fa-search pr-1"></i>
                                Search</a>
                        </li>
                        <li className="nav-item spotifyFont py-1">
                            <a className="nav-link spotifyFont" href="#"> <i className="fas fa-list-ul pr-1"></i> Your
                                Library</a>
                        </li>
                    </ul>

                </div>
                <div className="align-self-center w-100 ">
                    <ul className="navbar-nav pl-1 flex-column align-items-center">

                        <li className="py-2 pr-2">
                            <button
                                className="mySignup d-xs-inline-block d-sm-none d-md-none d-lg-inline-block">SIGNUP</button>
                        </li>

                        <li className="py-2 pr-2">
                            <button
                                className="myLogin d-xs-inline-block  d-sm-none d-md-none d-lg-inline-block">LOGIN</button>
                        </li>
                        <li className="py-2 pr-3 text-center">
                            <p>Cookie Policy | Privacy</p>
                        </li>
                    </ul>

                </div>
            </nav>    
        </div>
                )
    }
}
