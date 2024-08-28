import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MobileDetails from "./pages/MobileDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobile/:id" element={<MobileDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
