import React from 'react'
import * as styles from './Etc.module.scss'

import service1 from './images/service1.png'
import service2 from './images/service2.png'
import service3 from './images/service3.png'

const Etc = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <a href="#">
          <div className={styles.innerGrid}>
            <div className={styles.imgbox}>
              <img src={service1} alt="" />
            </div>
            <div className={styles.text}>
              <h3>채용안내</h3>
              <p>적극적이고 노력하는 인재를 중요시합니다.</p>
            </div>
          </div>
        </a>
      </div>
      <div className={styles.item}>
        <a href="#">
          <div className={styles.innerGrid}>
            <div className={styles.imgbox}>
              <img src={service2} alt="" />
            </div>
            <div className={styles.text}>
              <h3>업체등록</h3>
              <p>업체제휴절차를 안내합니다.</p>
            </div>
          </div>
        </a>
      </div>
      <div className={styles.item}>
        <a href="#">
          <div className={styles.innerGrid}>
            <div className={styles.imgbox}>
              <img src={service3} alt="" />
            </div>
            <div className={styles.text}>
              <h3>고객문의</h3>
              <p>롯데칠성음료(주)공장은 여러분을 환영합니다.</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Etc
