import React from 'react'
import Layout from '../common/layouts'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Hero from '../homepage/components/hero'
import Card from '../homepage/components/card'
import About from '../homepage/components/about'
import Bio from '../homepage/components/bio'
import Seo from '../common/seo'

export default ({ data }) => {
  let post = data.featuredPost.edges[0].node
  const site = data.site.siteMetadata
  return (
    <Layout>
      <Seo title={'Home Page'} description={site.description} />
      <Hero
        title={site.heroTitle}
        image='../../content/img/white_mountain.jpg'
        to={post.frontmatter.slug}
        description={site.heroDesc}
        disabled={true}
      />
      <div className='flex flex-wrap center mw9 w-90 justify-between pb3'>
        {data.cards.edges.map(({ node }) => (
          <Card
            title={node.frontmatter.title}
            image={node.frontmatter.postImage.childImageSharp.fluid}
            to={node.frontmatter.slug}
            description={node.frontmatter.description}
          />
        ))}
      </div>
      <About />
      <Bio />
    </Layout>
  )
}

export const query = graphql`
  query {
    featuredPost: allMarkdownRemark(
      limit: 1
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description: metaDescription
            slug
            postImage {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    cards: allMarkdownRemark(
      skip: 1
      limit: 3
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description: metaDescription
            slug
            postImage {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        description
        heroTitle
        heroDesc
      }
    }
  }
`
