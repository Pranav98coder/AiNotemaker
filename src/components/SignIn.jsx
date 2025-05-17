import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import { useAuth } from "../config/AuthContext";
import { useState } from "react";
import {auth} from "../config/Firebase"
import { Link } from "react-router-dom";
import Notes1 from "./Notes1";

const SignIn = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {isLoggedIn,setIsLoggedIn}=useAuth();

    const LogIn=async()=>{
            console.log(isLoggedIn);
            
            
            await signInWithEmailAndPassword(auth,email,password).then((result) => {
                console.log(result.user);
                alert("User Logged In Successfully");
                setIsLoggedIn(true);
            }).catch((error) => {
                const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+mail.com$/;
                const passwordPattern = /^[0-9]{6}$/;

                if(!emailPattern.test(email)){
                    alert("Please enter email of the form: user@email.com")
                console.log(error.message);
                }
                else if(!passwordPattern.test(password)){
                    alert("Please enter a 6 digit password");
                }
                else{
                     alert(error.message);
                }
               
            });
            console.log(isLoggedIn);
    
        }  
    return (
        <div>
            
            {!isLoggedIn &&
            (<div>
            <p>SignIn to enable AI note assistant:</p>
            <br/>
            <span className="block text-sm font-medium">Email:</span>
            <input className="w-full bg-gray-700 text-white p-2 rounded-md mb-2 outline-none" type="text" placeholder="John@email.com" onChange={(e)=>{setEmail(e.target.value)}}></input>
            <br></br>
            <span className="block text-sm font-medium">Password: </span> 
            <input className="w-full bg-gray-700 text-white p-2 rounded-md mb-2 outline-none"type="password" placeholder="Enter 6 digit password" onChange={(e)=>{setPassword(e.target.value)}}></input> 
            <br></br>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"onClick={LogIn}>SignIn</button>
            <br/>
            </div>)}
            {isLoggedIn && 
            (<div>
              <Notes1/>
              {/* <p className="text-centre">Here's the link to The AI notes assistant</p>
              <Link className="text-blue-400 underline" to="/notes" >Notes</Link> */}
            </div>)}

            
        </div>


      );
}
 
export default SignIn;