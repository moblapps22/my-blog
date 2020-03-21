import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Nav from '../components/navigation'
import { Waypoint } from 'react-waypoint'
import IntroText from '../components/introText'
import ServicesText from '../components/servicesText'
import BlogIndexText from '../components/blogIndexText'

class SiteIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stickyNav: false
    };
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  componentDidMount() {
    window.addEventListener('scroll', this._handleWaypointLeave);
  }


  _handleWaypointLeave = (event) => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = winScroll / height
      if(scrolled === 0) {
        console.log('scrolled 123 is ' + scrolled)
        this.setState(() => ({ stickyNav: false }))
      }
      else {
        this.setState(() => ({ stickyNav: true }))
      }
    }


  render () {
    const siteTitle = this.props.data.site.siteMetadata.title
    const posts = this.props.data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
      <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
      ></Waypoint>
      <Nav sticky={this.state.stickyNav} />
      <IntroText/>
      <ServicesText/>
      <BlogIndexText props = {this.props}/>
      </Layout>
    )
  }
}

export default SiteIndex



export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
