import React from 'react';
import { Avatar } from '@mui/material';

const Story = ({name,bgImageUrl,avatarUrl}) => {
  return (
    <div className='story' style={{backgroundImage:`url(${bgImageUrl})`}}>
        <Avatar src={avatarUrl} />
        <span>{name}</span>
    </div>
  )
}

export default Story;