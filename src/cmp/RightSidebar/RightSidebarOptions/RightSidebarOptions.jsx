import { Avatar } from '@mui/material';
import React from 'react';

const RightSidebarOptions = ({title,src}) => {
  return (
    <div className="rightSidebar-options">
        <Avatar src={src} /> 
        <span>{title}</span>
    </div>
  )
}

export default RightSidebarOptions;