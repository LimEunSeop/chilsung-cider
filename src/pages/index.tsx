import * as React from 'react'
import ItemSlider from '../components/ItemSlider/ItemSlider'
import Community from '../components/Layout/index/Community/Community'
import Etc from '../components/Layout/index/Etc/Etc'
import Event from '../components/Layout/index/Event/Event'
import News from '../components/Layout/index/News/News'
import Value from '../components/Layout/index/Value/Value'
import Layout from '../components/Layout/Layout'
import MainSlider from '../components/MainSlider/MainSlider'

// markup
const IndexPage = () => {
  return (
    <Layout>
      <h2 className="a11y-hidden">메인 슬라이드</h2>
      <MainSlider
        style={{
          width: '100vw',
          minWidth: '100%',
          marginLeft: 'min(calc((100vw - 100%) / -2), 0px)',
        }}
      />

      <h2 className="a11y-hidden">판매 음료 리스트</h2>
      <ItemSlider style={{ marginTop: '100px' }} />

      <h2 className="a11y-hidden">롯데칠성의 가치</h2>
      <Value />

      <h2 className="a11y-hidden">이벤트&신제품</h2>
      <Event />

      <h2 hidden>롯데칠성 뉴스</h2>
      <News style={{ marginTop: '45px' }} />

      <h2 style={{ textAlign: 'center', marginTop: '45px' }}>
        롯데칠성 커뮤니티
      </h2>
      <Community />

      <h2 className="a11y-hidden">기타 항목</h2>
      <Etc />
    </Layout>
  )
}

export default IndexPage
