import './Navbar.css'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import {useState} from 'react'

function  Navbar () {
    const [showMenu, setShowMenu] = useState(true)
    const [menuChecked, setMenuChecked] = useState(true)
    const toggleIcon = () => {
        // console.log('event.target.checked')
        setShowMenu(!showMenu)
        setMenuChecked(!menuChecked)
    }
    // console.log(menuChecked)

    let menu 
    
    if(showMenu) {
        menu = <div class="menu">
        <div>
            <div  className='click'>
            <ul>
                <li ><Link onClick={() => toggleIcon()}  to="login" >Մուտք</Link></li>
                <li><Link to="/register" onClick={toggleIcon} >Գրանցվել</Link></li>
                <li><Link to="/aboutUs">Մեր մասին</Link></li>
                <li><Link to="/statistics">Վիճակագրություն</Link></li>
            </ul>
            </div>
        </div>
        </div>
    }
    
    return(
        <div className="Navbar-container">
            
            <div class="menu-wrap">
                <input type="checkbox"  class="toggler" />
                <div class="hamburger" onClick=""><div></div></div>{menu}
                {/* <div class="menu">
                <div>
                    <div>
                    <ul>
                        <li><Link to="login">Մուտք</Link></li>
                        <li><Link to="register">Գրանցվել</Link></li>
                        <li><Link to="aboutUs">Մեր մասին</Link></li>
                        <li><Link to="statistics">Վիճակագրություն</Link></li>
                    </ul>
                    </div>
                </div>
                </div> */}
            </div>
            <div className="Search">
               <input type="text" placeholder="Որոնում"/>
                <div className="Icon"><FiSearch /></div>
            </div>
            <div className="Nav-links">
                <Link to="/login">Մուտք</Link>
                <Link to="/register">Գրանցվել</Link>
                <Link to="/aboutUs">Մեր մասին</Link>
                <Link to="/statistics">Վիճակագրություն</Link>
                       
             </div>
            
        
        </div>
    )
}

export default Navbar









