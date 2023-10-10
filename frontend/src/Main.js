import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import App from "./App";
import Company from "./components/Company/Company";
import SignInSide from "./welcome/SignInSide";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<SignInSide />}></Route>
        <Route path="/game" element={<App />}></Route>
        <Route path="/company" element={<Company />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
