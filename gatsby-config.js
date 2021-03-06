module.exports = {
  siteMetadata: {
    navbarLinks: [
      { to: '/about', name: 'HAKKIMDA' },
      { to: '/blog', name: 'blog' },
      { to: '/contact', name: 'İLETİŞİM' },
    ],
    title: 'PSİKOLOG GİZEM ÜNLÜ',
    titleLowerCase: 'Psikolog Gizem Ünlü',
    heroTitle: 'Merhaba, ben Psikolog Gizem Ünlü!',
    heroDesc:
      'Londra’da bireysel psikolojik danışmanlık hizmeti sunuyorum. Kendinizi ve yaşadığınız problemleri psikoloji zemininde anlama, problemlerinizi çözüme ulaştırma ve hayatınızda olumlu değişiklikler yapma konusunda profesyonel bir destek almak isterseniz benimle iletişime geçebilirsiniz.',
    description:
      "Londra'da Türkçe terapi ve danışmanlık hizmeti sunan Türk psikolog Gizem Ünlü'nün anasayfası",
    siteUrl: 'https://gizemunlu.com',
    homepageHeader: "Welcome to Gizem Ünlü's blog",
    homepageAbout:
      'Gizem Ünlü is a psychologist who will explain more about the site in coming days',
    mailChimpUrl: 'https://mailchimp.com',
    mailChimpToken: 'MAILCHIMP TOKEN HERE',
    youtube: '', // YOUR YOUTUBE PROFILE HERE
    github: '', // YOUR GITHUB PROFILE HERE
    pinterest: '', // YOUR PINTEREST PROFILE HERE
    facebook: '', // YOUR FACEBOOK PROFILE HERE
    twitter: '', // YOUR TWITTER PROFILE HERE
    address: 'West Hill House, 6 Swain’s Lane, London, N6 6QS, UK',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-PL48F66M0F', // Google Analytics / GA
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
              address
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: {frontmatter: {type: {eq: "post"}}}
              ) {
                edges {
                  node {
                    excerpt
                    html
                    frontmatter {
                      slug
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
            output: '/rss.xml',
            title: 'Gatsby RSS Feed',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1400,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Karla', 'Playfair Display', 'Lora'],
        },
      },
    },
    /* {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ['/success'],
        cookieDomain: "tyra-starter.netlify.com",
      }
    } */
  ],
}
