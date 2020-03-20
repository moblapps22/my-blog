import React from 'react'
import '../../content/assets/css/header.css'
import '../../content/assets/css/style.css'
import '../../content/assets/css/animate.css'
import '../../content/assets/css/font-awesome.min.css'
import '../../content/assets/css/bootstrap.css'

class ServicesText extends React.Component {



  render() {
    let fs = {
         fontSize: 16
       };
    let color = {
        color: '#fff'
    }

    return (
      <section className="main-section" id="service">
          <div className="container">
            <h2>Services</h2>
              <h6 style={fs}>
                  Every project is completely outlined in the proposal with key milestones and delivery dates.
                  <br/>
                  <b>You always know what to expect</b> because my primary focus is on deliverables and
                  deadlines.
              </h6>
              <div className="row">
                  <div className="wow fadeInLeft delay-05s animated" id="services-sidebar">
                      <div className="service-list">
                          <div className="service-list-col1">
                              <i className="fa-server"></i>
                                </div>
                          <div className="service-list-col2">
                              <h3>DevOps Engineering</h3>
                              <p >Network design and security, configuration management, automation, load balancing, and CI/CD
                                  using tools like Ansible, Route53, and CloudFormation.</p>
                          </div>
                      </div>

                      <div className="service-list">
                          <div className="service-list-col1">
                              <i className="fa-sitemap"></i>
                          </div>
                          <div className="service-list-col2">
                              <h3>Consulting CTO &amp; Trusted Technology Advisor</h3>
                              <p>Web Application Technical Strategy and hands-on architecture. Team lead, code review, precise
                                  planning and budget, personnel and hiring. Expertise in Web Service Infrastructure and
                                  multiple languages and environments including Linux, MySQL, Node.js, Python, Javascript.</p>
                          </div>
                      </div>

                      <div className="service-list">
                          <div className="service-list-col1">
                              <i className="fa-cloud"></i>
                          </div>
                          <div className="service-list-col2">
                              <h3>AWS Architecture, Automation and Deployment</h3>
                              <p>Create, migrate or automate using the right combination of Amazon Web Services that fit your
                                  project from the common like EC2, RDS, ELB, &amp; S3 to the advanced like VPC, Cloudfront,
                                  WAF, IAM, CodePipeline and more.</p>
                          </div>
                      </div>

                      <div className="service-list">
                          <div className="service-list-col1">
                              <i className="fa-line-chart"></i>
                          </div>
                          <div className="service-list-col2">
                              <h3>Startup Assessment, Roadmap and Buildout</h3>
                              <p>I understand scale and how to build for maximum efficiency. Fast, robust, redundant solutions
                                  to expand your business to any level of traffic with zero downtime.</p>
                          </div>
                      </div>
                        </div>
              </div>
          </div>
      </section>
    )
  }
}

export default ServicesText
