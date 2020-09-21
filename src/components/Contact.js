import React from 'react';
import Resume from '../documents/MichaelMurphyResume.pdf';

function Contact() {

    return (
        <div>
            <div className="container">

                <div className="text-center">
                    <div className="row" style={{marginTop: '3%'}}>
                        <a href={Resume} target="_blank" rel="noopener noreferrer" style={{fontSize: '20px', color: 'black'}}>Resume</a>
                    </div>

                    <div className="row" style={{margin: '1%'}}>
                        <a href="https://www.linkedin.com/in/michael-murphy-03511812a/" target="_blank" rel="noopener noreferrer" style={{fontSize: '20px', color: 'black'}}>LinkedIn</a>
                    </div>

                    <div className="row" style={{margin: '1%'}}>
                        <a href='mailto:murphym1219@gmail.com' rel="noopener noreferrer" style={{fontSize: '20px'}}>murphym1219@gmail.com</a>
                    </div>
                </div>

            </div>
        </div>
    );
    
  }
  
export default Contact;