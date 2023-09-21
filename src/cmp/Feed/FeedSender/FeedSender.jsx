import { EmojiEmotions, PhotoLibrary, VideoCall } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';

const FeedSender = () => {
  return (
    <div className='feedSender'>
        <div className='feedSender-form'>
            <Avatar />
            <form>
                <input type='text' placeholder="What's on your mind, Adarsh?" />
            </form>
        </div>

        <div className='feedSender-icons'>
            <div className="feedSender-icons-option">
                <VideoCall style={{color:"#E42645"}} />
                <span>Live video</span>
            </div>
            <div className="feedSender-icons-option">
                <PhotoLibrary style={{color:"#41B35D"}} />
                <span>Photo/video</span>
            </div>
            <div className="feedSender-icons-option">
                <EmojiEmotions style={{color:"#ECB639"}} />
                <span>Feeling/activity</span>
            </div>
        </div>
    </div>
  )
}

export default FeedSender;