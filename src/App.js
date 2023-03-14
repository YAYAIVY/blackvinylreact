import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import 'bootstrap/dist/css/bootstrap.min.css';
import MEdit from "./pages/MEdit";
import MHistory from "./pages/MHistory";
import MCoupon from "./pages/MCoupon";
import MWishlist from "./pages/MWishlist";
import MPassword from "./pages/MPassword";
import MCheckOrderList from "./pages/MCheckOrderList";
import Footer from "./components/Footer";
import MComment from "./pages/MComment";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/MEdit" element={<MEdit/>}/>
          <Route path="/MCoupon" element={<MCoupon/>}/>
          <Route path="/MHistory" element={<MHistory/>}/>
          <Route path="/MWishlist" element={<MWishlist/>}/>
          <Route path="/MPassword" element={<MPassword/>}/>
          <Route path="/MCheckOrderList" element={<MCheckOrderList/>}/>
          <Route path="/MComment" element={<MComment/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>

  );
}

export default App;
