import ReactDOM from "react-dom"
import React from "react"
import {Header} from "./Components/Header.js" 
import {MainComponent} from "./Components/MainComponent.js"
import {Footer} from "./Components/Footer.js"
import "./style.css"
import siteLogo from "./Assets/godiva.png"

function CustomComponent(){
    return(
        <div className="main-Container">
            <Header />
            <MainComponent />
            <Footer />
        </div>
    )
}
ReactDOM.render(<CustomComponent />,document.getElementById('root'))
