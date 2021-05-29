import React from 'react'
import Layout from '../common/layouts'
import { graphql } from 'gatsby'
import Hero from '../homepage/components/hero'
import Card from '../homepage/components/card'
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
      <div className='flex flex-wrap center mw9 w-90 pb3 bt pv5' style={{ justifyContent: 'space-evenly' }}>
        {data.cards.edges.map(({ node }) => (
          <Card
            title={node.frontmatter.title}
            image={node.frontmatter.postImage.childImageSharp.fluid}
            to={node.frontmatter.slug}
            description={node.frontmatter.description}
            date={node.frontmatter.date}
            category={node.frontmatter.category}
          />
        ))}
      </div>
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
      skip: 0
      limit: 3
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "Do MMMM YYYY", locale: "tr")
            category
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
