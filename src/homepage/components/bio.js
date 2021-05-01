import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import 'tachyons'

export default () => (
  <div className='pv5 pa2 flex flex-wrap mw9 center items-center' style={{ justifyContent: 'space-evenly' }}>
    <StaticQuery
      query={graphql`
        query {
          image: file(relativePath: { eq: "img/logo.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          copy: markdownRemark(frontmatter: { name: { eq: "homepage__bio" } }) {
            html
            frontmatter {
              title
            }
          }
        }
      `}
      render={(data) => (
        <React.Fragment>
          <Img fluid={data.image.childImageSharp.fluid} alt='Logo' className='w-100 mw6' />
          <div class='w-100 pa2 mw6 mv4 bb'>
            <span className='db f3 display dark-gray'>{data.copy.frontmatter.title}</span>
            <div className='lh-copy f5 serif mt4' dangerouslySetInnerHTML={{ __html: data.copy.html }} />
          </div>
        </React.Fragment>
      )}
    />
  </div>
)
