import "./Login.css"
import logo from "./images/Ikea_logo.svg.png"

function LogIn(){
return(
    <>
    <div className="log-in-div">
<img src={logo} alt="no img" className="logo"/>
            <form className="log-in-formulary">
                <input className="log-in-user-name" type="text" placeholder="User Name"/>
                
                <br/>

                <input className="log-in-password" type="pasword" placeholder="Password"/>
            </form>


            <button className="log-in-button">Enter</button>
    </div>
    </>
)
}

export default LogIn