import { useEffect, useState } from "react";
import userApi from "../utils/userApi"

function MainProfile(){
    const [user, setUser] = useState(null) 

    useEffect(() => {
    const fetchUser = async () => {
        console.log(localStorage.getItem("email"))
         try{
            const response = await userApi.post("internal/profiles/get", {email: localStorage.getItem("email")});

            console.log(response.data)

            setUser(response.data);

            console.log(user);
        }catch(error){
            console.log("Error");
        }
    }

    fetchUser();
}, []);

    useEffect(() => {
        if(user != null){
             console.log("USER UPDATED:", user.email);   
        }
}, [user]);

const updateUser = async () => {
    try{
        const response = await userApi.post("/internal/profiles/update", user)
        console.log(response)
    }catch(error){
            console.log("Errors during registration ", error.response)
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
    <div>
            <div>
                <input placeholder="First Name" name="name" onChange={inputHandler}></input>
            </div>
            <div>
                <input placeholder="Last Name" name="surname" onChange={inputHandler}></input>
            </div>
            <div>
                <input placeholder="Faculty Number" name="facultyNumber" onChange={inputHandler}></input>
            </div>
            <div>
                <input placeholder="Phone number" name="phoneNumber" onChange={inputHandler}></input>
            </div>
            <div>
                <input placeholder="Speciality" name="specialty" onChange={inputHandler}></input>
            </div>
            <button onClick={updateUser}> Update </button>
    </div>
)
}

export default MainProfile;