import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './mApp.css'
import './all.css'
import Bodybackground from "./components/Bodybackground";
import Memberlistgroup from "./components/Memberlistgroup";
import MEdit from "./pages/MEdit";
import Memberinfolist from "./components/Memberinfolist";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Bodybackground />
        <Memberlistgroup />
        {/* Memberlistgroup左邊四分區 */}
        <Memberinfolist />
        {/* Memberinfolist右上三四個小分類 */}
        <Routes>
          <Route path="/MEdit" element={<MEdit />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
