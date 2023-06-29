import React from "react";
import BuyMenu from "./BuyMenu"
import Signin from "./components/Signin/Signin"
import Login from "./components/Login/Login"
import Jangbaguni from "./Jangbaguni";
import { Routes, Route, Link } from "react-router-dom"
import "./App.css";
import Menuchoose from "./menuchoose";
import Qr from "./Qr"


function App() {
  return (
    <div>
      <Routes>
      <Route exact path="/" element={[< Login/>]} />
        <Route exact path="/signin" element={[< Signin/>]} />
        <Route exact path="/buymenu" element={[<BuyMenu />]} />
        <Route exact path="/menuchoose" element={[<Menuchoose />]} />
        <Route exact path="/jangbaguni" element={[<Jangbaguni/>]} />
        <Route exact path="/fin" element={[<Qr/>]} />
      </Routes>
      </div>
  );
}

export default App;