import React from "react"
import styles from "./Section.module.css"
import Sic from "./Sic"
import { Routes, Route, Link } from "react-router-dom"

const Section = () => {
    return (
        <div className={styles.section}>

            <Sic />

            <div className={styles.container1}>
                <Link to="/menuchoose" className={styles.link}>
                    <div className={styles.m1}>
                        <div className={styles.card1}>
                            <img src="./img/백현.png"/>
                        </div>
                        <div className={styles.where1}>
                            <p>(면가)</p>
                        </div>
                        <div className={styles.name1}>
                            <p>볶음우동</p>
                        </div>
                    </div>
                </Link>
            </div>

            <div className={styles.container2}>
                <div className={styles.m2}>
                    <div className={styles.card2}>
                        <img src="./img/백현2.jpg"/>
                    </div>
                    <div className={styles.where2}>
                        <p>(뚝심)</p>
                    </div>
                    <div className={styles.name2}>
                        <p>돼지국밥</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section