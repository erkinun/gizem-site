import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import {
  FaPinterestP,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGithub,
} from 'react-icons/fa'
import 'tachyons'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteTitle: title
            mailChimpUrl
            pinterest
            facebook
            twitter
            youtube
            github
          }
        }
      }
    `}
    render={(data) => (
      <footer className='pa2 bg-dark-gray near-white pv5'>
        <div className='flex flex-wrap justify-around w-100 mw9 center mb5'>
          <div className='w-100 mw5 mb4'>
            <span className='display f2'>
              {data.site.siteMetadata.siteTitle} (MSc,MBPsS)
            </span>
            <hr />
            <Link
              to='/blog'
              className='near-white sans-serif f5 tracked pv1 db'
            >
              TÜM YAZILAR
            </Link>
            <Link
              to='/about'
              className='near-white sans-serif f5 tracked pv1 db'
            >
              HAKKIMDA
            </Link>
            <div className='w-100 flex justify-around items-center pv2'>
              {data.site.siteMetadata.facebook && (
                <a
                  className='near-white'
                  href={data.site.siteMetadata.facebook}
                >
                  <FaFacebookF />
                </a>
              )}

              {data.site.siteMetadata.youtube && (
                <a className='near-white' href={data.site.siteMetadata.youtube}>
                  <FaYoutube />
                </a>
              )}

              {data.site.siteMetadata.github && (
                <a className='near-white' href={data.site.siteMetadata.github}>
                  <FaGithub />
                </a>
              )}

              {data.site.siteMetadata.pinterest && (
                <a
                  className='near-white'
                  href={data.site.siteMetadata.pinterest}
                >
                  <FaPinterestP />
                </a>
              )}

              {data.site.siteMetadata.twitter && (
                <a className='near-white' href={data.site.siteMetadata.twitter}>
                  <FaTwitter />
                </a>
              )}
            </div>
          </div>
          <div className='flex flex-column'>
            <span className='near-white sans-serif f4 tracked mb3 db b'>
              İLETİŞİM
            </span>
            <p className='f4'>
              Randevu almak ve soru sormak için aşağıdaki e-mail veya instagram
              adresi üzerinden iletişime geçebilirsiniz:
            </p>
            <span className='b underline f4'>psk.gizemunlu@gmail.com</span>

            <a
              target={'_blank'}
              style={{ color: '#f4f4f4' }}
              href={'https://www.instagram.com/psk.gizemunlu/'}
            >
              <span className='b underline f4'>
                instagram.com/psk.gizemunlu
              </span>
            </a>

            {/*             <a href={data.site.siteMetadata.mailChimpUrl} className='near-white sans-serif f5 tracked pv1 db'>
              NEWSLETTER
            </a> */}
          </div>
        </div>
      </footer>
    )}
  />
)
