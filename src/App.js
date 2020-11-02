import React, { useEffect } from 'react';
import './App.css';
import './components/Bio';
import DisplayBio from './components/Bio';
import Project from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useState } from 'react';
import Helmet from 'react-helmet';


function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [repos, setRepos] = useState([]);

  //side effect builtin hook function
  useEffect( () => {
    if(!isLoaded) {
      fetch('https://api.github.com/users/Whomey/repos')
      .then(response => response.json())
      .then( 
        (data) => { 
          setRepos(data);
          setIsLoaded(true);
        },
      )

    }

  }, [])

  return (
    <>
    <Helmet bodyAttributes={{style: 'background-color : #e8ded2'}}/>
    <DisplayBio></DisplayBio>
    <div className="container col-sm-6 col-sm-offset-3" style={{marginTop: "2%"}}>
      <div className="row">
        <div className="text-center">
          {
            repos.map(repo => {
              if( repo.description != null ) {
                return <div className="col-sm-4" key={'repo_'+repo.name}>
                        <div className="col-sm-12 projects" style={{minHeight: "190px", minWidth: "120px"}}>{Project([repo.name,repo.html_url,repo.description])}</div>
                      </div>
              } 
            })
          }
        </div>
      </div>
    </div>
    <div className="container">
      <div className="col-sm-8 col-sm-offset-2" style={{borderBottom: "double gray 3px", marginTop: "30px", marginBottom: "30px" }}></div>
    </div>
    <Skills></Skills>
    <div className="container">
      <div className="col-sm-6 col-sm-offset-3" style={{borderBottom: "double gray 3px"}}></div>
    </div>
    <Contact></Contact>
    <div className="container">
      <div className="col-sm-6 col-sm-offset-3" style={{marginTop: "30px", marginBottom: "30px"}}></div>
    </div>
    </>
  );
}

export default App;
