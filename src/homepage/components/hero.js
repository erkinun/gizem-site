import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import '../../common/styles/custom.tachyons.css'
import 'tachyons'

export default (props) => (
  <React.Fragment>
    <StaticImage
      className='center w-80 flex'
      style={{ display: 'flex !important' }}
      imgStyle={{ margin: '0 auto' }}
      src='../../../content/img/white_mountain.jpg'
      alt={props.description}
      width={1200}
      height={500}
      quality={100}
    />

    <div className='h-auto bg-near-white mw9 w-80 flex flex-column items-center justify-center pv5 ph2 center'>
      <span className='fw1 display dark-gray db tc w-100 mw7 f3 f2-ns'>
        {props.title}
      </span>

      <p className='lh-copy f5 serif mt4 tc'>{props.description}</p>
      <StaticImage
        className='center mt4 w-40-l w-80 flex'
        style={{
          display: 'flex !important',
        }}
        src='../../../content/img/profile_gizem.jpg'
        quality={100}
      />

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
