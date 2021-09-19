import Logo from '../../assets/images/logo.svg';
import './header.scss';

const Header = () => {
  return (
    <header className="d-flex align-items-center pt-4 pb-4">
      <img src={Logo} alt="Logo" className="pe-3" />
      <p className="m-0">Movie Nights</p>
    </header>
  )
}

export default Header