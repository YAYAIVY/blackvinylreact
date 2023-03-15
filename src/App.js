import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Divbar from "./components/Divbar";
import Footer from "./components/Footer";

// import 'bootstrap/dist/css/bootstrap.min.css';
import MEdit from "./pages/MEdit";
import MHistory from "./pages/MHistory";
import MCoupon from "./pages/MCoupon";
import MWishlist from "./pages/MWishlist";
import MPassword from "./pages/MPassword";
import MCheckOrderList from "./pages/MCheckOrderList";
import MComment from "./pages/MComment";

function App() {
  return (
    <>
      <Router>
        <Divbar/>
        <Routes>
         <Route path="/MEdit" element={<MEdit/>}/>
         <Route path="/MPassword" element={<MPassword/>}/>
         <Route path="/MCoupon" element={<MCoupon/>}/>
         <Route path="/MHistory" element={<MHistory/>}/>
         <Route path="/MWishlist" element={<MWishlist/>}/> 
          <Route path="/MCheckOrderList" element={<MCheckOrderList/>}/>
          <Route path="/MCheckOrderList/MComment" element={<MComment/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>

  );
}

export default App;
