import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import '../../common/styles/custom.tachyons.css'
import 'tachyons'

export default (props) => (
  <React.Fragment>
    <StaticImage
      className='center w-80 flex'
      style={{ 'text-align': 'center' }}
      imgStyle={{ margin: '0 auto', 'max-width': '1400px' }}
      src='../../../content/img/white_mountain.jpg'
      alt={props.description}
      width={1000}
      height={500}
    />
    <div className='h-auto bg-near-white mw9 w-80 flex flex-column items-center justify-center pv5 ph2 center'>
      <span className='fw1 display dark-gray db tc w-100 mw7 f3 f2-ns'>{props.title}</span>
      <p className='lh-copy f5 serif mt4 tc'>{props.description}</p>
      {!props.disabled && (
        <Link
          className='db pv3 ph5 tracked ttu b bg-washed-red dark-gray sans-serif no-underline hover-gray'
          to={props.to}
        >
          Read More
        </Link>
      )}
    </div>
  </React.Fragment>
)
