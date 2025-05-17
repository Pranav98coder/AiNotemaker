import { Link } from "react-router";
import { useState } from "react";
//import { useAuth } from "../config/AuthContext";

//import { isLoggedIn } from "./Auth";
const Navbar = () => {
    const [clickedSignIn, setClickedSignIn] = useState(false);
    const [clickedSignUp, setClickedSignUp] = useState(false);
    return ( 
        <div className="bg-gray-800 text-white p-4 flex justify-space-between items-center gap-4 mb-8">
            <Link to="/" onClick={()=>{if(!clickedSignUp){setClickedSignUp(!clickedSignUp)};if(clickedSignIn){setClickedSignIn(!clickedSignIn)}} } className={!clickedSignUp ? "text-lg font-semibold hover:text-gray-300 transition active:bg-blue-400":"text-black bg-amber-50"}  >SignUp             </Link>
            
            
            <Link to="/SignIN"onClick={()=>{if(!clickedSignIn){setClickedSignIn(!clickedSignIn)};if(clickedSignUp){setClickedSignUp(!clickedSignUp)}}} className={!clickedSignIn ? "text-lg font-semibold hover:text-gray-300 transition active:bg-blue-400":"text-black bg-amber-50"} >  SignIn</Link>
        </div>
     );
}
 
export default Navbar;