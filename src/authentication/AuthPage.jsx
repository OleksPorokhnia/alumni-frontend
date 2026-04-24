import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import authApi from '../utils/authApi'

function AuthPage(){
    const [user, setUser] = useState({})
    const [error, setError] = useState([])
    
    const currentUrl = useLocation();

    const registration = async () => {
        try{
            const response = await authApi.post("auth/signup", user)
        }catch(error){
            console.log("Errors during registration ", error.response)
            setError(error.response.data);
        }
    }

    const login = async () => {
        try{
            const response = await authApi.post("auth/login", user)
            console.log(response.data)
            localStorage.setItem("email", response.data);
        }catch(error){
            console.log("Errors during login ", error.response.data)
            setError(error.response.data);
        }
    }

    const inputHandler = (e) => {
      const {name, value} = e.target;
      setUser(prevUser => ({
        ...prevUser,
        [name] : value
      }))
      console.log(user)
    }

    return(
        <>
            <div>
                <div>
                    <input type="text" name="username" placeholder="username" onChange={inputHandler}></input>
                    <input type="password" name="password" placeholder="password" onChange={inputHandler}></input>
                    {
                        currentUrl.pathname.endsWith("/registration")
                        ? 
                        <button onClick={registration}>Sign In</button> 
                        :
                        <div>
                            <button onClick={login}>Login</button>
                            <a href='http://localhost:8080/auth/login/google'>Login via Google</a>
                        </div>
                    }
                </div>
            </div> 
        </>
    )
}

export default AuthPage;