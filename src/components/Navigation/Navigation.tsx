import React from 'react'
// import { Link } from 'gatsby'
import * as styles from './Navigation.module.scss'

const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <h2 className="a11y-hidden">네비게이션</h2>
      <ul className={styles.primaryMenuList}>
        <li className={styles.primaryMenuItem}>
          <a href="#">기업소개</a>
          <ul className={styles.subMenuList}>
            <li className={styles.subMenuItem}>
              <a href="#">소개</a>
            </li>
            <li className={styles.subMenuItem}>
              <a href="#">CEO인사말</a>
            </li>
            <li className={styles.subMenuItem}>
              <a href="#">비전</a>
            </li>
            <li className={styles.subMenuItem}>
              <a href="#">연혁</a>
            </li>
          </ul>
        </li>
        <li className={styles.primaryMenuItem}>
          <a href="#">맑은경영</a>
          <ul className={styles.subMenuList}>
            <li className={styles.subMenuItem}>
              <a href="#">윤리경영</a>
            </li>
            <li className={styles.subMenuItem}>
              <a href="#">품질/환경경영</a>
            </li>
            <li className={styles.subMenuItem}>
              <a href="#">사회공헌</a>
            </li>
          </ul>
        </li>
        <li className={styles.primaryMenuItem}>
          <a href="#">제품정보</a>
          <ul className={styles.subMenuList}>
            <li className={styles.subMenuItem}>
              <a href="#">신제품 정보</a>
            </li>
            <li className={styles.subMenuItem}>
              <a href="#">음료브랜드</a>
            </li>
          </ul>
        </li>
        <li className={styles.primaryMenuItem}>
          <a href="#">홍보센터</a>
          <ul className={styles.subMenuList}>
            <li className={styles.subMenuItem}>
              <a href="#">홍보관</a>
            </li>
            <li className={styles.subMenuItem}>
              <a href="#">홍보자료실</a>
            </li>
            <li className={styles.subMenuItem}>
              <a href="#">롯데칠성뉴스</a>
            </li>
          </ul>
        </li>
        <li className={styles.primaryMenuItem}>
          <a href="#">인재채용</a>
          <ul className={styles.subMenuList}>
            <li className={styles.subMenuItem}>
              <a href="#">채용공고</a>
            </li>
            <li className={styles.subMenuItem}>
              <a href="#">온라인 입사지원</a>
            </li>
          </ul>
        </li>
        <li className={styles.primaryMenuItem}>
          <a href="#">고객지원</a>
          <ul className={styles.subMenuList}>
            <li className={styles.subMenuItem}>
              <a href="#">고객센터</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
