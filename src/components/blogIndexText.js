import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import '../../content/assets/css/header.css'
import '../../content/assets/css/style.css'
import '../../content/assets/css/animate.css'
import '../../content/assets/css/font-awesome.min.css'
import '../../content/assets/css/bootstrap.css'

const BlogIndexText = ({props}) => {
  const siteTitle = props.data.site.siteMetadata.title
  const posts = props.data.allMarkdownRemark.edges

  return (
    <section className="main-section" id="blogs">
        <div className="container">
          <h2>Blogs</h2>

      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug} >
            <header >
              <h5
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug + "#article"}>
                  {title}
                </Link>
              </h5>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}</div></section>
  )
}

export default BlogIndexText
