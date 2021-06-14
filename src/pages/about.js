import React from 'react'
import Layout from '../common/layouts'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Seo from '../common/seo'

export default ({ props, data }) => (
  <Layout>
    <Seo title={`About ${data.site.siteMetadata.title}`} description={data.markdownRemark.frontmatter.title} />
    <div className='relative logo-bg'>
      <Img fluid={data.banner.childImageSharp.fluid} className='w-100 mw7 h6 c-m' />
    </div>
    <div className='mw9 center pv5-l w-100'>
      <div className='mw8 center w-100 pa2'>
        <h1 className='display fw1 db lh-copy'>HAKKIMDA</h1>
      </div>
      <div
        className='mw8 center w-100 lh-copy serif pa2 flex flex-column justify-center f4'
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
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
    markdownRemark(frontmatter: { name: { eq: "about__bio" } }) {
      html
      frontmatter {
        title
      }
    }
    banner: file(relativePath: { eq: "img/logo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080, maxHeight: 1080) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
