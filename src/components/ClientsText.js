import React from 'react'
import '../../content/assets/css/header.css'
import '../../content/assets/css/responsive.css'
import '../../content/assets/css/animate.css'
import '../../content/assets/css/style.css'
import '../../content/assets/css/bootstrap.css'
import '../../content/assets/css/font-awesome.min.css'
import tinyhop from '../../content/assets/images/tinybop_logo_RGB_600px.png'
import dealstat from '../../content/assets/images/dealstat.png'

class ClientsText extends React.Component {

  render() {
    return (
      <section className="main-section client-part" id="client">
          <div className="container">
              <b className="quote-right wow fadeInDown delay-03"><i className="fa fa-quote-right"></i></b>
              <div className="row">
                  <div className="col-lg-6">
                      <p className="client-part-head wow fadeInDown delay-03s" id="quote-tinybop-partial">
                          Dave recently helped Tinybop with a major site migration on an extremely tight timeline.
                          <br/>
                          At all points in the project, he was extremely communicative and thorough...
                          <br/>
                          Dave&#39;s thoughtfulness about his work is evident, and extends to even the tiniest of details...
                          <br/>
                          I would love to work with Dave again in the future and would be quick to recommend him and his work.
                          <br/>
                      </p>
                      <p id="quote-tinybop" className="client-quote">
                          Dave recently helped Tinybop with a major site migration on an extremely tight timeline. The site
                          had a lot of technical debt and there were many unknowns for us as a company, and Dave&#39;s
                          confidence and thoroughness throughout the project were extremely reassuring.
                          <br/><br/>
                          At all points in the project, he was extremely communicative and thorough, providing weekly progress
                          updates, making sure we knew what to expect at all times, and ensuring we were fully aware of any
                          risks or open questions going forward.
                          <br/><br/>
                          Dave&#39;s thoughtfulness about his work is evident, and extends to even the tiniest of details. We
                          had expressed the importance of ongoing costs being within budget, and Dave took these priorities
                          very seriously and made sure our costs were under budget.
                          <br/><br/>
                          I would love to work with Dave again in the future and would be quick to recommend him and his work.
                      </p>
                      <a id="quote-tinybop-readmore" href="#">Read full testimonial</a>
                      <br/>
                      <ul className="client wow fadeIn delay-03s">
                          <li>
                              <img src={tinyhop} alt=""/>
                              <h3>Youngna Park</h3>
                              <span>COO, Tinybop</span>
                          </li>
                      </ul>
                  </div>
                  <div className="col-lg-6">
                      <p className="client-part-head wow fadeInDown delay-03s" id="quote-client2-partial">
                          Dave’s knowledge of AWS is ridiculous and he’s a great communicator. He quickly became an invaluable
                          member of DealStat’s small team during our engagement together, which included helping architect our
                          web application, optimize security and processing time, and automate deployments.
                          <br/>
                      </p>
                      <p id="quote-client2" className="client-quote">
                          <br/>
                          Dave’s knowledge of AWS is ridiculous and he’s a great communicator. He quickly became an invaluable
                          member of DealStat’s small team during our engagement together, which included helping architect our
                          web application, optimize security and processing time, and automate deployments.
                          <br/><br/>
                          He took the time to understand our business priorities, and brought a practical approach to helping
                          DealStat choose and implement the right technologies. He was hands-on and by our side until
                          everything worked smoothly.
                          <br/><br/>
                          It’s clear that Dave enjoyed working through the complex challenges that came with our project, and
                          it showed through in the outcome. His involvement was a total game-changer for the quality of
                          DealStat’s application.
                          <br/><br/>
                          Dave delivers and he’s fun to work with. We hope to get the chance again soon.
                      </p>
                      <a id="quote-client2-readmore" href="#">Read full testimonial</a>
                      <br/>
                      <ul className="client wow fadeIn delay-03s">
                          <li>
                              <img src={dealstat} alt=""/>
                              <h3>Steve Regan</h3>
                              <span>Founder, DealStat</span>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}

export default ClientsText
