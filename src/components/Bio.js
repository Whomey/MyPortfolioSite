import React from 'react';
import profilePic from '../images/Photo2.png';

function DisplayBio() {

    return (
        <div className="container" id="profile-pic" style={{marginTop: '5%'}}>
            <div className="text-center">
                <img className="center" src={profilePic} alt="profilePic" height="300" width="225" style={{borderRadius: "50%"}}></img>
            </div>
            <div className="text-center">
                <h3>Michael Murphy</h3>

                <h4>Software Developer</h4>

                <h3 id="intro">
                Hi, I'm Mike!
                </h3>

                <p className="col-sm-8 col-sm-offset-2">
                A Computer Science new graduate from State University of New York, Oswego.
                <br></br><br></br>I'm a firm believer in approaching work and life with a growth mindset. My love for software development stems from this mindset as I get to learn something new everyday. 
                I love the problem solving process. There's no better feeling than seeing the end result of time and effort.
                </p>
            </div>
            <div className="col-sm-8 col-sm-offset-2" style={{borderBottom: "double gray 3px"}}></div>
        </div>
    );
  }
  
  export default DisplayBio;