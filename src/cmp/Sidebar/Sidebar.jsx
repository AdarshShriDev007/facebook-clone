import React from 'react';
import "./Sidebar.css";
import SidebarOptions from './SidebarOptions/SidebarOptions';

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarOptions title="Adarsh Kumar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU" />
        <SidebarOptions title="Friends" src="https://cdn-icons-png.flaticon.com/128/11820/11820085.png" />
        <SidebarOptions title="Feeds" src="https://cdn-icons-png.flaticon.com/128/11820/11820058.png" />
        <SidebarOptions title="Groups" src="https://cdn-icons-png.flaticon.com/128/11820/11820089.png" />
        <SidebarOptions title="Marketplace" src="https://cdn-icons-png.flaticon.com/128/11820/11820128.png" />
        <SidebarOptions title="Video" src="https://cdn-icons-png.flaticon.com/128/11820/11820289.png" />
        <SidebarOptions title="Memories" src="https://cdn-icons-png.flaticon.com/128/11820/11820135.png" />
        <SidebarOptions title="Saved" src="https://cdn-icons-png.flaticon.com/128/11820/11820237.png" />
        <SidebarOptions title="Pages" src="https://cdn-icons-png.flaticon.com/128/11820/11820184.png" />
        <SidebarOptions title="Events" src="https://cdn-icons-png.flaticon.com/128/9356/9356266.png" />
        <SidebarOptions title="Messanger" src="https://cdn-icons-png.flaticon.com/128/3670/3670042.png" />
        <SidebarOptions title="See More" src="https://cdn-icons-png.flaticon.com/128/10009/10009087.png" />
    </div>
  )
}

export default Sidebar;