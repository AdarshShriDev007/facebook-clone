import { Close, Collections, EmojiEmotions, Mood, MoreHoriz, Person, PhotoLibrary, Place, VideoCall } from '@mui/icons-material';
import { Avatar, IconButton, Modal } from '@mui/material';
import React, { useState } from 'react';
import {useUser} from "../../../contextApi/User";
import {db,collection,addDoc, storage, ref, uploadBytesResumable, getDownloadURL} from "../../../firebase";

const FeedSender = () => {

    const [open,setOpen] = useState(false);
    const {user} = useUser();
    const [input,setInput] = useState("");
    const [image,setImage] = useState("");
    const [progress,setProgress] = useState(0);

    const handleFile = ()=>{
        const inputFile = document.createElement("input");
        inputFile.type = "file";
        inputFile.addEventListener("change",(e)=>{
            handleChange(e.target.files[0]);
        })
        inputFile.click();
    }

    const handleChange = (file)=>{
        if(file)
        {
            setImage(file);
        }
    }

    const submitPost = async (e)=>{
        e.preventDefault();
        if(!image)
        {
            try{
                await addDoc(collection(db, "posts"),{
                    displayName : user.displayName,
                    photoURL : user.photoURL,
                    message : input,
                    timestamp : new Date()
                });
            }
            catch(error){
                console.error(error);
            }

            setInput("");
            setOpen(false);
        }
        else{
            const storageRef = ref(storage, `images/${image.name}`);
            const uploadTask = uploadBytesResumable(storageRef, image);
            uploadTask.on('state_changed',(snapshot)=>{
                const progress = ((snapshot.bytesTransferred / snapshot.totalBytes)*100);
                setProgress(progress); 
                if(progress === 100)
                {
                    setProgress(0);
                }
            },
            (error)=>{
                console.error(error);
            },
            ()=>{
                getDownloadURL(uploadTask.snapshot.ref).then((url)=>{
                    try{
                        addDoc(collection(db, "posts"),{
                            displayName : user.displayName,
                            photoURL : user.photoURL,
                            image : url,
                            message : input,
                            timestamp : new Date()
                        });
                    }
                    catch(error){
                        console.error(error);
                    }
                })
            }
            )

            setInput("");
            setImage("");
            setOpen(false);
        }
    }

   
  return (
    <>
        <Modal open={open} onClose={()=>setOpen(false)}>
            <div className='modal-popup'>
                <div className="modal-header">
                    <span>Create post</span>
                    <IconButton onClick={()=>setOpen(false)}>
                        <Close />
                    </IconButton>
                </div>

                <div className="modal-body">
                    <form onSubmit={submitPost}>
                        <div className="modal-body-header">
                            <Avatar src={user.photoURL} />
                            <span>{user.displayName}</span>
                        </div>

                        <div className='modal-body-middle'>
                            <textarea value={input} onChange={(e)=>setInput(e.target.value)} rows="5" placeholder={`What's on your mind, ${user.displayName.split(" ")[0]}?`}></textarea>
                        </div>
    
                        <div className="modal-body-footer">
                            <div className="modal-body-footer-left">
                                <span>Add to your post</span>
                            </div>
                            <div className="modal-body-footer-right">
                                <IconButton onClick={handleFile}><Collections style={{color:"#41B35D"}} /></IconButton>
                                <IconButton><Person style={{color:"#1771E6"}} /></IconButton>
                                <IconButton><Mood style={{color:"#EAB026"}} /></IconButton>
                                <IconButton><Place style={{color:"#E94F3A"}} /></IconButton>
                                <IconButton><MoreHoriz /></IconButton>
                            </div>
                        </div>
                        {
                            image && <h2 style={{fontSize:"14px",fontWeight:"600",textAlign:"center",marginTop:"20px",color:"green"}}>Image is added and will be displayed after clicking on post button</h2>
                        }
                        
                        
                        <input type='submit' value="Post" />
                    </form>
                </div>
            </div>
        </Modal>

        <div className='feedSender'>
            <div className='feedSender-form'>
                <Avatar src={user.photoURL} />
                <form>
                    <input onClick={()=>setOpen(true)} type='text' placeholder={`What's on your mind, ${user.displayName.split(" ")[0]}?`} />
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
            {
                progress !==0 && <progress value={progress} max="100" style={{width:"100%",marginTop:"20px"}} />
            }
        </div>

        
    </>
    
  )
}

export default FeedSender;