import stl from './NavBar.module.css'

const NavBar = ()=>{
  return(
  <nav>
    <div className={stl.link}>Profile</div>
    <div className={stl.link}>Message</div>
    <div className={stl.link}>News</div>
    <div className={stl.link}>Music</div>
    <div className={stl.link}>Settings</div>
  </nav>
  )
  };
  
  export default NavBar;