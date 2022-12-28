import React from 'react';

function Contact() {

  return (

    <div className="components one-second-animation" >
      <p className="p" >I'm currently looking for remote opportunities or opportunities in Edmonton AB area, so please reach out if you are looking for an enthusiastic and creative developer! </p><br></br>
      <div id="contact-div">
        <a href="https://github.com/shraddha-kaparwan" rel="noopener noreferrer" target="_blank" >
          <img src={require("../media/github-icon.svg")} alt='' className="contact-icons" />
        </a><br></br>
        <a href="https://www.linkedin.com/in/shraddhakaparwan" rel="noopener noreferrer" target="_blank" >
          <img src={require("../media/linkedin-icon.svg")} alt='' className="contact-icons" />
        </a><br></br>
        <a href={`mailto:shraddha.kaparwan@gmail.com`} >
          <img src={require("../media/send.png")} alt='' className="contact-icons" />
        </a><br></br>
      </div>
    </div>
    
  );
  
}

export default Contact;