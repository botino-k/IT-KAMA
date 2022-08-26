import stl from './Header.module.css'
import Clock from './Clock';
import Toggle from './Toggle';

const Header = () => {
  return (
    <header>
      <div className={stl.logo}><img src="https://logowiki.net/uploads/logo/s/square.svg" alt="" /></div>
      <Clock />
      <Toggle />
    </header>
  )
};

export default Header;