import './MainList.css'
import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import Loading from '../Loading'
import defImage from '../../images/MAIN.jpg'


class MainList extends React.PureComponent {
    constructor(){
        super()
        this.state = {
            loading: false,
            general: [],
            positions: [],
            error: false,
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
           console.log(this.state.general.ID) 
           
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
    render(){
        const {click} = this.props
        const {general, loading, error} = this.state
        // console.log(this.state.positions,"positions")
        if(loading){
            return <Loading />
        }
        console.log(this.state.general, 'general id')
        return(
            <div  className={click ? "Container active" : "Container"}>
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
                                        <div>{pItem.name}</div>
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
    


export default MainList