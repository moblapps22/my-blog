import React from 'react'

import '../../content/assets/css/header.css'
import '../../content/assets/css/responsive.css'
import '../../content/assets/css/animate.css'
import '../../content/assets/css/style.css'
import '../../content/assets/css/bootstrap.css'
import '../../content/assets/css/font-awesome.min.css'

class ContactText extends React.Component {

  render() {
    return (
      <div>
      <section class="business-talking">
          <div class="container">
              <h2>Contact</h2>
          </div>
      </section>
      <div className="container">
          <section className="main-section contact" id="contact">

              <div className="row">
                  <div className="col-lg-6 col-sm-7">
                      <div className="contact-info-box address clearfix">
                          <h3><i className=" icon-map-marker"></i>Address:</h3>
                          <span>159 20th Street<br></br>Fl 1B-75<br></br>Brooklyn, NY 11232</span>
                      </div>
                      <div className="contact-info-box email clearfix">
                          <h3><i className="fa-pencil"></i>email:</h3>
                          <span><a href="mailto:devops@davestern.com">devops@davestern.com</a></span>
                      </div>

                      <ul className="social-link">
                          <li className="twitter"><a href="https://twitter.com/davestern1"><i className="fa fa-twitter"></i></a></li>
                          <li className="github"><a href="https://github.com/davestern"><i className="fa fa-github"></i></a></li>
                      </ul>
                  </div>
                  <div className="col-lg-6 col-sm-5">
                      <div className="contact-info-box hours clearfix">
                          <strong>What can I do for you?</strong>
                          <br/>
                          Please provide some information about yourself and your needs. I will respond personally as soon as
                          I receive your message.
                      </div>
                      <div className="form">

                          <div id="sendmessage">Your message has been sent. Thank you!</div>
                          <div id="errormessage"></div>
                          <form action="#" method="post" className="contactForm">
                              <div className="form-group">
                                  <input type="text" name="name" className="form-control input-text" id="name"
                                         placeholder="Your Name" data-rule="minlen:4"
                                         data-msg="Please enter at least 4 chars"/>
                                  <div className="validation"></div>
                              </div>
                              <div className="form-group">
                                  <input type="email" className="form-control input-text" name="email" id="email"
                                         placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"/>
                                  <div className="validation"></div>
                              </div>
                              <div className="form-group">
                                  <input type="text" className="form-control input-text" name="phone" id="phone"
                                         placeholder="Phone (optional)"/>
                                  <div className="validation"></div>
                              </div>
                              <div className="form-group">
                                  <textarea className="form-control input-text text-area" name="message" rows="5"
                                            data-rule="required" data-msg="Please let us know how we can help you"
                                            placeholder="Message"></textarea>
                                  <div className="validation"></div>
                              </div>

                              <div className="text-center">
                                  <button type="submit" className="input-btn">Send Message</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </section>
          <hr/>
      </div>

      </div>
    )
  }
}

export default ContactText
