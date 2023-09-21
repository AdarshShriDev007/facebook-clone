import React from 'react';
import "./Feed.css";
import FeedStory from './FeedStory/FeedStory';
import FeedSender from './FeedSender/FeedSender';
import FeedPost from './FeedPost/FeedPost';

function Feed() {
  return (
    <div className='feed'>
        <FeedStory />

        <div style={{margin:"0px 50px"}}>
          <FeedSender />
          <FeedPost />
        </div>
        
    </div>
  )
}

export default Feed;