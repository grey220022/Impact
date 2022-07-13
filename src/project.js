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
import ApexChart from './ApexChart';
import { Theme, useTheme } from '@mui/material/styles';

//import Button from '@mui/material/Button';
import './style/donation.css';
import './style/project.css';

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

import c1 from './icon/comments.png';

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

function Project() {
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
  const [like, setLike] = useState(true);
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

  function toggleLike() {
    //setLike(!like);
    alert(1);
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
        <div className="Page5-photo-div">
          <div className="Page5-photo-div1">
            <img alt="panda" src={s2} className="Page5-photo"/>
            <div className="Page5-title">
              {"World Food Programme"}
            </div>
          </div>
          <div className="Page5-description">
            {"The World Food Programme is the food-assistance branch of the United Nations. It is the world's largest humanitarian organization focused on hunger and food security, and the largest provider of school meals. Founded in 1961, it is headquartered in Rome and has offices in 80 countries."}
          </div>
        </div>
        <div className="Page5-section">
        <div className="Page5-chart">
          <ApexChart>            
          </ApexChart>
        </div>
        <div className="Page5-tags">
          <div className="Page5-tag">
            {"Food"}
          </div>
          <div className="Page5-tag">
            {"Humanritarian"}
          </div>
          <div className="Page5-likes">
            <div className="Page5-heart" onClick={() => {toggleLike()}}>
                    {
                      like?
                        <FontAwesomeIcon icon={faHeartActive} />
                        :
                        <FontAwesomeIcon icon={faHeartInactive} />
                    }
            </div>
            <div className="Page5-likes-number">
              {"10,920 Likes"}
            </div>  
          </div>
          <div className="Page5-donate">
              {"Donate"}
          </div>          
          <div className="Page5-endorsement">
            {"Endorsed by: "}
          </div>
          <div className="Page5-endorsement-img-div">
            <img alt="panda" src={a1} className="Page5-endorsement-img"/>
          </div>
          <div className="Page5-endorsement-img-div">
            <img alt="panda" src={a2} className="Page5-endorsement-img"/>
          </div>
          <div className="Page5-firends">
            {"15 of your friends donated to this organization in the past: "}
          </div>
          <div className="Page5-endorsement-img-div">
            <img alt="panda" src={a3} className="Page5-endorsement-img"/>
          </div>
          <div className="Page5-endorsement-img-div">
            <img alt="panda" src={a4} className="Page5-endorsement-img"/>
          </div>
        </div>
        </div>
        <div>
          <img alt="panda" src={c1} className="Page5-comments-img"/>
        </div>
      </div>
    </div>
  );
}

export default Project;
