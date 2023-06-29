import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import Header from "./components/BuyMenu/Header"
import Section from "./components/BuyMenu/Section"
import Btn from "./components/BuyMenu/Btn"


const BuyMenu = () => {
    return (
        <div>
            <Header />,
            <Section />,
            <Btn />
        </div>
        )
    }

export default BuyMenu