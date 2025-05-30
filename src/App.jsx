import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
