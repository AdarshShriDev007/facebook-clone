import { Apps, Chat, Groups, Home, Notifications, People, Search } from '@mui/icons-material';
import React from 'react';
import "./Header.css";
import { Avatar, IconButton } from '@mui/material';
import {auth, signOut} from "../../firebase";
import { useUser } from "../../contextApi/User";

function Header() {

    const {user} = useUser();

  return (
    <div className='header'>
        <div className='header-left'>
            <img src='facebook.png' alt='logo' />
            <div className="header-left-search-box"> 
                <Search />
                <input type='text' placeholder='Search Facebook' />
            </div>
        </div>

        <div className='header-middle'>
            <div className='header-middle-options header-middle-options-active'>
                <Home />
            </div>
            <div className='header-middle-options'>
                <People />
            </div>
            <div className='header-middle-options'>
                <Groups className='rounded' />
            </div>
        </div>

        <div className='header-right'>
            <span>Find friends</span>
            <Apps />
            <Chat style={{padding:"10px"}} />
            <Notifications style={{padding:"10px"}} />
        
            <Avatar title="Logout" style={{cursor:"pointer"}} onClick={()=>signOut(auth)} src={user.photoURL} />
           
                
        </div>
    </div>
  )
}

export default Header;