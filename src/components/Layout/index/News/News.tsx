import React from 'react'
import * as styles from './News.module.scss'

import pnews_1 from './images/pnews_1.jpg'
import pnews_2 from './images/pnews_2.jpg'
import pnews_3 from './images/pnews_3.png'
import pnews_4 from './images/pnews_4.jpg'
import pnews_5 from './images/pnews_5.png'
import more from './images/more.jpg'

interface NewsProps {
  style?: React.CSSProperties
}

const News = (props: NewsProps) => {
  return (
    <div className={styles.wrapper} {...props}>
      <header>
        <h2>롯데칠성 뉴스</h2>
        <a className={styles.more} href="#" aria-label="더보기">
          <img src={more} alt="" />
        </a>
      </header>
      <div className={styles.itemGrid}>
        <div className={styles.item}>
          <div className={styles.imgbox}>
            <a href="#">
              <img src={pnews_1} alt="" />
            </a>
          </div>
          <div className="heading">
            <p>전국천사무료급식소에 임직원들이 모은 '나눔저금통'성금 전달</p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.imgbox}>
            <a href="#">
              <img src={pnews_2} alt="" />
            </a>
          </div>
          <div className="heading">
            <p>추운 겨울철에 얼어붙은 몸과 마음을 녹여주는 온장음료 인기</p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.imgbox}>
            <a href="#">
              <img src={pnews_3} alt="" />
            </a>
          </div>
          <div className="heading">
            <p>프리미엄 원두캔커피 1등 브랜드 '칸타타'출시 11년 만에 누적...</p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.imgbox}>
            <a href="#">
              <img src={pnews_4} alt="" />
            </a>
          </div>
          <div className="heading">
            <p>대한민국 1위 종합음료기업인 롯데칠성에서 미래의 더 높은 가...</p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.imgbox}>
            <a href="#">
              <img src={pnews_5} alt="" />
            </a>
          </div>
          <div className="heading">
            <p>피카츄가 들어간 깜찍한 사이즈의 아이시스8.0 200ml 페트병...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
