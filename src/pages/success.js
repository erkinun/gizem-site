import React from 'react'
import Layout from '../common/layouts'
import { graphql } from 'gatsby'
import Seo from '../common/seo'

export default ({ data }) => (
  <Layout>
    <Seo
      title={'İletişim - Başarılı'}
      description={data.site.siteMetadata.title}
    />

    <div className='mw9 center pv5-l w-80 w-60-l'>
      <div className='mw8 center w-100'>
        <h1 className='display fw1 db lh-copy'>İLETİŞİM</h1>
      </div>
      <div className='content'>
        <h2>Mesajınız iletilmiştir</h2>
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
