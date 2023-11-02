import ResponsiveAppBar from "./components/Navbar";
import Game from "./components/Game/Game";
import "./App.css";
import Sidebar from "./components/Game/Drawer";
import { useRef } from "react";

function App() {
  const usernameRef = useRef('user1');
  const emailRef = useRef('user@test.com');
  const ageRef = useRef(30);
  const genderRef = useRef('M');
  const locationRef = useRef('Singapore');

  const refs = {
    username: usernameRef,
    email: emailRef,
    age: ageRef,
    gender: genderRef,
    location: locationRef,
    test: "adhi"
  }

  return (
    <>
      <ResponsiveAppBar />
      <div className="flex">
        <Sidebar refs={refs} />
        <Game refs={refs}/>
      </div>
    </>
  );
}

export default App;
