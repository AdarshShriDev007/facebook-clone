import { Apps, Chat, Groups, Home, Notifications, People, Search } from '@mui/icons-material';
import React from 'react';
import "./Header.css";
import { Avatar, IconButton } from '@mui/material';

function Header() {
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
           
            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU' />
           
                
        </div>
    </div>
  )
}

export default Header;