import "./App.css";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import DialogsPage from "./components/DialogsPage/DialogsPage.jsx";
import ClassComponent from "./components/ClassComponent/ClassComponent.jsx";
import HookWrapper from "./components/HookEx/HookWr.jsx";
import FileInput from "./components/Ref/FileInput.jsx"
import { Routes, Route } from "react-router-dom";

function App(props) {

  return (
    <div className="wrapper">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/message/*" element={<DialogsPage />} />
        <Route path="/hookex" element={<HookWrapper />} />
        <Route path="/ref" element={<FileInput />} />
        <Route path="/classcomp" element={<ClassComponent />} />
      </Routes>
    </div>
  );
}

export default App;
