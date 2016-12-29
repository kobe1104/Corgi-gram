import React from 'react';
import { Link, withRouter } from 'react-router';

class About extends React.Component {
  render() {
    return (
      <div className="about-me-container" onClick={() => this.props.clearSearch()}>
        <div className="about-me-box">
            <p>I was a database engineer with over 2 years of experience in both data integration and data analysis. I have produced valuable and actionable insights for our auditing team to make business decisions.</p>

            <p>I chose to become a web developer since programming has always been my passion. I picked up a few languages and frameworks on the side and was able to build this website with JavaScript, React, Redux, Ruby and Rails.</p>

            <p>I really enjoy building interesting web applications. Creating an efficient and user friendly website always makes me feel proud.</p>
        </div>
        <div className="about-me-links">
          <div className="linkedin-wrap">
            <img className="about-linkedin" src="http://res.cloudinary.com/corgi1989/image/upload/v1479490285/blue_linkdin_a38km8.png"/>
            <span className="linkedin-text">LinkedIn</span>
          </div>
          <div className="github-wrap">
            <img className="about-github" src="http://res.cloudinary.com/corgi1989/image/upload/v1479490285/blue_github_zjuqyr.png"/>
            <span className="github-text">Github</span>
          </div>
          <div className="email-wrap">
            <img className="about-email" src="http://res.cloudinary.com/corgi1989/image/upload/c_scale,w_285/v1480869730/email_icon_djamxn.png"/>
            <span className="email-text">Email Me!</span>
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(About);
