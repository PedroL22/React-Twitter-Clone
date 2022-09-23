import Aside from "./components/Aside";
import Profile from "./components/Profile";
import RightAside from "./components/RightAside";

function App() {
  return (
    <div className="App">
      <div className="max-w-[1280px] mx-auto">
        <Aside />
        <Profile />
        <RightAside />
      </div>
    </div>
  );
}

export default App;
