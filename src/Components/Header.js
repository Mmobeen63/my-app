import React from "react"
import siteLogo from "../Assets/godiva.png"
import "../style.css"

export function Header(){
    return(
            <header>
                <nav className="nav-items">
                    <img src={siteLogo} width= '100px'/>
                    <ul className="header-item">
                        <li> first item </li>
                        <li> second item</li>
                        <li> third item</li>
                        <li> fourth item</li>        
                    </ul>
                </nav>
            </header>
    )
}