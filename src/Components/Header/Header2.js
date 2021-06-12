import './Header2.css'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
// import {useState} from 'react'

function Header (props) {
    // const {setClick} = props
    // const handleClick = () => {setClick(false)}
    return(
        <Link to="/"><div className="Header-container">
            
            <div className="Container">
                <div className="Logo"><img src={logo} alt=""/></div>
                {/* <div className="Title"><h1>Վառել բոլորին տնով տեղով</h1></div> */}
            </div>           
            <div className="title">
                
            </div>
        </div></Link>
    )
}

export default Header

















