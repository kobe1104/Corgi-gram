import React from 'react';
import { Link, withRouter } from 'react-router';

class About extends React.Component {
  render() {
    return (
      <div className="about-me-container">
        <div className="about-me-box">
          <img className="portrait" src="http://res.cloudinary.com/corgi1989/image/upload/v1478891286/ejurqeq3l4odef6pbwia.jpg"/>
          <p className="my-story">I am a database engineer with over 2 years of experience in both data integration and data analysis. I have produced valuable and actionable insights for our auditing team to make business decisions.
            Programming has always been my passion. Therefore, I decided to attend to a programming bootcamp to learn more about it. While I was there, I picked up a couple languages and frameworks within 2 months. On top of that, I built a full stack single page web application independently with Ruby on Rails and React.js framework in 9 days. I also made a user interactive browser game that challenges players reaction time by using JavaScript for game logic, CreateJS for game physics and Howler.js for sound effects.
            I really enjoy working on the front end side of web development as well as pair programming. Creating an efficient and user friendly website with a team always makes me feel proud.
          </p>
        </div>
        <div className="about-me-links">
          <img className="about-linkedin" src="http://res.cloudinary.com/corgi1989/image/upload/v1479490285/blue_linkdin_a38km8.png"/>
          <img className="about-github" src="http://res.cloudinary.com/corgi1989/image/upload/v1479490285/blue_github_zjuqyr.png"/>
          <img className="about-email" src="http://res.cloudinary.com/corgi1989/image/upload/c_scale,w_285/v1480869730/email_icon_djamxn.png"/>
        </div>

      </div>
    );
  }
}

export default withRouter(About);
