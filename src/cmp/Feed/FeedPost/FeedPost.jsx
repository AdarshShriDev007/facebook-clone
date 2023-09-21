import { CommentOutlined, MoreHoriz, Public, ShareOutlined, ThumbUpOffAlt } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';

const FeedPost = () => {
  return (
    <div className='feedPost'>
        <div className="feedPost-header">
            <div className="feedPost-header-left">
                <Avatar />
                <div className="feedPost-header-left-info">
                    <span>Adarsh Kumar</span>
                    <span>03:23 AM <Public /></span>
                </div>
            </div>
            <div className="feedPost-header-right">
                <MoreHoriz />
            </div>
        </div>

        <div className="feedPost-body">
            <div className='feedPost-text'>
                <span>
                    Lorem ipsum dolor sit amet, consectetur
                     adipisicing elit. Cum tenetur unde, ipsa accusantium repellat
                     , debitis, alias aliquid eveniet beatae pariatur dolore ad 
                     quis? Doloremque quidem dolores dicta architecto, minima ipsum!
                </span>
            </div>
            <img src='https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHx8fDE2OTUxODc2ODR8MA&ixlib=rb-4.0.3' alt='post-pic' />
        </div>

        <div className="feedPost-footer">
            <div className="feedPost-footer-options">
                <ThumbUpOffAlt />
                <span>Like</span>
            </div>
            <div className="feedPost-footer-options">
                <CommentOutlined />
                <span>Comment</span>
            </div>
            <div className="feedPost-footer-options">
                <ShareOutlined />
                <span>Share</span>
            </div>
        </div>
    </div>
  )
}

export default FeedPost;