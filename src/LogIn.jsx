import "./Login.css"

function LogIn(){
return(
    <div className="log-in-div">

            <form className="log-in-formulary">
                <input className="log-in-user-name" type="text" placeholder="User Name"/>
                
                <br/>

                <input className="log-in-pasword" type="pasword" placeholder="Password"/>
            </form>


            <button className="log-in-button">Enter</button>
    </div>
)
}

export default LogIn