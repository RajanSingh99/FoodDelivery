import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import AllItems from "./pages/AllItems";
import SignupPage from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="All-Items" element={<AllItems/>}/>
          <Route path="signup" element={<SignupPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;