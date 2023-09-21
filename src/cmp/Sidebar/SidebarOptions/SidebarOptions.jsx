import { Avatar} from '@mui/material';
import React from 'react';

function SidebarOptions({title,src}) {
  return (
    <div className='sidebarOptions'> 
        <Avatar src={src} /> 
        <span>{title}</span>
    </div>
  )
}

export default SidebarOptions;