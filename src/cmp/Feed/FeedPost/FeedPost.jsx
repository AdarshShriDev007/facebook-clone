import { CommentOutlined, MoreHoriz, Public, ShareOutlined, ThumbUpOffAlt } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';

const FeedPost = ({displayName,photoURL,image,message,timestamp}) => {
  return (
    <div className='feedPost'>
        <div className="feedPost-header">
            <div className="feedPost-header-left">
                <Avatar src={photoURL} />
                <div className="feedPost-header-left-info">
                    <span>{displayName}</span>
                    <span>{timestamp} <Public /></span>
                </div>
            </div>
            <div className="feedPost-header-right">
                <MoreHoriz />
            </div>
        </div>

        <div className="feedPost-body">
            <div className='feedPost-text'>
                <span>
                    {message}
                </span>
            </div>
            {
                image && <img src={image} alt='post-pic' />
            }
            
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