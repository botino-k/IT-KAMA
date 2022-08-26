import "./App.css";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App(props) {

  return (
    
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/message/*" element={<Dialogs userData = {props.userData} userMassage = {props.userMassage} />} />
          <Route path="/profile"  element={<Profile posts = {props.posts} />} />
          <Route path=""  element={<Profile />} />
        </Routes>
     
      </div>
    </BrowserRouter>
  );
}

export default App;
