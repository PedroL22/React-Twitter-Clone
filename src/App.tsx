import Aside from "./components/Aside";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <div className="max-w-[1280px] mx-auto">
        <Aside />
        <Profile />
      </div>
    </div>
  );
}

export default App;
