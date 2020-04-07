import React from 'react'
import '../../content/assets/css/header.css'
import '../../content/assets/css/responsive.css'
import '../../content/assets/css/animate.css'
import '../../content/assets/css/style.css'
import '../../content/assets/css/bootstrap.css'
import '../../content/assets/css/font-awesome.min.css'

import dave from '../../content/assets/images/dave-stern.jpg'

class AboutText extends React.Component {

  render() {
    return (
      <section className="main-section team" id="team">
          <div className="container">
              <h2>about</h2>


              <div className="col-lg-3 col-sm-4">
                  <div className="team-leader-block clearfix">
                      <div className="team-leader-box">
                          <div className="team-leader">
                              <div className="team-leader-shadow"><a href="#"></a></div>
                              <img src={dave} alt=""/>
                              <ul>
                                  <li><a href="https://twitter.com/davestern1" class="fa-twitter"></a></li>
                                  <li><a href="https://github.com/davestern" class="fa-github"></a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="col-lg-9 col-sm-8">
                  <h3>Dave Stern</h3>
                  <h5>President</h5>
                  <p>My name is Dave Stern and I have been a systems, database and network engineer for over 20 years. I have
                      been developing web platforms with multiple languages and services since the early days of the internet.
                      I was the first Devops engineer at FiftyThree, backed by Andreessen Horowitz and New Enterprise
                      Associates (NEA). I have also worked with multiple venture-backed startups.
                  </p>
                  <p>
                      A specialist in AWS technologies, linux, databases, security and backend development for many years, I
                      also regularly add to my skill set. While always looking for ways to improve my craft in a rapidly
                      advancing industry, I'm also very aware that the bottom line is team productivity.
                  </p>
                  <p>
                      Having worked with companies and stakeholders in a variety of industries, I understand how to prioritize
                      client needs, deadlines and cost considerations. Infrastructure needs to be well organized,
                      fault-tolerant and easy to use while meeting product and budget needs. Working at all levels of
                      development from intern to manager has taught me how to listen and respond to every situation uniquely
                      and apply creative new solutions where necessary.
                  </p>
              </div>

          </div>
      </section>
    )
  }
}

export default AboutText
