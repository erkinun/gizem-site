import React from 'react'
import Layout from '../common/layouts'
import { Link, graphql } from 'gatsby'
import Breadcrumbs from './components/breadcrumbs'
import Seo from '../common/seo'
import Card from '../homepage/components/card'
import 'tachyons'

export default class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.posts.edges
    const hasNext = this.props.data.posts.pageInfo.hasNextPage
    return (
      <Layout>
        <Seo
          title={`Tüm Blog Yazıları - Sayfa ${this.props.pageContext.pageNumber}`}
          description={`Index of all blog posts. Page ${this.props.pageContext.pageNumber}`}
        />
        <div className='pv5 flex items-center justify-center bg-washed-red'>
          <h1 className='fw1 tc f2 display'>TÜM YAZILARIM</h1>
        </div>
        <div className='mw9 w-90 center'>
          <Breadcrumbs lastName='Blog' lastPath='/blog' currentPage={`Page ${this.props.pageContext.pageNumber}`} />
        </div>

        <div className='mw9 w-90 center flex flex-wrap' style={{ justifyContent: 'space-evenly' }}>
          {posts.map(({ node }) => (
            <Card
              title={node.frontmatter.title}
              image={node.frontmatter.postImage.childImageSharp.fluid}
              to={node.frontmatter.slug}
              description={node.frontmatter.metaDescription}
              date={node.frontmatter.date}
              category={node.frontmatter.category}
            />
          ))}
          <div className='pv5 flex w-100'>
            {hasNext && (
              <Link className='dark-gray sans-serif ttu tracked no-underline' to={this.props.pageContext.nextPage}>
                Next Page &rarr;
              </Link>
            )}
          </div>
        </div>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query posts($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "Do MMMM YYYY", locale: "tr")
            category
            metaDescription
            slug
            postImage {
              childImageSharp {
                fluid(maxWidth: 1080, maxHeight: 512) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`
