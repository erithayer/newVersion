import './Navbar2.css'
import { NavLink } from 'react-router-dom'
import {useState } from 'react'
import { useEffect} from 'react'
// import {handleClick} from '../../Components/Helpers/Helpers' 
// import menu from '../../images/menu.svg'
import logo from '../../images/logo-5.png'
// import search from '../../images/search-gray.png'
import Search from '../Search/Search'

function Navbar2 (props) {
    // const [click, setClick] = useState(false)
    // const {click, setClick} = props
    // const handleClick = () => setClick(!click)
    const [scrollNav, setScrollNav] = useState(false)
    // const closeMenu = () => {
    //     setClick(false)
    // }
    const [inputValue, setInputValue] = useState("")
     const changeNav = () => {
        if(window.scrollY >= 190) {
          setScrollNav(true)
         } else {
             setScrollNav(false)
        }
     }
  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const ScrollToTop = () => {
    //   window.scrollTo(0, 0);
      window.scrollTo({top: 0, behavior: 'smooth'})
     
  }
    return(
        <nav className="navbar">                     
            <div className="nav-container">
                <NavLink to="/" onClick={() => ScrollToTop()} className={scrollNav ? "nav-logo-show" : "nav-logo-hidden"}><img src={logo} alt=""/></NavLink>
                <Search /><ul>
                    {/* <li className="search"><div className="search-div"><input type="text" placeholder="Որոնում"/><img src={search} alt=""/></div></li> */}
                    {/* <li className="nav-item" >
                        <NavLink  
                            exact={true}
                            onClick={() => closeMenu()} 
                            to="/" 
                            className="nav-links"
                            activeClassName={click ? "" : "selected"}
                            id="home"><span>Գլխավոր</span> 
                        </NavLink></li>              
                    <li className="nav-item " >
                        <NavLink 
                             exact
                            onClick={() => closeMenu()} 
                            to="/erithayer" 
                            className="nav-links erithay"
                            activeClassName={click ? "" : "selected"}><span>երիտհայեր</span> 
                        </NavLink></li>
                    <li className="nav-item" >
                        <NavLink 
                            onClick={() => closeMenu()} 
                            to="/statistics" 
                            className="nav-links"
                            activeClassName={click ? "" : "selected"}><span>Վիճակագրություն</span>
                        </NavLink></li>
                    <li className="nav-item" >
                        <NavLink 
                            onClick={() => closeMenu()} 
                            to="/about" 
                            className="nav-links"
                            activeClassName={click ? "" : "selected"}><span>Մեր մասին</span>
                        </NavLink></li> */}
                        
                    {/* <li className="nav-item active" ><NavLink onClick={() => closeMenu()} to="/login" className="nav-links login">Մուտք</NavLink></li> */}
                    {/* <li className="nav-item" id="login-button">
                        <NavLink 
                            onClick={() => closeMenu()} 
                            to="/login" 
                            className="nav-links button">
                                <button 
                                    className="login-button" 
                                    onClick={() => closeMenu()}>
                                        Մուտք
                                </button>
                        </NavLink></li> */}
                        
                        {/* <li className="search"><input type="text" placeholder="Որոնում"/><i class="fas fa-search"></i></li>                  */}
                </ul>
                {/* <div className="nav-icon" onClick={() => handleClick()}>
                    <i className={click ? 'fas fa-times ' : 'fas fa-bars'}></i>
                </div> */}
                
            </div>
        </nav>
    )
}


export default Navbar2


















