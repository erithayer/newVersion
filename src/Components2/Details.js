import {useState, useEffect} from 'react'
 import './Details.css'



function Details (props) {
    // window.scrollTo(0, 0)
    const [state, setState] = useState({
        loading: false,
        details: []
    })
    const link = props.match.params.name
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/erithayer/${link}/${link}`)
            .then(response => response.ok ? response.json() : Promise.reject())
            .then(data => {
                setState(prevState => ({...prevState, details: data}))
            }) 
    },[link])

    const {click} = props
    
    return(
        <div>
            {state.details.map((item) => {
                return(
                    <div className={click ? "detail-container active" : "detail-container"} key={item.rank}>
                        <div className="top-container" >
                            <div className="image">
                                <img src={item.img} alt=""/>
                            </div>
                            <div className="info">
                                <h3>{item.firstName} {item.lastName}</h3>
                                <div className="details">
                                    <p><span>Կարողությունը: </span> {item.netWorth}</p>
                                    <p><span>Տարիքը: </span> {item.age}</p>
                                    <p><span>Ծննդավայրը: </span> {item.cityBorn}</p>
                                    <p><span>Պաշտոնը: </span> {item.position}</p>
                                    <p><span>Մասնագիտությունը: </span> {item.proffesion}</p>
                                    <p><span>Կուսակցությունը: </span> {item.party}</p>
                                </div>
                                
                                
                            </div>
                            
                        </div> 
                        {/* <div className="line"></div> */}
                        <div className="biography">
                               <div className="title"><h2>Կենսագրություն</h2></div> 
                                <p>{item.biography}</p>
                        </div> 
                    </div>
                    
                    
                )
            })}
        </div>
    )
}




export default Details
//setState(prevState => ({...prevState, details: data})





