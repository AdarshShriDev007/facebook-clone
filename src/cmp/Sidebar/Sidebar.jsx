import React from 'react';
import "./Sidebar.css";
import SidebarOptions from './SidebarOptions/SidebarOptions';
import {useUser} from "../../contextApi/User";

function Sidebar() {

  const {user} = useUser();

  return (
    <div className='sidebar'>
        <SidebarOptions title={user.displayName} src={user.photoURL} />
        <SidebarOptions title="Friends" src="https://cdn-icons-png.flaticon.com/128/11820/11820085.png" />
        <SidebarOptions title="Feeds" src="https://cdn-icons-png.flaticon.com/128/11820/11820058.png" />
        <SidebarOptions title="Groups" src="https://cdn-icons-png.flaticon.com/128/11820/11820089.png" />
        <SidebarOptions title="Marketplace" src="https://cdn-icons-png.flaticon.com/128/11820/11820128.png" />
        <SidebarOptions title="Video" src="https://cdn-icons-png.flaticon.com/128/11820/11820289.png" />
        <SidebarOptions title="Memories" src="https://cdn-icons-png.flaticon.com/128/11820/11820135.png" />
        <SidebarOptions title="Saved" src="https://cdn-icons-png.flaticon.com/128/11820/11820237.png" />
        <SidebarOptions title="Pages" src="https://cdn-icons-png.flaticon.com/128/11820/11820184.png" />
        <SidebarOptions title="Messanger" src="https://cdn-icons-png.flaticon.com/128/3670/3670042.png" />
        <SidebarOptions title="See More" src="https://cdn-icons-png.flaticon.com/128/10009/10009087.png" />
    </div>
  )
}

export default Sidebar;