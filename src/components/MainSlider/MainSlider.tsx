import React from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import * as styles from './MainSlider.module.scss'
import visual_1 from './images/visual_1.jpg'
import visual_2 from './images/visual_2.jpg'
import visual_3 from './images/visual_3.jpg'
import visual_4 from './images/visual_4.jpg'
import visual_5 from './images/visual_5.jpg'

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dotsClass: styles.slickDots,
}

interface MainSliderProps {
  style?: React.CSSProperties
}

const MainSlider = (props: MainSliderProps) => {
  return (
    <div className={styles.wrapper} {...props}>
      <Slider {...sliderSettings}>
        <div className={styles.sliderItem}>
          <a href="#">
            <img src={visual_1} alt="맑고 깨끗한 칠성 사이다" />
          </a>
        </div>
        <div className={styles.sliderItem}>
          <a href="#">
            <img src={visual_2} alt="오픈 유어 펩시 나우" />
          </a>
        </div>
        <div className={styles.sliderItem}>
          <a href="#">
            <img
              src={visual_3}
              alt="워너원 - 요하이와 24시간. 요하이와 함께하는 건강하고 맛있는 하루"
            />
          </a>
        </div>
        <div className={styles.sliderItem}>
          <a href="#">
            <img
              src={visual_4}
              alt="언제 어디서나 깔끔하고 상쾌하게. 잇츠 트래비 스타일"
            />
          </a>
        </div>
        <div className={styles.sliderItem}>
          <a href="#">
            <img
              src={visual_5}
              alt="매일매일 개벼워지는 건강한 습관. 뿌리채소 가볍다."
            />
          </a>
        </div>
      </Slider>
    </div>
  )
}

export default MainSlider
