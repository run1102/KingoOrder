import React, { useState } from 'react';
import styles from "./choose.module.css";

const Choose = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
        <div className={styles.back}></div>
        <div className={styles.cho}>
            <div className={styles.card1}>
                <img src="./img/백현.png"/>
            </div>

            <div className={styles.h2}>
                <button className={styles.b1} onClick={() => setValue(value - 1)}>-</button>
                <div className={styles.m}> (면가) 볶음우동 </div>
                <button className={styles.b2} onClick={() => setValue(value + 1)}>+</button>
            </div>

            <p>
                <div className={styles.h1}>
                메뉴 선택 개수는 <b>{value}</b>개 입니다.
                </div>
            </p>

            
        </div>
    </div>
  );
};

export default Choose;