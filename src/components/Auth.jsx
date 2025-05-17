import {auth} from "../config/Firebase"
import { useState } from "react";
import {  GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut } from 'firebase/auth';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import Notes1 from "./Notes1";import { Link } from "react-router-dom";

const Auth = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [user,setUser] = useState("");
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const provider= new GoogleAuthProvider();
    

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //      setIsLoggedIn(user);
    //     });
    //     return () => unsubscribe();
    // }, []);

    
    const handleRegister = () => {
        createUserWithEmailAndPassword(auth,email,password).then((result) => {
            console.log(result.email);
            
            alert(`Welcome ${user},You have logged In Successfully`);
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
                    console.log(error.message);
                    alert(error.message);
                }
            
        });
    } 
    
    const handleLogin = () => {
        signInWithPopup(auth,provider).then((result) => {
            console.log(result.user);
            alert("User Logged In Successfully");
            
            setIsLoggedIn(true);
        }).catch((error) => {
            
            console.log(error.message);
            alert(error.message);
        });
    }
   

    return ( 
        <div>
              

            {!isLoggedIn &&
            (<div>
            <p>SignUp to enable AI note assistant:</p>
             <br/>
            <span className="block text-sm font-medium" >Name:</span>
            <input className="w-full bg-gray-700 text-white p-2 rounded-md mb-2 outline-none" type="text" placeholder="Name" onChange={(e)=>{setUser(e.target.value)}}></input>
            <br/>
            <span className="block text-sm font-medium">Email:</span>
            <input className="w-full bg-gray-700 text-white p-2 rounded-md mb-2 outline-none" type="text" placeholder="John@email.com" onChange={(e)=>{setEmail(e.target.value)}}></input>
            <br></br>
            <span className="block text-sm font-medium" >Password: </span> 
            <input  className="w-full bg-gray-700 text-white p-2 rounded-md mb-2 outline-none"type="password" placeholder="Enter 6 digit password" onChange={(e)=>{setPassword(e.target.value)}}></input> 
            <br></br>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded md-8" onClick={handleRegister}>SignUp</button>
            <hr></hr>
            <p>Or:</p>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"onClick={handleLogin}> Login with Google</button> 
            <br></br>
            </div>)}
            {isLoggedIn && 
            <div>
              <Notes1/>
              {/* <p className="text-centre" >Here's the link to The AI notes assistant</p>
              <Link className="text-blue-400 underline"to="/notes" >Notes</Link> */}
            </div>}

           
        </div>
     );
}

export default Auth;