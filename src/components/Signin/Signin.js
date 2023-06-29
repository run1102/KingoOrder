import React from "react"
import styles from "./Signin.module.css"
import { Routes, Route, Link } from "react-router-dom"

const Signin = () => {
    return (
        <div>
            <div className={styles.page}>
                <div className={styles.titleWrap1}>
                킹고오더
                </div>
                <div className={styles.titleWrap2}>
                안녕하세요! 회원가입을 진행해주세요.
                </div>
            </div>

            <div className={styles.contain}>
                <div style={{ marginTop: "26px" }} className={styles.inputTitle}>
                닉네임
                </div>
                <div className={styles.inputWrap}>
                    <input
                    className={styles.input}
                    type="text"
                    placeholder="명륜이"
                        />
                </div>
            

                <div style={{ marginTop: "22px" }} className={styles.contentWrap}>
                        <div className={styles.inputTitle}>
                            이메일 주소
                        </div>
                        <div
                            className={styles.inputWrap} >
                            <input
                            className={styles.input}
                            type="text"
                            placeholder="test@gmail.com" />
                        </div>
                </div>

                <div style={{ marginTop: "22px" }} className={styles.inputTitle}>
                비밀번호
                </div>
                <div className={styles.inputWrap}>
                    <input
                    className={styles.input}
                    type="password"
                    placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                    />
                </div>

                <div>
                <Link to="/">
                <button className={styles.bottomButton}>
                    확 인
                </button>
                </Link>
                </div>
            </div>
        </div>


    )
}
export default Signin