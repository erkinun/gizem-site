import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import 'tachyons'

export default (props) => (
  <div
    className='w-100 pa2 bg-white mb4 ba b--near-white shadow-4'
    style={{ 'max-width': '24rem', display: 'flex', flexDirection: 'column' }}
  >
    <Link to={props.to} className='no-underline' style={{ flex: '1 0 auto' }}>
      <Img fluid={props.image} alt='' className='w-100 h5' />
      <div className='mv3 flex justify-between'>
        <div className='db f6 silver ttu tracked sans-serif'>{props.date}</div>
        <div className='db f6 silver ttu tracked sans-serif'>TAGGED: {props.category}</div>
      </div>
      <div className='display dark-gray f3 mb3'>{props.title}</div>
      <div className='serif near-black f5 lh-copy serif mb4'>{props.description}</div>
    </Link>
    <div className='pa2 flex justify-end serif' style={{ flexShrink: 0 }}>
      <Link to={props.to} className='dark-gray tracked ttu sans-serif f5'>
        Read More &raquo;
      </Link>
    </div>
  </div>
)
