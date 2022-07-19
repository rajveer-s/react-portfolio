import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init({
  duration: 3000
}
);

const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <div id="aboutPic"
        data-aos="fade-left"
      >
        {/* selfie update  */}
        <img src='https://bootcampspot.com/broker/studentAvatar?accountId=102745' alt='Profile pic' />
      </div>
      <p data-aos="fade-right"> Hello there, My name is Rajveer Singh. I am a Full stack developer certified from UCLA extension. I specialize in JavaScript. I have worked with technologies such as Handlebars, Express JS, MonogoDB, Git, and Herkou. I also have experience working with React. I am dedicated to the quest of developing solutions that leverage on best practice technologies to develiver over the top user experience.</p>
      <div id='resumeDiv'><a href="../public/resume.pdf" download>RESUME</a></div>
    </div>
  )
}

export default About

// About page needs testimonials or mayvbe comments 