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
import $ from 'jquery';
import  'jquery.easing';
import { Waypoint } from 'react-waypoint'

import PropTypes from 'prop-types'

class Layout extends React.Component {

    constructor(props) {
      super(props);
    }


    componentDidMount() {
      $('.main-nav li a, .servicelink').bind('click', function (event) {
            var $anchor = $(this);
            var top = ($($anchor.attr('href')).offset() || { "top": NaN }).top;
            if (isNaN(top)) {

            } else {
              $('html, body').stop().animate({
                  scrollTop: $($anchor.attr('href')).offset().top - 102
              }, 1500, 'easeInOutExpo');

            }
            event.preventDefault();
        });
        $("#quote-tinybop-readmore").click(function () {
           $("#quote-tinybop").slideToggle();
           return false;
       });

       $("#quote-client2-readmore").click(function () {
           $("#quote-client2").slideToggle();
           return false;
       });

      }

  render () {
    return(
    <div>
      <Header></Header>
      <main>{ this.props.children }</main>
    </div>
  )
  }
}

export default Layout ;
