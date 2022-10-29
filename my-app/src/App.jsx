import "./App.css";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import HookWrapper from "./components/HookEx/HookWr.jsx";
import FileInput from "./components/Ref/FileInput.jsx"
import { Routes, Route } from "react-router-dom";

function App(props) {

  return (
    <div className="wrapper">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/message/*" element={<Dialogs state={props.state.massagePage}  dispatch={props.dispatch} />} />
        <Route path="/profile" element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}  />} />
        {/* <Route path="" element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} /> */}
        <Route path="/hookex" element={<HookWrapper />} />
        <Route path="/ref" element={<FileInput refPage={props.state.refPage.cardCollection}/>} />
      </Routes>
    </div>
  );
}

export default App;
