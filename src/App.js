import Feed from "./cmp/Feed/Feed";
import Header from "./cmp/Header/Header";
import RightSidebar from "./cmp/RightSidebar/RightSidebar";
import Sidebar from "./cmp/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="App-grid">
        <Sidebar />
        <Feed />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
