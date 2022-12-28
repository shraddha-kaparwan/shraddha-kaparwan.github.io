import React from 'react';

function About() {

  return (

    <div className="components" id="about-div">
      <img src={require("../media/sk-profile.png")} alt='' id="profile-picture" />
      <p className="p" id="about" >I'm Shraddha, currently studying  Front End Development with MasterSchool. </p>
      <p className="p" id="about" >I'm originally from India, but I now live in Edmonton AB Canada, where I'm currently looking for opportunities in Front End Development. </p> 
      <p className="p" id="about" >I've done my Masters and Graduation in Computer Science From India. I also have exposure to Front End Test Automation using Selenium Webdriver</p> 
      <p className="p" id="about" >Without knowing it, I think I've always been a FE Developer at heart - having the chance to learn and develop myself is what motivates me more than anything else, and I love being able to combine my creative side with my problem solving skills. I'm organised, detail-oriented, and motivated, and my international background in Computer Science education means that I am highly adaptable and bring a unique perspective to all of my coding projects.</p> 
    </div>
    
  );
  
}

export default About;