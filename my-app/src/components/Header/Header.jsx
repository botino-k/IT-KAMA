import stl from './Header.module.css'

const Header = () => {
  return (
    <header>
      <div className={stl.logo}><img src="https://logowiki.net/uploads/logo/s/square.svg" alt="" /></div>
    </header>
  )
};

export default Header;