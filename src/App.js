import './App.css';
import Upload from './Upload';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login"
import Register from './Register';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from "./firebase-config"
import BottleColl from './BottleColl';

function App() {
  onAuthStateChanged(auth, (data)=>{
    console.log(data.uid);
   })
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/foodupload"element={<Upload />} />
        <Route path="/login"element={<Login />} />
        <Route path="/signin"element={<Register />} />
        <Route path="/bottlecoll"element={<BottleColl />} />
      </Routes>  
    </div>
    </Router>
  );
}

export default App;
