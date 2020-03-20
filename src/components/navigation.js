import React, { Component } from "react";
import '../../content/assets/css/header.css'
import '../../content/assets/css/responsive.css'
import '../../content/assets/css/style.css'
import '../../content/assets/css/animate.css'
import '../../content/assets/css/font-awesome.min.css'

class Nav extends Component {

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
      const fix = this.props.sticky ? "navbar-fixed-top" : "";
      return (
      <nav className={"main-nav-outer " + fix} id="test">
          <div className="container">
            <a className="res-nav_click" ><i className="fa-bars" onClick={this.toggleMenu} ></i></a>
              <ul className={"main-nav " + show}>
                  <li><a href="#service">Services</a></li>
                  <li><a href="#client">Clients</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#team">About</a></li>
                  <li><a href="#blogs">Blog</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>

          </div>
      </nav>
    )
  }
}

export default Nav
