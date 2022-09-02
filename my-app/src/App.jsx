import "./App.css";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import HookWrapper from "./components/HookEx/HookWr.jsx";
import {Routes, Route} from "react-router-dom";

function App(props) {

  return (
      <div className="wrapper">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/message/*" element={<Dialogs state = {props.state.massagePage} />} />
          <Route path="/profile"  element={<Profile state = {props.state.profilePage} />} />
          <Route path=""  element={<Profile state = {props.state.profilePage} />} />
          <Route path="/hookex"  element={<HookWrapper />} />
        </Routes>
      </div>
  );
}

export default App;
