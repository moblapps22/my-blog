import React from 'react'
import '../../content/assets/css/header.css'
import '../../content/assets/css/responsive.css'
import '../../content/assets/css/animate.css'
import '../../content/assets/css/style.css'
import '../../content/assets/css/bootstrap.css'
import '../../content/assets/css/font-awesome.min.css'

class ProjectsText extends React.Component {

  render() {
    return (
      <section className="main-section" id="projects">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 col-sm-12 featured-work">
                      <h2>Featured Projects</h2>
                      <p className="padding-b">A sample of recent customer success stories.</p>
                      <div className="featured-box">
                          <div className="featured-box-col1">
                              <i className="fa-rocket"></i>
                          </div>
                          <div className="featured-box-col2">
                              <h3>Seamless Website Cloud Migration</h3>
                              <p>My client needed to move a website receiving over 2.5 million requests using 250 GB of
                                  bandwidth per day into their AWS account within 8 weeks. The Linux, PHP &amp; other
                                  libraries in use were several versions behind. Some code had up to 15 years of revisions to
                                  update and move to a new version control system.</p>
                              <p>Even with limited time, I built a redundant, secure architecture leveraging multiple
                                  availability zones &amp; separate VPCs. I upgraded and tested all major software versions
                                  and implemented a new deployment system with separate production, staging &amp; development
                                  environments. Creative DNS + load balancing allowed us to complete a zero-downtime migration
                                  during transfer of domain name ownership.</p>
                              <p><b>The Results:</b> The new site can handle more traffic at a lower cost with fault-tolerance
                                  and fully documented configuration management and monitoring.</p>
                          </div>
                      </div>
                      <div className="featured-box">
                          <div className="featured-box-col1">
                              <i className="fa-code-fork"></i>
                          </div>
                          <div className="featured-box-col2">
                              <h3>Serverless Automation</h3>
                              <p>I was engaged to move a customer API from another cloud provider into Amazon Web Services.
                                  The client was a small startup with no full-time devops engineers. The main requirement was
                                  to lower response time to under 200ms.</p>
                              <p>I implemented Lambda + API Gateway + a custom deployment script to avoid setting up systems
                                  their team would have to monitor, moving their focus away from customer satisfaction.
                                  Because of some service limitations, I deployed a custom proxy solution requiring very
                                  little maintenance for the lowest possible latency utilizing the AWS Region closest to the
                                  user.</p>
                              <p><b>The Results:</b> A faster site with fewer systems and easy global deployment any engineer
                                  can use.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}

export default ProjectsText
