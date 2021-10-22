import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Navigation from '../Navigation/Navigation'
import 'styles/index.scss'
import * as styles from './Layout.module.scss'

import logo from 'assets/images/logo.png'
import footer_logo from 'assets/images/footer_logo.png'

interface Props {
  pageTitle?: string
  children: React.ReactNode
}

const Layout = ({ pageTitle, children }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.wrapper}>
      <title>{pageTitle || data.site.siteMetadata.title}</title>
      <header>
        <div className={styles.sitetop}>
          <a href="#">로그인</a>
          <a href="#">회원가입</a>
        </div>
        <div className={styles.navbar}>
          <h1 className={styles.heading}>
            <a href="#" aria-label="롯데칠성음료">
              <img src={logo} alt="" width="300" />
            </a>
          </h1>
          <Navigation />
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <a href="#" aria-label="로고">
          <img src={footer_logo} alt="" width="130" />
        </a>

        <div className={styles.text}>
          <div className={styles.links}>
            <a href="#">이용약관</a>
            <a href="#">개인정보처리방침</a>
            <a href="#">공장견학</a>
          </div>

          <div className={styles.detail}>
            <address>
              <p>본사: 서울특별시 송파구 올림픽로 269, 롯데캐슬골드 4,5층</p>
              <p>
                TEL: <a href="tel:+82234979114">02-3497-9114</a> / 대표이사 :
                이영구
              </p>
            </address>
            <p>
              COPYRIGHT&copy; 2010 LOTTE CHILSUNG BEVERAGE CO. LTD. ALL RIGHTS
              RESERVED
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
