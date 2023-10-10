import ResponsiveAppBar from "./components/Navbar";
import Game from "./components/Game/Game";
import "./App.css";
import Sidebar from "./components/Game/Drawer";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <div className="flex">
        <Sidebar />
        <Game />
      </div>
    </>
  );
}

export default App;
