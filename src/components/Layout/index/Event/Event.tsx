import React from 'react'
import * as styles from './Event.module.scss'

import event_1 from './images/event_1.jpg'
import newprd_1 from './images/newprd_1.jpg'
import more from './images/more.jpg'

const Event = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <header>
          <h3>이벤트</h3>
          <a className={styles.more} href="#" aria-label="더보기">
            <img
              src={more}
              alt="롯데칠성몰X후지필름 가을맞이 시크릿 혜택. 우리만의 시크릿 코드 교환하고 푸짐한 경품 득템하기!"
            />
          </a>
        </header>

        <a href="#">
          <div className={styles.imgbox}>
            <img
              src={event_1}
              alt="데일리씨 망고400 디플러스. 오늘 하루 햇살 한 병! 달콤한 리얼 망고 과즙 비타민D 드링크 '데일리C 망고 400D+' 출시!"
            />
          </div>
        </a>
      </div>
      <div className={styles.item}>
        <header>
          <h3>신제품</h3>
          <a className={styles.more} href="#" aria-label="더보기">
            <img src={more} alt="" />
          </a>
        </header>

        <a href="#">
          <div className={styles.imgbox}>
            <img src={newprd_1} alt="" />
          </div>
        </a>
      </div>
    </div>
  )
}

export default Event
