import React from 'react'
import Layout from '../common/layouts'
import { graphql } from 'gatsby'
import Seo from '../common/seo'

export default ({ data }) => (
  <Layout>
    <Seo title={'İletişim'} description={data.site.siteMetadata.title} />

    {
      // TODO think about form validation - add formik
    }
    <div className='mw9 center pv5-l w-80 w-60-l'>
      <div className='mw8 center w-100'>
        <h1 className='display fw1 db lh-copy'>İLETİŞİM</h1>
      </div>
      <div className='content'>
        <form
          className='center mx-auto'
          action='/success'
          name='contact'
          method='POST'
          data-netlify='true'
          netlify-honeypot='bot-field'
        >
          <input type='hidden' name='bot-field' />
          <p>
            <label>
              <input
                className='w-100 mw8 lh-copy b--transparent pa1'
                type='text'
                name='name'
                placeholder='İsim Soyisim'
              />
            </label>
          </p>
          <p>
            <label>
              <input
                className='w-100 mw8 lh-copy b--transparent pa1'
                type='email'
                name='email'
                placeholder='Mail'
              />
            </label>
          </p>
          <p>
            <label>
              <input
                className='w-100 mw8 lh-copy b--transparent pa1'
                type='text'
                name='telephone'
                placeholder='Telefon'
              />
            </label>
          </p>
          <p>
            <label>
              <textarea
                className='w-100 mw8 lh-copy b--transparent pa1'
                name='message'
                placeholder='Mesajınız'
              ></textarea>
            </label>
          </p>
          <p>
            <button
              className='w-100 mw8 lh-copy bg-washed-red white b--transparent pointer dim pa1'
              type='submit'
            >
              Gönder
            </button>
          </p>
        </form>
      </div>
    </div>
  </Layout>
)

export const dataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
