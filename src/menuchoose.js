import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import Hd from "./components/Menuchoose/hd"
import Choose from "./components/Menuchoose/choose"
import But from "./components/Menuchoose/but"



const Menuchoose = () => {
    return (
        <div>
            <Hd />
            <Choose/>
            <But />
        </div>
        )
    }

export default Menuchoose