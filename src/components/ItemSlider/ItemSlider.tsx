import React, { useEffect } from 'react'
import './style.css'
import { soda, juice, coffee, tea } from './images'

interface ItemSliderProps {
  style?: React.CSSProperties
}

const ItemSlider = (props: ItemSliderProps) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.innerHTML = `
      $(function () {
        $('#mi-slider').catslider()
      })
    `
    document.body.appendChild(script)
  }, [])

  return (
    <div id="mi-slider" className="mi-slider" {...props}>
      <ul>
        {soda.map((item) => (
          <li key={item.url}>
            <a href="#">
              <img src={item.url} alt={item.name} />
              <h4>{item.name}</h4>
            </a>
          </li>
        ))}
      </ul>
      <ul>
        {juice.map((item) => (
          <li key={item.url}>
            <a href="#">
              <img src={item.url} alt={item.name} />
              <h4>{item.name}</h4>
            </a>
          </li>
        ))}
      </ul>
      <ul>
        {coffee.map((item) => (
          <li key={item.url}>
            <a href="#">
              <img src={item.url} alt={item.name} />
              <h4>{item.name}</h4>
            </a>
          </li>
        ))}
      </ul>
      <ul>
        {tea.map((item) => (
          <li key={item.url}>
            <a href="#">
              <img src={item.url} alt={item.name} />
              <h4>{item.name}</h4>
            </a>
          </li>
        ))}
      </ul>
      <nav>
        <a href="#">탄산</a>
        <a href="#">쥬스</a>
        <a href="#">커피</a>
        <a href="#">차</a>
      </nav>
      <script
        type="text/javascript"
        src="/static/scripts/modernizr.custom.63321.js"
      ></script>
      <script
        type="text/javascript"
        src="/static/scripts/jquery.min.js"
      ></script>
      <script
        type="text/javascript"
        src="/static/scripts/jquery.catslider.js"
      ></script>
    </div>
  )
}

export default ItemSlider
