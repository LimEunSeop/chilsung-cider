import React from 'react'
import * as styles from './Community.module.scss'
import classnames from 'classnames/bind'

import community_1 from './images/community_1.jpg'
import community_2 from './images/community_2.jpg'
import community_3 from './images/community_3.jpg'
import community_4 from './images/community_4.jpg'
import community_5 from './images/community_5.jpg'
import youtube from './images/youtube.jpg'
import facebook from './images/facebook.jpg'
import instagram from './images/instagram.jpg'
import youtube_des from './images/youtube_des.jpg'
import instagram_des from './images/instagram_des.jpg'
import facebook_des from './images/facebook_des.jpg'
import twitter_des from './images/twitter_des.jpg'

const cx = classnames.bind(styles)

interface CommunityProps {
  style?: React.CSSProperties
}

const Community = (props: CommunityProps) => {
  return (
    <div className={styles.wrapper} {...props}>
      <div className={styles.grid}>
        <div className={styles.imgbox}>
          <img className={styles.cover} src={community_1} alt="" />
          <img className={styles.snsIcon} src={youtube} alt="" />
          <div className={cx('more', 'fromTop')}>
            <a href="#">더보기</a>
          </div>
        </div>
        <div className={styles.imgbox}>
          <img className={styles.cover} src={community_2} alt="" />
          <img className={styles.snsIcon} src={facebook} alt="" />
          <div className={cx('more', 'fromLeft')}>
            <a href="#">더보기</a>
          </div>
        </div>
        <div className={styles.imgbox}>
          <img className={styles.cover} src={community_3} alt="" />
          <img className={styles.snsIcon} src={instagram} alt="" />
          <div className={cx('more', 'fromLeftBottom')}>
            <a href="#">더보기</a>
          </div>
        </div>
        <div className={styles.imgbox}>
          <img className={styles.cover} src={community_4} alt="" />
          <img className={styles.snsIcon} src={youtube} alt="" />
          <div className={cx('more', 'fromBottom')}>
            <a href="#">더보기</a>
          </div>
        </div>
        <div className={styles.imgbox}>
          <img className={styles.cover} src={community_5} alt="" />
          <div className={cx('more', 'fromRight')}>
            <a href="#">더보기</a>
          </div>
        </div>
      </div>
      <footer>
        <p>롯데칠성의 더 많은 소식을 SNS로 만나보세요 !</p>
        <a href="#" aria-label="트위터">
          <img src={twitter_des} alt="" />
        </a>
        <a href="#" aria-label="유튜브">
          <img src={youtube_des} alt="" />
        </a>
        <a href="#" aria-label="인스타그램">
          <img src={instagram_des} alt="" />
        </a>
        <a href="#" aria-label="페이스북">
          <img src={facebook_des} alt="" />
        </a>
      </footer>
    </div>
  )
}

export default Community
