import { Close, Collections, EmojiEmotions, Mood, MoreHoriz, Person, PhotoLibrary, Place, VideoCall } from '@mui/icons-material';
import { Avatar, IconButton, Modal } from '@mui/material';
import React, { useState } from 'react';

const FeedSender = () => {

    const [open,setOpen] = useState(true);
   

  return (
    <>
        <Modal open={open}>
            <div className='modal-popup'>
                <div className="modal-header">
                    <span>Create post</span>
                    <IconButton>
                        <Close />
                    </IconButton>
                </div>

                <div className="modal-body">
                    <form>
                        <div className="modal-body-header">
                            <Avatar />
                            <span>Adarsh Kumar</span>
                        </div>

                        <div className='modal-body-middle'>
                            <textarea rows="5" placeholder="What's on your mind, Adarsh?"></textarea>
                        </div>
    
                        <div className="modal-body-footer">
                            <div className="modal-body-footer-left">
                                <span>Add to your post</span>
                            </div>
                            <div className="modal-body-footer-right">
                                <IconButton><Collections style={{color:"#41B35D"}} /></IconButton>
                                <IconButton><Person style={{color:"#1771E6"}} /></IconButton>
                                <IconButton><Mood style={{color:"#EAB026"}} /></IconButton>
                                <IconButton><Place style={{color:"#E94F3A"}} /></IconButton>
                                <IconButton><MoreHoriz /></IconButton>
                            </div>
                        </div>

                        <input type='submit' value="Post" />
                    </form>
                </div>
            </div>
        </Modal>

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

        
    </>
    
  )
}

export default FeedSender;