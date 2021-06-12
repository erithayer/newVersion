import './Main.css'
import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import Loading from '../../src/Components/Loading'



class Main extends React.PureComponent {
    constructor(){
        super()
        this.state = {
            loading: false,
            general: []
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
        
        fetch('https://my-json-server.typicode.com/erithayer/newData/things')
            .then(response => response.ok ? response.json() : Promise.reject() )
            .then(data => this.setState({
                general:data,
                loading:false
            }))
            
    }

    handleCardClick = (item) => {
        this.props.history.push(`/details/${item.link}`)

    }

    handleFacebookClick = (event, item) => {
        event.stopPropagation()
        const itemFacebook = item.facebook
        window.open(itemFacebook)
        
    }
    render(){
        const {click} = this.props
        const {general, loading} = this.state
        // console.log(this.state.general[1].age)
        console.log('rendered')
        if(loading){
            return <Loading />
        }
        return(
            <div  className={click ? "Container active" : "Container"}>
              <div className="cards">
                {general.map(item => {
                    return(
                        <div className="card card1" key={item.id} onClick={()=>this.handleCardClick(item)} >
                            <div className="container">
                                <img src={item.img} alt="" className="Image"/>
                            </div>                              
                            <div className="details">
                                <h3>{item.firstName} {item.lastName}</h3>
                                <p>{item.position.first}</p>
                                {/* <div className="icon"><img src={facebook} alt=""/></div> */}
                                {/* <i className='icons'>
                                    <FaFacebookSquare onClick={(event) => this.handleFacebookClick(event,item)} className='faicon' style={{color:'#385d98'}} size={32}/>
                                    <FaTwitterSquare style={{color:'#00acee'}} size={32}/>
                                    <FaInstagramSquare style={{color:'#8a3ab9'}} size={32}/>
                                </i> */}
                            </div>
                            
                        </div>
                    )
                })}
                
                
            </div>
        </div>
    )
        }
        
}
    


export default Main