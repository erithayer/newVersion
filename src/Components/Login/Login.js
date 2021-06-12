import './Login.css'
// import {useEffect} from 'react'



function Login () {
    const toggleIcon = () => {
        console.log('event.target.checked')
        // setShowMenu(!showMenu)
    }
    // useEffect(() => toggleIcon() , [])
    return (
        <div className="Login">
            <div className="login-container">
                <div className="username"><input type="text" placeholder="username"/></div>
                <div className="password"><input type="text" placeholder="password"/></div>
                <button onClick={()=> toggleIcon()}>Login</button>
            </div>
            
        
        </div>
    )
}

export default Login







