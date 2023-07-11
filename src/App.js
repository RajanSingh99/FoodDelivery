import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import AllItems from "./pages/AllItems";
import SignupPage from "./pages/Signup";
import AdminServices from "./pages/AdminServices";
import DeleteCustomer from "./components/modals/DeleteCustomer";
import AddItemForm from "./pages/AddItemForm";
import DeleteItem from "./pages/DeleteItem";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="All-Items" element={<AllItems/>}/>
          <Route path="signup" element={<SignupPage/>}/>
          <Route path="Admin-services" element={<AdminServices/>}/>
          <Route path="delete-customer" element={<DeleteCustomer/>}/>
          <Route path="add-item" element={<AddItemForm/>}/>
          <Route path="delete-item" element={<DeleteItem/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;