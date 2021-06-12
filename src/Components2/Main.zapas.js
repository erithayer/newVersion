import './Main.css'
import img1 from '../Images/img (1).jpg'
import img2 from '../Images/img (2).jpg'
import img3 from '../Images/img (3).jpg'
import img4 from '../Images/img (4).jpg'
import React from 'react'
import Loading from '../Components/Loading'

class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            loading: true,
            general: {}
        }
    }



    componentDidMount() {
        this.setState({
            loading: true,
        })
        // console.log(this.state.general)
        fetch(`http://localhost:3000/general`)
            .then(response => response.ok ? response.json() : Promise.reject() )
            .then(data => this.setState({
                general:data,
                loading:false
            }))
    }



    render(){
        if(this.state.loading){
            return(
                <Loading />
            )
        }else{
            console.log(this.state.general, 'render')
        const {general} = this.state
        return(
        <div className="Container">
            <div className="Grid-container">
                <div className="Item">
                    <img src={img1} alt=""/>
                    <h4>{general[0].firstName} {general[0].lastName}</h4>
                </div>
                <div className="Item">
                    <img src={img2} alt=""/>
                    <h4>name lastname</h4>
                </div>
                <div className="Item">
                    <img src={img3} alt=""/>
                    <h4>name lastname</h4>
                </div>
                <div className="Item">
                    <img src={img4} alt=""/>
                    <h4>name lastname</h4>
                </div>
                <div className="Item">
                    <img src={img1} alt=""/>
                    <h4>name lastname</h4>
                </div>
                <div className="Item">
                    <img src={img1} alt=""/>
                    <h4>name lastname</h4>
                </div>
            </div>
        </div>
    )
        }
        
}
    
}

export default Main