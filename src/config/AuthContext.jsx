import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./Firebase";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const provider = new GoogleAuthProvider();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     setIsLoggedIn(!!user); // Convert user object to boolean
  //   });
  //   return () => unsubscribe();
  // }, []);

//   const handleLogin = async () => {
//     try {
//       await signInWithPopup(auth, provider);
//       setIsLoggedIn(true);
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//   const handleEmailLogin = async (email, password) => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       setIsLoggedIn(true);
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       setIsLoggedIn(false);
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);