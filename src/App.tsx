// Dependencies
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Local Files
import Home from "./components/Home/Home";



function App() {
 

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="*" element={<Navigate to="/Home" />} />
      </Routes>
      
    </>
  );
}

export default App;
