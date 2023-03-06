import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './mApp.css'
import './all.css'
import Bodybackground from "./components/Bodybackground";
import Memberlistgroup from "./components/Memberlistgroup";


function App() {
  return (
    <>
     <Router>
      <Navbar/>
      <Bodybackground/>
       <Memberlistgroup/>
      <Routes>
        
      </Routes>
     </Router>
    </>
     
  );
}

export default App;
