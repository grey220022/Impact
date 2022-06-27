import avatar from './icon/avatar.png';
import guest from './icon/guest.png';
import sb1 from './icon/sidebar1.png';
import sb2 from './icon/sidebar2.png';
import sb3 from './icon/sidebar3.png';
import g1 from './icon/g1.png';
import g2 from './icon/g2.png';
import g3 from './icon/g3.png';
import g4 from './icon/g4.png';
import p1 from './icon/p1.png';
import p2 from './icon/p2.png';
import p3 from './icon/p3.png';

import './style/App.css';
import './style/sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCalendarDay, faPeopleArrows, faDonate, faCommentDots } from '@fortawesome/free-solid-svg-icons'
//import { faThumbsUp } from '@fortawesome/pro-regular-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons'
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import React, { useState } from 'react';
import Web3 from "web3"; 
//import Page from './Page.js';
import Page1 from './community';

function Page(props) {
  const currentPage = props.currentPage;
  if (currentPage===0){
    return (
      <Page1/>
    )
  }
  if (currentPage===1){
    return (
      <div>Calandar page</div>
    )
  }
  if (currentPage===2){
    return (
      <div>New page</div>
    )
  }
  if (currentPage===3){
    return (
      <div>Donation page</div>
    )
  }  
  return null;  
}

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [signin, setSignin] = useState(false);
  const [connectwallet, setConnectwallet] = useState(false);
  const [walletaddress, setWalletaddress] = useState("");
  const [web3, setWeb3] = useState(null);


  const checknetwork = async (ins) =>{
    const networkresult = await ins.eth.net.getNetworkType();
    if (networkresult != "main"){
      alert("Please switch to ethereum mainnet");
      return false;
    }
    return true;
  }

  const connectWalletClick = async () => {
    if (true) {

    if (connectwallet) {
      setWeb3(null);
      setConnectwallet(false);
      setWalletaddress("");
      return;
    }
    var instance = null;
    if (window.ethereum) {
      try {
        instance = new Web3(window.ethereum);
      } catch (error) {
        console.error(error);
      }
    } else if (window.web3) {
      instance = new Web3(window.web3);
    }
    setWeb3(instance);
    if (instance) {
      if (! (await checknetwork(instance))){
        return;
      }  
      
      if (window.ethereum) {
        try {          
          await window.ethereum.enable();      
          instance.eth.getAccounts().then(async(accounts) => {
            setWalletaddress(accounts[0]);
            setConnectwallet(true);          
            //console.log(accounts[0]);
          });
        } catch (error) {
          console.error(error);
        }
      } else if (window.web3) {
        await window.web3.enable();
        instance.eth.getAccounts().then(async(accounts) => {
          setWalletaddress(accounts[0]);          
          setConnectwallet(true);
          window.ethereum.on('accountsChanged', async function (accounts) {
            if (accounts && accounts.length>0){
              setWalletaddress(accounts[0]);  
            }
        });
        });
      }
      else {
        alert("Please install Metamask extension!");
      }
    }
    else {
      alert("Please install Metamask extension!");
    }
    }
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-bar">
          <div className="App-header-text">
            {"Impactopia"}
          </div>
          <div>
          <div className={currentPage === 0 ? "App-header-icon-selected" : "App-header-icon-unselected"} onClick={() => setCurrentPage(0)}>
            <FontAwesomeIcon icon={faHouse} />
          </div>
          <div className={currentPage === 1 ? "App-header-icon-selected" : "App-header-icon-unselected"} onClick={() => setCurrentPage(1)}>
            <FontAwesomeIcon icon={faCalendarDay}/>
          </div>
          <div className={currentPage === 2 ? "App-header-icon-selected" : "App-header-icon-unselected"} onClick={() => setCurrentPage(2)}>
            <FontAwesomeIcon icon={faPeopleArrows} />
          </div>
          <div className={currentPage === 3 ? "App-header-icon-selected" : "App-header-icon-unselected"} onClick={() => setCurrentPage(3)}>
            <FontAwesomeIcon icon={faDonate} />
          </div>
          <div className="App-search-bar">
          <TextField id="outlined-basic" variant="filled" fullWidth label="Search" />
          </div>
          <div className="App-sign" onClick={() => setSignin(!signin)}>
            {signin? "Sign out": "Sign in"}
          </div>
          <Tooltip interactive={true} disableFocusListener title={
          <>
          <a href="https://Profile.com" target="_BLANK">See profile</a>
          </>
          }>
          <div className="Avatar">
            <img alt="panda" src={signin? avatar:guest} className="Avatar-photo"/>
          </div>
          </Tooltip>
          <div className="Wallet" onClick={connectWalletClick}>
            {connectwallet? walletaddress.substr(0, 4) + "..." + walletaddress.substr(-8) : "Connect wallet"}
          </div>
          <div className="App-header-icon-group2">
            <div className="App-header-icon-unselected right">
            <FontAwesomeIcon icon={faCommentDots} />
            </div>
            <div className="App-header-icon-unselected right">
              <FontAwesomeIcon icon={faBell} />
            </div>
            </div>
          </div>
        </div>
        <div className="App-sidebar-cell">
          <div className="Sidebar-photo-div">
            <img src={sb1} className="Sidebar-photo"/>
          </div>
            <div className="Sidebar-text">
              <div className="Sidebar-text1">
                {"Newest and Recent"}
              </div>
              <div className="Sidebar-text2">
                {"Find the latest update"}
              </div>
            </div>
        </div>
        <div className="App-sidebar-cell">
          <div className="Sidebar-photo-div">
            <img src={sb2} className="Sidebar-photo"/>
          </div>
            <div className="Sidebar-text">
              <div className="Sidebar-text1">
                {"Popular of the day"}
              </div>
              <div className="Sidebar-text2">
                {"Shots featured today by curators"}
              </div>          
            </div>
        </div>
        <div className="App-sidebar-cell">
            <div className="Sidebar-photo-div">
              <img src={sb3} className="Sidebar-photo"/>
            </div>
            <div className="Sidebar-text">
              <div className="Sidebar-text1">
                {"Following"}
              </div>
              <div className="Sidebar-text2">
                {"Explore from your favorite person"}
              </div>          
            </div>
        </div>

        <div className="App-sidebar-pin-group">
          <div className="App-sidebar-pin-group-title">
            {"Pinned group →"}
          </div>
          <div className="App-sidebar-group-cell">
            <div className="Sidebar-photo-div">
              <img src={g1} className="Sidebar-photo"/>
            </div>
            <div className="Sidebar-text">
              <div className="Sidebar-text1">
                {"#Ukraine"}
              </div>
              <div className="Sidebar-text2">
                {"82645 Posted by this tag"}
              </div>          
            </div>
          </div>

          <div className="App-sidebar-group-cell">
            <div className="Sidebar-photo-div">
              <img src={g2} className="Sidebar-photo"/>
            </div>
            <div className="Sidebar-text">
              <div className="Sidebar-text1">
                {"#Foodsecurity"}
              </div>
              <div className="Sidebar-text2">
                {"82645 Posted by this tag"}
              </div>          
            </div>
          </div>

          <div className="App-sidebar-group-cell">
            <div className="Sidebar-photo-div">
              <img src={g3} className="Sidebar-photo"/>
            </div>
            <div className="Sidebar-text">
              <div className="Sidebar-text1">
                {"#Education"}
              </div>
              <div className="Sidebar-text2">
                {"82645 Posted by this tag"}
              </div>
            </div>
          </div>
          <div className="App-sidebar-group-cell">
            <div className="Sidebar-photo-div">
              <img src={g4} className="Sidebar-photo"/>
            </div>
            <div className="Sidebar-text">
              <div className="Sidebar-text1">
                {"#Sustainability"}
              </div>
              <div className="Sidebar-text2">
                {"82645 Posted by this tag"}
              </div>          
            </div>
          </div>

        </div>



        <div className="App-sidebar-promoted-group">
          <div className="App-sidebar-pin-group-title">
            {"Promoted →"}
          </div>
          <div className="App-sidebar-group-cell">
            <div className="Sidebar-photo-div">
              <img src={p1} className="Sidebar-photo"/>
            </div>
            <div className="Sidebar-text">
              <div className="Promote-text1">
                {"Secure your web3 experience"}
              </div>
              <div className="Sidebar-text2">
                {"by Ledger"}
              </div>          
            </div>
          </div>

          <div className="App-sidebar-group-cell">
            <div className="Sidebar-photo-div">
              <img src={p2} className="Sidebar-photo"/>
            </div>
            <div className="Sidebar-text">
              <div className="Promote-text1">
                {"Gourmet Vegetarian Meat Alternative, lowering green house gas"}
              </div>
              <div className="Sidebar-text2">
                {"by HappyVore"}
              </div>          
            </div>
          </div>

          <div className="App-sidebar-group-cell">
            <div className="Sidebar-photo-div">
              <img src={p3} className="Sidebar-photo"/>
            </div>
            <div className="Sidebar-text">
              <div className="Promote-text1">
                {"Shop Indigenous handcraft to support the community"}
              </div>
              <div className="Sidebar-text2">
                {"by Culture Survival"}
              </div>
            </div>
          </div>
        </div>

        <div className="App-page">
          <Page currentPage={currentPage}/>
        </div>
      </header>
    </div>
  );
}

export default App;
