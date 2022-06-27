import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
//import Button from '@mui/material/Button';
import './style/page1.css';
import avatar from './icon/avatar.png';
import s1 from './icon/s1.png';
import s2 from './icon/s2.png';
import s3 from './icon/s3.png';
import s4 from './icon/s4.png';

import a1 from './icon/a1.png';
import a2 from './icon/a2.png';
import a3 from './icon/a3.png';
import a4 from './icon/a4.png';


function Page() {
  return (
    <div>
      <div className="Avatar">
        <img alt="panda" src={avatar} className="Avatar-photo" style={{marginTop:"10px"}}/>
      </div>
      <div className="Page1-post-bar">
        <TextField id="outlined-basic" variant="filled" fullWidth label="Share what going on your mind..." />
      </div>
      <div className="Page1-post-button-div">
        <button className="Page1-post-button">
          Create Post
        </button>
      </div>

      <div className="App-topic-cell">
          <div className="Topic-photo-div">
            <img src={s1} className="Topic-photo"/>
          </div>
            <div className="Topic-text">
              <div className="Topic-text1">
                {"Pavel has a question about crypto donation"}
              </div>
              <div className="Topic-photo-small-div">
                <img src={a1} className="Topic-photo-small"/>
              </div>
              <div className="Topic-text2">
                {"  244568 Views;    10323 Likes;   12 comments"}
              </div>          
            </div>
        </div>      
        <div className="App-topic-cell">
          <div className="Topic-photo-div">
            <img src={s2} className="Topic-photo"/>
          </div>
            <div className="Topic-text">
              <div className="Topic-text1">
                {"Jane Donated 1000 USDC to World Food Programme"}
              </div>
              <div className="Topic-photo-small-div">
                <img src={a2} className="Topic-photo-small"/>
              </div>
              <div className="Topic-text2">
                {"  244568 Views;    10323 Likes;   12 comments"}
              </div>          
            </div>
        </div>      

        <div className="App-topic-cell">
          <div className="Topic-photo-div">
            <img src={s3} className="Topic-photo"/>
          </div>
            <div className="Topic-text">
              <div className="Topic-text1">
                {"A Nameless Legend claims a high honor badge!"}
              </div>
              <div className="Topic-photo-small-div">
                <img src={a3} className="Topic-photo-small"/>
              </div>
              <div className="Topic-text2">
                {"  244568 Views;    10323 Likes;   12 comments"}
              </div>          
            </div>
        </div>      

        <div className="App-topic-cell">
          <div className="Topic-photo-div">
            <img src={s4} className="Topic-photo"/>
          </div>
            <div className="Topic-text">
              <div className="Topic-text1">
                {"Impactopia community had an organization visit with Save the Children"}
              </div>
              <div className="Topic-photo-small-div">
                <img src={a4} className="Topic-photo-small"/>
              </div>
              <div className="Topic-text2">
                {"  244568 Views;    10323 Likes;   12 comments"}
              </div>          
            </div>
        </div>
    </div>
  );
}

export default Page;
