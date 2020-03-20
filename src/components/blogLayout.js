import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import '../../content/assets/css/header.css'
import '../../content/assets/css/style.css'
import '../../content/assets/css/animate.css'
import '../../content/assets/css/font-awesome.min.css'
import '../../content/assets/css/bootstrap.css'
import Header from './header'
import Nav from './Navigation'
import BlogIndex from '../pages/index.js'
import BlogHeader from './blogHeader'
import $ from 'jquery';
import  'jquery.easing';
import { Waypoint } from 'react-waypoint'

import PropTypes from 'prop-types'

class BlogLayout extends React.Component {

  render () {
    return(
    <div>
      <BlogHeader/>
      <main>{ this.props.children }</main>
    </div>
  )
  }
}

export default BlogLayout ;
