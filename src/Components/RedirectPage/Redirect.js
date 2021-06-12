import React from 'react'

class Redirect extends React.Component {
    constructor(){
        super()
        this.state = {
            facebook: "",
            twitter: "",
            instagram: ""
        }

    }
    componentDidMount(){
        
        window.location.replace('https://www.google.com')
      }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Redirect