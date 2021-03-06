import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { FiMenu } from 'react-icons/fi'
import Img from 'gatsby-image'
import '../styles/custom.tachyons.css'

const MultiLink = (props) => {
  const internal = /^\/(?!\/)/.test(props.to)
  let result
  if (internal) {
    result = (
      <Link to={props.to} className={props.className} onClick={props.onClick}>
        {props.children}
      </Link>
    )
  } else {
    result = (
      <a href={props.to} className={props.className}>
        {props.children}
      </a>
    )
  }
  return result
}

const SliderMenu = (props) => {
  // Prevents a flash of visible menu items when the entrance is triggered
  let extraClasses
  if (props.active === null) {
    extraClasses = ' dn'
  } else {
    extraClasses = props.active ? ' fadeIn' : ' fadeOut'
  }
  return (
    <div
      className={
        'flex flex-column justify-center items-center bg-washed-red fixed top z-max w-100 ease' +
        (props.active ? ' vh-93' : ' h0')
      }
    >
      <MultiLink
        to='/'
        className={'sans-serif ttu mid-gray f5 no-underline menu__item pv3' + extraClasses}
        onClick={props.toggleMenu}
      >
        ANASAYFA
      </MultiLink>
      {props.extraLinks.map((navLink) => (
        <MultiLink
          to={navLink.to}
          className={'sans-serif ttu mid-gray f5 no-underline menu__item pv3' + extraClasses}
          onClick={props.toggleMenu}
        >
          {navLink.name}
        </MultiLink>
      ))}
    </div>
  )
}

export default class Navbar extends React.Component {
  constructor(props) {
    super()
    this.state = {
      // Null rather than false to check for initialization
      menuToggle: null,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu(event) {
    this.setState({
      menuToggle: !this.state.menuToggle,
    })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                navbarLinks {
                  to
                  name
                }
                siteTitle: title
                mailChimpUrl
              }
            }
          }
        `}
        render={(data) => (
          <React.Fragment>
            <div
              className='bg-white flex w-100 vh-7 pv3 flex justify-between items-center top-0 z-999 bb b--light-gray'
              style={{ position: 'sticky' }}
            >
              <div className='w-100 mw8 h4 flex justify-between justify-around-l items-center ph4 pa2-ns'>
                <button
                  className='ttu tracked dark-gray f4 no-underline bn bg-transparent pointer'
                  onClick={this.toggleMenu}
                >
                  <FiMenu />
                </button>
                <Link to='/' className='display ttu tracked dark-gray f4 no-underline'>
                  {data.site.siteMetadata.siteTitle}
                </Link>
                <Link to='/' className='sans-serif ttu mid-gray f5 no-underline dn dib-l'>
                  ANASAYFA
                </Link>
                {data.site.siteMetadata.navbarLinks.map((navLink) => (
                  <MultiLink to={navLink.to} className='sans-serif ttu mid-gray f5 no-underline dn dib-l'>
                    {navLink.name}
                  </MultiLink>
                ))}
              </div>
              <div className='dn w-100 mw5 flex-l justify-around items-center'></div>
            </div>
            <SliderMenu
              active={this.state.menuToggle}
              extraLinks={data.site.siteMetadata.navbarLinks}
              siteTitle={data.site.siteMetadata.siteTitle}
              toggleMenu={() => this.toggleMenu()}
            />
          </React.Fragment>
        )}
      />
    )
  }
}
