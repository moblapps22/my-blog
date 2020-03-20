import React from 'react'
import logo from '../../content/assets/images/dave-stern-consulting-1.png'
import Helmet from 'react-helmet'
import '../../content/assets/css/header.css'
import '../../content/assets/css/responsive.css'
import '../../content/assets/css/style.css'
import '../../content/assets/css/animate.css'
import '../../content/assets/css/screen.css'
import '../../content/assets/css/font-awesome.min.css'
import backgroundImage from '../../content/assets/images/coverblog.jpg';
import { Link } from "gatsby"

var hstyle = {
  backgroundImage: "url(" + { backgroundImage } + ")"
};

class BlogHeader extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        menu: false
      };
      this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(){
      this.setState({ menu: !this.state.menu })
    }

  render() {
    const show = (this.state.menu) ? "show" : "" ;

    return (
      <div>
      <header className="header" id="header">
        <div className="container">
            <h1 className="animated fadeInDown delay-07s"><img src={logo} alt="Dave Stern Consulting"/>
            </h1>
            <ul className="we-create animated fadeInUp delay-1s">
                <li>Blog Posts</li>
            </ul>
            <a className="servicelink" href="#article">
              <i className="fa fa-angle-down fa-4x"></i>
            </a>
            <br/>
        </div>
      </header>
      <nav className={"main-nav-outer "} id="test">
          <div className="container">
            <a className="res-nav_click" ><i className="fa-bars" onClick={this.toggleMenu} ></i></a>
              <ul className={"main-nav" + show }>
                  <li><a href="/">Home</a></li>
                  <li><Link to ='/#blogs'>Blogs</Link></li>
              </ul>
          </div>
      </nav>
      </div>
    )
  }
}

export default BlogHeader
