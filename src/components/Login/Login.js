import React from "react"
import styles from "./Login.module.css"
import { Routes, Route, Link } from "react-router-dom"

const Login = () => {
    return (
        <div>
            <div className={styles.page}>
                <div className={styles.titleWrap1}>
                킹고오더
                </div>
                <div className={styles.titleWrap2}>
                이메일과 비밀번호를 입력해주세요.
                </div>
            </div>

            <div className={styles.contentWrap}>
                    <div className={styles.inputTitle}>
                        이메일 주소
                    </div>
                    <div
                        className={styles.inputWrap} >
                        <input
                        className={styles.input}
                        type="email"
                        placeholder="test@gmail.com" />
                    </div>
            </div>

            <div style={{ marginTop: "26px" }} className={styles.inputTitle}>
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
          <Link to="/buymenu">
            <button className={styles.bottomButton}>
                확 인
            </button>
            </Link>
        </div>

        <Link to="/signin">
            <div className={styles.gosignin}>
                    <p> 회원가입하기 </p>
            </div>
        </Link>

        </div>


    )
}
export default Login