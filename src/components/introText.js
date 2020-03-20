import React from 'react'
import aws1 from '../../content/assets/images/AWS_Certified_Logo_294x230_Color.png'
import aws2 from '../../content/assets/images/AWS_Certified_Tag__SAA_294x230-Color.png'
import aws3 from '../../content/assets/images/AWS_Certified_Logo__SolutionsArchitect_Professional_294x230-Color.png'
import '../../content/assets/css/header.css'
import '../../content/assets/css/style.css'
import '../../content/assets/css/animate.css'
import '../../content/assets/css/font-awesome.min.css'
import '../../content/assets/css/bootstrap.css'

class IntroText extends React.Component {


  render() {
    var style = {
         fontSize: 16
       };

    return (

      <section className="main-section" id="intro">

          <div className="container">
              <div className="servicelink col-md-3 ">
                <img src={aws1} alt="" />
                <img src={aws2} alt="" />
                <img src={aws3} alt="" />

              </div>
              <div className="col-md-9">
                  <h6 style = {style}>
                      When your website <b>IS your business</b>, revenue depends on reliable, automated infrastructure and
                      proven
                      process. <b>Continuous uptime, data security, speed and cost efficiency</b> are critical to your
                      success.
                      <br/><br/>
                      Bring 20 years of web engineering experience to your critical systems so you can <b>save money,
                      scale
                      quickly, maximize developer productivity</b> and free your team to focus on features.
                      <br/><br/>
                      You have a unique product, business and team. I listen to your priorities, assess your specific
                      technical
                      needs and bring a practical approach to build the <b>exact solution that works for you.</b>

                  </h6>
              </div>

          </div>

      </section>
    )
  }
}


export default IntroText
