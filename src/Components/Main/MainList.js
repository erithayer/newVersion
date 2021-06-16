import './MainList.css'
import React from 'react'
// import { FaFacebookSquare } from 'react-icons/fa'
// import { FaTwitterSquare } from 'react-icons/fa'
// import { FaInstagramSquare } from 'react-icons/fa'
import Loading from '../Loading'
// import defImage from '../../images/MAIN.jpg'
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo-5.png'

class MainList extends React.PureComponent {
    constructor(){
        super()
        this.state = {
            loading: false,
            general: [],
            positions: [],
            error: false,
            searchQuery:'',
            filteredList: [],
            scrollNav: false,
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(nextProps.click);
    //     console.log(this.props.click);
    //     if(nextProps.click === this.props.click)
    //     return false;  
    //   }

    componentDidMount() {
        this.setState({
            loading: true,
        })
        
        fetch(`https://api.erithay.com/things`)
            .then(response => response.ok ? response.json() : Promise.reject() )
            .then(data =>  this.setState({
                loading: false,
                general: data
            }))
           this.state.general.map(position => {
               if(position){
                   this.setState({
                       positions:this.state.positions.push(position)
                   })
               }
           })
           window.addEventListener('scroll', this.changeNav)
    }

    handleCardClick = (item) => {
        this.props.history.push(`/details/${item.link}`)

    }

    handleFacebookClick = (event, item) => {
        event.stopPropagation()
        const itemFacebook = item.facebook
        window.open(itemFacebook)
        
    }

    handleDefImage = (ev) => {
        console.log(ev.target.src)
    }

    handleSearch = (event) => {
        event.target.value = ("" + event.target.value).toLowerCase();
        const value = event.target.value
        const filteredThings = this.state.general.filter(item => {
            return (
                item.name.includes(value) || item.surname.includes(value)
            )
        })
        this.setState({
            filteredList:filteredThings,
            searchQuery: value    
        })
        console.log(filteredThings, "filtered")

    }
    scrollToTop = () => {
        //   window.scrollTo(0, 0);
          window.scrollTo({top: 0, behavior: 'smooth'})
         
      }    
      changeNav = () => {
        if(window.scrollY >= 190) {
          this.setState({scrollNav: true})
         } else {
            this.setState({scrollNav: false})
        }
     }
    render(){
        const {click} = this.props
        const { general, loading, error,inputValue, searchQuery, filteredList, scrollNav } = this.state
        // console.log(this.state.positions,"positions")
        if(loading){
            return <Loading />
        }
        if(searchQuery === ''){
        return(
            
        
            <div  className="Container">
                <nav className="navbar">                     
                    <div className="nav-container">
                        <NavLink to="/" onClick={this.scrollToTop} className={scrollNav ? "nav-logo-show" : "nav-logo-hidden"}><img src={logo} alt=""/></NavLink>
                        <div className="input">
                            <input 
                                type="text"
                                onChange={this.handleSearch}
                                value={this.state.searchQuery}
                                placeholder="Որոնում"
                            />
                        </div>
                    </div>
                </nav>
                <div className="cards">
                  
                {general.map(item => {
                    return(
                        <div className="card card1" key={item.ID} onClick={()=>this.handleCardClick(item)} >
                            <div className="container">
                                <img 
                                    // onError={this.src='../../images.search.png'}
                                    src={ `https://api.erithay.com/things/${item.ID}/img`} 
                                    alt="image missing" 
                                    className="Image"
                                    // onError={this.handleDefImage}
                                    
                                />
                            </div>                              
                            <div className="details">
                                <h3> {item.name} {item.surname}</h3>
                                {/* <p>{item.sex}</p> */}
                                <p>{item.positions.map(pItem => {
                                    return(
                                        <h4>{pItem.name}</h4>
                                    )
                                    
                                })}</p> 
                               
                            </div>
                            
                        </div>
                    )
                })}
                
                
            </div>
        </div>
    )}else{
        return(
            <div  className="Container">
                <nav className="navbar">                     
                    <div className="nav-container">
                        <NavLink to="/" onClick={this.scrollToTop} className={scrollNav ? "nav-logo-show" : "nav-logo-hidden"}><img src={logo} alt=""/></NavLink>
                        <div className="input">
                            <input 
                                type="text"
                                onChange={this.handleSearch}
                                value={this.state.searchQuery}
                                placeholder="Որոնում"
                            />
                        </div>
                    </div>
                </nav>
              <div className="cards">
                {filteredList.map(item => {
                    return(
                        <div className="card card1" key={item.ID} onClick={()=>this.handleCardClick(item)} >
                            <div className="container">
                                <img 
                                    // onError={this.src='../../images.search.png'}
                                    src={ `https://api.erithay.com/things/${item.ID}/img`} 
                                    alt="image missing" 
                                    className="Image"
                                    // onError={this.handleDefImage}
                                    
                                />
                            </div>                              
                            <div className="details">
                                <h3> {item.name} {item.surname}</h3>
                                {/* <p>{item.sex}</p> */}
                                <p>{item.positions.map(pItem => {
                                    return(
                                        <h4>{pItem.name}</h4>
                                    )
                                    
                                })}</p> 
                               
                            </div>
                            
                        </div>
                    )
                })}
                
                
            </div>
        </div>
        )
    }
        }
        
}
    


export default MainList