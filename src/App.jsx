
import Auth from "./components/Auth"
import Ai from "./components/Notes1"
import SignIn from "./components/SignIn"
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'





import './App.css'
import { AuthProvider } from "./config/AuthContext"


function App() {
  

  return (
    <>
      <AuthProvider>
        <Router>
          <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center p-5">
            <h1 className="text-4xl font-bold mb-5">Ai Note Maker</h1>
            <Navbar/>
            <Routes>
                <Route path="/"  element={<Auth/>} />
                <Route path="/notes" element={<Ai/>} />
                <Route path="/SignIn" element={<SignIn/>} />
            </Routes>
          </div>
      
          </Router> 
      </AuthProvider>  
    </> 
    
  )
}

export default App
