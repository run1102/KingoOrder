import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import Head from "./components/Jangbaguni/Head"
import Sec from "./components/Jangbaguni/Sec"
import Total from "./components/Jangbaguni/Total"


const Jangbaguni = () => {
    return (
        <div>
            <Head />,
            <Sec />
            <Total />
        </div>
        )
    }

export default Jangbaguni