import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import '../../common/styles/custom.tachyons.css'
import 'tachyons'

export default (props) => (
  <React.Fragment>
    <StaticImage
      className='center w-100'
      imgClassName=''
      style={{ 'text-align': 'center' }}
      imgStyle={{ margin: '0 auto', 'max-width': '1400px' }}
      src='../../../content/img/lake.jpg'
      alt={props.description}
      width={1400}
      height={700}
    />
    <div className='h-auto bg-near-white mw9 w-100 flex flex-column items-center justify-center pv5 ph2 center'>
      <span className='fw1 display dark-gray db tc w-100 mw7 f3 f2-ns'>{props.title}</span>
      <p className='serif mw6 tc f5 dn dib-l mb4 db'>{props.description}</p>
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
