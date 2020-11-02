import React from 'react';

function Project( data, readme ) {

    return (
        
        <div>
            <div className="">
                <div className="row">
                    <b><a href={data[1]} style={{fontSize: '15px', color: 'black', textDecoration: 'underline black'}}>{data[0]}</a></b>
                </div>
                <div>
                    {data[2]}
                </div>
            </div>
        </div>
    );
    
  }
  
export default Project;