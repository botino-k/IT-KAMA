import stl from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav>
      <div className={stl.link}><a href='profile'>Profile</a></div>
      <div className={stl.link}><a href='message'>Message</a></div>
      <div className={stl.link}><a href='news'>News</a></div>
      <div className={stl.link}><a href='music'>Music</a></div>
      <div className={stl.link}><a href='settings'>Settings</a></div>
    </nav>
  )
};

export default NavBar;