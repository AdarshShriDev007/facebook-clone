import { useEffect } from "react";
import Feed from "./cmp/Feed/Feed";
import Header from "./cmp/Header/Header";
import Login from "./cmp/Login/Login";
import RightSidebar from "./cmp/RightSidebar/RightSidebar";
import Sidebar from "./cmp/Sidebar/Sidebar";
import { useUser } from "./contextApi/User";
import {
  auth,
  onAuthStateChanged
} from "./firebase";

function App() {

  const userInfo = useUser();

  useEffect(()=>{
    onAuthStateChanged(auth,(userData)=>{
      if(userData)
      {
        userInfo.setUser({
          displayName : userData.displayName,
          photoURL : userData.photoURL
        })
      }
      else{
        userInfo.setUser(null);
      }
    })
  },[]);

  return (
    <>
      {
        !userInfo.user ? (<Login />) : (<div className="App">
        <Header />

        <div className="App-grid">
          <Sidebar />
          <Feed />
          <RightSidebar />
        </div>
      </div>)
      }
    </>
    
  );
}

export default App;
