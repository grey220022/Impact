import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
//import Button from '@mui/material/Button';
import './style/donation.css';
import avatar from './icon/avatar.png';
import s1 from './icon/s1.png';
import s2 from './icon/s2.png';
import s3 from './icon/s3.png';
import s4 from './icon/s4.png';
import s5 from './icon/s5.jpeg';

import a1 from './icon/a1.png';
import a2 from './icon/a2.png';
import a3 from './icon/a3.png';
import a4 from './icon/a4.png';
import a5 from './icon/a5.jpg';

const donations=[
  {
    topic: "World Food Programme",
    tags: ["Food", "Humanritarian"],
    description: "The World Food Programme is the food-assistance branch of the United Nations. It is the world's largest humanitarian organization focused on hunger and food security, and the largest provider of school meals. Founded in 1961, it is headquartered in Rome and has offices in 80 countries.",
    like: true,
    likes: 10920,
    comments: 184,
    img: "./icon/s2.png"
  },
  {
    topic: "World Central Kitchen",
    tags: ["Food", "Humanritarian"],
    description: "World Central Kitchen is a not-for-profit non-governmental organization devoted to providing meals in the wake of natural disasters. Founded in 2010 by celebrity chef José Andrés, the organization prepared food in Haiti following its devastating earthquake.",
    like: false,
    likes: 10920,
    comments: 184,
    img: "./icon/s6.png"
  }
];

function Donation() {
  return (
    <div>
      <div className="Page4-post-bar">
        <TextField id="outlined-basic" variant="filled" inputProps={{style: {fontSize: 12}}} InputLabelProps={{style: {fontSize: 12}}} fullWidth label="Search by Keyword: Education, Humanritarian Aid, Ukraine..." />
      </div>
      <div className="Page4-post-button-div">
        <button className="Page4-post-button">
          Search
        </button>
      </div>
    </div>
  );
}

export default Donation;
