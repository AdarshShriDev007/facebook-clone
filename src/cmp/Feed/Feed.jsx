import React, { useEffect, useState } from 'react';
import "./Feed.css";
import FeedStory from './FeedStory/FeedStory';
import FeedSender from './FeedSender/FeedSender';
import FeedPost from './FeedPost/FeedPost';
import {db,collection,query,orderBy,onSnapshot} from "../../firebase";

function Feed() {

  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    const queryData = query(collection(db, "posts"), orderBy("timestamp","desc"));
    onSnapshot(queryData,(snapshot)=>{
      const snap = snapshot.docs.map((doc)=>({
        id : doc.id,
        data : doc.data()
      }))
      setPosts(snap);
    });
  },[]);

  return (
    <div className='feed' >
        <FeedStory />

          <div style={{margin:"0px 80px"}}>
          <FeedSender />

          {
            posts && posts.map(({id,data})=>{
              return <FeedPost
              key={id} 
              displayName={data.displayName} 
              photoURL={data.photoURL} 
              image={data.image}
              message={data.message}
              timestamp={new Date(data.timestamp?.seconds*1000).toLocaleTimeString()}
            />
            })
          }
          
          </div>
          
        
        
    </div>
  )
}

export default Feed;