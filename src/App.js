import Feed from "./cmp/Feed/Feed";
import Header from "./cmp/Header/Header";
import Sidebar from "./cmp/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="App-grid">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
