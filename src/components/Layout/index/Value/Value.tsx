import React from 'react'
import * as styles from './Value.module.scss'
import business_1 from './images/business_1.png'
import business_2 from './images/business_2.jpg'
import business_3 from './images/business_3.jpg'
import business_4 from './images/business_4.jpg'

const Value = () => {
  return (
    <div className={styles.wrapper}>
      <p>롯데칠성은 지속가능한 가치를 추구합니다.</p>
      <div className={styles.itemGrid}>
        <div className={styles.item}>
          <img src={business_1} alt="ETHICS 글자에서 S를 집는 모습" />
          <span className={styles.label}>윤리경영</span>
        </div>
        <div className={styles.item}>
          <img src={business_2} alt="롯데타워가 보이는 노을" />
          <span className={styles.label}>환경경영</span>
        </div>
        <div className={styles.item}>
          <img src={business_3} alt="정장입고 2대2로 악수하는 모습" />
          <span className={styles.label}>사회공헌</span>
        </div>
        <div className={styles.item}>
          <img src={business_4} alt="어르신 무료급식 봉사를 하는 모습" />
          <span className={styles.label}>공정거래</span>
        </div>
      </div>
    </div>
  )
}

export default Value
