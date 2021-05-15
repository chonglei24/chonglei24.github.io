import React from 'react';
import profileImg from '../assets/me.jpeg';
import '../App.scss';

const AboutMeSection = React.forwardRef((props, ref) => {
  return (
    <div className='section about-me-section' ref={ref}>
      <img alt='me' src={profileImg} />
      <h1>About Me</h1>
      <p>
        I graduated from University of California, Irvine in 2019 as a Sociology major. Though I wanted to graduate as a Software Engineering major, I tried to switch too late. I was only able to graduate with a minor in Software Engineering, so I had to do a lot of self-study on my own. My journey has made me a self-driven and passionate front-end software engineer (with a desire to eventually become a full-stack engineer), and I am constantly seeking every opportunity to learn new coding concepts and industry skills. I have a strong background in in front-end web development using React (with Next.js), Redux, CSS and the JavaScript testing framework, Cypress.io. I'm also well-versed with Git. Lastly, I enjoy collaborating with others and working in groups, and I believe that one can achieve greater heights by working with others rather than by working alone!
      </p>
    </div>
  )
});

export default AboutMeSection;