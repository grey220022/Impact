import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartActive } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartInactive } from '@fortawesome/free-regular-svg-icons';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Theme, useTheme } from '@mui/material/styles';

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const donations=[
  {
    topic: "World Food Programme",
    tags: ["Food", "Humanritarian"],
    description: "The World Food Programme is the food-assistance branch of the United Nations. It is the world's largest humanitarian organization focused on hunger and food security, and the largest provider of school meals. Founded in 1961, it is headquartered in Rome and has offices in 80 countries.",
    like: true,
    likes: 10920,
    comments: 184,
    img: require("./icon/s2.png").default,
  },
  {
    topic: "World Central Kitchen",
    tags: ["Food", "Humanritarian"],
    description: "World Central Kitchen is a not-for-profit non-governmental organization devoted to providing meals in the wake of natural disasters. Founded in 2010 by celebrity chef José Andrés, the organization prepared food in Haiti following its devastating earthquake.",
    like: false,
    likes: 10920,
    comments: 184,
    img: require("./icon/s6.png").default,
  }
];

function Donation() {
  const [likes, setLikes] = useState([true, false]);
  const causeFilters = [
    'Food',
    'Humanritarian',
  ];
  const locationFilters = [
    'Russia',
    'Canada',
    'China',
    'United States',
    'Brazil',
    'Australia',
    'India'
  ];
  const [cause, setCause] = useState([true, false]);
  const [location, setLocation] = useState([true, false]);
  const theme = useTheme();
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCause(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleLocationChange = (event) => {
    const {
      target: { value },
    } = event;
    setLocation(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  function getStyles(name, cause, theme) {
    return {
      fontWeight:
        cause.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  function getLocationStyles(name, cause, theme) {
    return {
      fontWeight:
        location.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  function toggleLike(id) {
    const copyLikes=[];
    for (let i=0; i<likes.length; i++){
      copyLikes.push(likes[i]);
    }
    copyLikes[id] = !copyLikes[id];
    setLikes(copyLikes);
  }  
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

      <div className="Page4-filter">
      <span className="Page4-filter-text">
        Filter by cause :
      </span>

      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={cause}
          onChange={handleChange}
          input={<OutlinedInput label="S" />}
          MenuProps={MenuProps}
        >
          {causeFilters.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, cause, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>

      <div className="Page4-filter">
      <span className="Page4-filter-text">
        Filter by location :
      </span>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={location}
          onChange={handleLocationChange}
          input={<OutlinedInput label="S" />}
          MenuProps={MenuProps}
        >
          {locationFilters.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getLocationStyles(name, location, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>


      <div className="Page4-topic-area">
        {
          donations.map((don, index)=>{
            return (
              <div className="Page4-topic-div">
                <div className="Page4-topic">
                  {don.topic}
                </div>
                <div className="Page4-img">
                  <img src={don.img} width="200" height="200"/>
                </div>
                <div className="Page4-description-div">
                  <div className="Page4-description">
                    {don.description}
                  </div>
                </div>
                <div>
                  <div className="Page4-like" onClick={() => toggleLike(index)}>
                    {
                      likes[index]?
                        <FontAwesomeIcon icon={faHeartActive} />
                        :
                        <FontAwesomeIcon icon={faHeartInactive} />
                    }
                  </div>
                  <div className="Page4-tag-div">
                    <span className="Page4-tag">
                      Food
                    </span>
                    <span className="Page4-tag">
                      Humanritarian
                    </span>
                  </div>
                </div>
                <div>
                  <span className="Page4-commenttext">
                    {don.likes+" Likes"}
                  </span>
                  <span className="Page4-commenttext">
                    {don.comments+" Comments"}
                  </span>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Donation;
