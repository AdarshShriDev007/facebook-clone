import { MoreHoriz, Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import "./RightSidebar.css";
import RightSidebarOptions from './RightSidebarOptions/RightSidebarOptions';

const RightSidebar = () => {
  return (
    <div className='rightSidebar'>
        <div className="rightSidebar-header">
            <span>Contacts</span>
            <div className="rightSidebar-header-icons">
                <IconButton><Search /></IconButton>
                <IconButton><MoreHoriz /></IconButton>
            </div>
        </div>

        <RightSidebarOptions title="Vikash Dubay" src="https://avatars.dicebear.com/api/avataaars/1734.svg" />
        <RightSidebarOptions title="Tara Tripathi" src="https://avatars.dicebear.com/api/avataaars/1234.svg" />
        <RightSidebarOptions title="Sarfraz Ahmad" src="https://avatars.dicebear.com/api/avataaars/8658.svg" />
        <RightSidebarOptions title="Neha Shrivastava" src="https://avatars.dicebear.com/api/avataaars/8678.svg" />
        <RightSidebarOptions title="Sonu Gupta" src="https://avatars.dicebear.com/api/avataaars/2341.svg" />
        <RightSidebarOptions title="Vipin Kumar" src="https://avatars.dicebear.com/api/avataaars/2347.svg" />

        <RightSidebarOptions title="Rakesh Pravin" src="https://avatars.dicebear.com/api/avataaars/1011.svg" />
        <RightSidebarOptions title="RK Singh" src="https://avatars.dicebear.com/api/avataaars/1111.svg" />
        <RightSidebarOptions title="Deepak Kumar Shah" src="https://avatars.dicebear.com/api/avataaars/1211.svg" />
        <RightSidebarOptions title="Vivek Awasthi" src="https://avatars.dicebear.com/api/avataaars/6547.svg" />
        <RightSidebarOptions title="Tarun Kumar" src="https://avatars.dicebear.com/api/avataaars/2020.svg" />

        <RightSidebarOptions title="Rahul Verma" src="https://avatars.dicebear.com/api/avataaars/0011.svg" />
        <RightSidebarOptions title="Meghna Verma" src="https://avatars.dicebear.com/api/avataaars/1100.svg" />
        <RightSidebarOptions title="Puja Dixit" src="https://avatars.dicebear.com/api/avataaars/2211.svg" />
        <RightSidebarOptions title="Divyanshi" src="https://avatars.dicebear.com/api/avataaars/2233.svg" />
        
    </div>
  )
}

export default RightSidebar;