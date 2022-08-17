import stl from './NavBar.module.css'
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className={stl.link}><NavLink className={(el)=>el.isActive? stl.active : ''} to='profile'>Profile</NavLink></div>
      <div className={stl.link}><NavLink className={(el)=>el.isActive? stl.active : ''} to='message'>Message</NavLink></div>
      <div className={stl.link}><NavLink className={(el)=>el.isActive? stl.active : ''} to='news'>News</NavLink></div>
      <div className={stl.link}><NavLink className={(el)=>el.isActive? stl.active : ''} to='music'>Music</NavLink></div>
      <div className={stl.link}><NavLink className={(el)=>el.isActive? stl.active : ''} to='settings'>Settings</NavLink></div>
    </nav>
  )
};

export default NavBar;

