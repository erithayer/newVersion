import './Header.css'
import { Link } from 'react-router-dom'
import erit from '../../erit.png'
// import {useState} from 'react'

function Header (props) {
    const {setClick} = props
    const handleClick = () => {setClick(false)}
    return(
        <div className="Header-container">
            <div className="Logo">
                <Link to="/">
                    <span onClick={() => handleClick()}>
                        <div className="erithayer">
                            <img src={erit} alt=""/>
                        </div>
                    </span> 
                </Link>
            </div>           
        </div>
    )
}

export default Header

















