import React from 'react'
import logo from '../../content/assets/images/dave-stern-consulting.png'
import Helmet from 'react-helmet'
import '../../content/assets/css/header.css'
import '../../content/assets/css/responsive.css'
import '../../content/assets/css/style.css'
import '../../content/assets/css/animate.css'
import '../../content/assets/css/font-awesome.min.css'


class Header extends React.Component {

  render() {
    return (
      <div>
      <header className="header" id="header">
        <div className="container">
            <h1 className="animated fadeInDown delay-07s">Technology Consulting Services
            </h1>
            <ul className="we-create animated fadeInUp delay-1s">
                <li>Devops Engineering</li>
                <li>Comprehensive AWS Expertise</li>
                <li>Consulting CTO</li>
            </ul>
            <a className="servicelink" href="#intro">
              <i className="fa fa-angle-down fa-4x"></i>
            </a>
            <br/>
        </div>
      </header>
    </div>
    )
  }
}

export default Header
