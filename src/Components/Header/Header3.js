import './Header3.css'
// import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
// import {useState} from 'react'
import search from '../../images/search.png'
function Header3 (props) {
    // const {setClick} = props
    // const handleClick = () => {setClick(false)}
    return(        
            <div className="Header-container">            
                <div className="Container">
                    <div className="Logo"><img src={logo} alt=""/></div>
                    <div className="Search"><input type="text" placeholder="Որոնում"/><img src={search} alt=""/></div>
                </div>    
            </div>        
    )
}

export default Header3

















