import React, { useState } from 'react';
import './style/profile.css';
import avatar from './icon/avatar.png';
import ReactApexChart from 'react-apexcharts';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import g3 from './icon/g3.png';
import g4 from './icon/g4.png';
import animation from './assets/animation.mp4';


const state = {          
  series: [44, 55, 41],
  options: {
    chart: {
      type: 'donut',
    },
    labels: ['Humanitarin-aid', 'Food', 'Education'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 80
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  },
};

function Profile(page) {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <div>
    <div className="Page6-sector1">
      <div className="Page6-avatar">
        <img alt="panda" src={avatar} className="Page6-avatar-photo"/>
      </div>  
      <div className="Page6-sector2">
      <div className="Page6-text">
        Carlos
      </div>
      <div className="Page6-text">
        From Seattle, WA
      </div>
      <div className="Page6-text">
        I care about environment and education
      </div>
      </div>    
    </div>
      <div>
        <div className="Page6-description">
          {"Acculative Donation"}
        </div>
        <div className="Page6-select">
        <form>
          <label>Choose a year : </label>
          <select>
            <option value="volvo">2005</option>
            <option value="saab">2006</option>
            <option value="opel">2007</option>
            <option value="audi">2008</option>
            <option value="audi">2009</option>
            <option value="audi">2010</option>
            <option value="audi">2011</option>
          </select>
        </form>          
        </div>
        <div id="chart">
          <ReactApexChart options={state.options} series={state.series} type="donut" />
        </div>
        <div>
        <table>
          <tr>
            <th>Cause</th>
            <th>Organization</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
          <tr>
            <td>Industry</td>
            <td>HEC</td>            
            <td>11/11/2020</td>
            <td>5000</td>
          </tr>
          <tr>
            <td>Education</td>
            <td>Save the children</td>            
            <td>06/06/2020</td>
            <td>3000</td>
          </tr>
          <tr>
            <td>Education</td>
            <td>UNESCO</td>            
            <td>11/01/2020</td>
            <td>8000</td>
          </tr>
          <tr>
            <td>Education</td>
            <td>HEC Foundation</td>            
            <td>09/11/2021</td>
            <td>4000</td>
          </tr>
          <tr>
            <td>Food</td>
            <td>World Food Program</td>            
            <td>11/10/2021</td>
            <td>500</td>
          </tr>
        </table>
        </div>
      </div>
      <div className="Page6-description">
          {"Badges"}
        </div>

      <div>
      <Tabs
  value={value}
  onChange={handleChange}
  textColor="secondary"
  indicatorColor="secondary"
  aria-label="secondary tabs example"
>
  <Tab value="one" label="Owned" />
  <Tab value="two" label="Mintable" />
  <Tab value="three" label="All" />
</Tabs>      
      </div>
      <a href="https://testnets.opensea.io/assets/rinkeby/0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656/61279250528949615918274109043419901250016196416068273509280419963065962856449" style={{"color":"white", "fontSize":"15px"}}>View in Opensea</a>
      <video width="750" height="500" controls loop autoPlay muted>
        <source src={animation} type="video/mp4"/>
     </video>
    </div>
  );
}

export default Profile;
