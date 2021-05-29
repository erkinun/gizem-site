import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <Helmet
        htmlAttributes={{
          lang: 'tr',
        }}
      >
        <title>{props.title + ' - ' + data.site.siteMetadata.title}</title>
        <meta name='description' content={props.description} />
      </Helmet>
    )}
  />
)
