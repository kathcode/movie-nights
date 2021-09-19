import ExternalLink from '../../assets/images/external-link.svg';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="p-4">
      <div className="container">
        <div className="footer-logo">
          <img
            className="img-fluid me-5"
            src="https://evolvingweb.ca/themes/custom/ewsite8/logo.svg"
            alt="Logo"
            width="200"
          />
          <a className="footer-link ms-5" href="https://evolvingweb.ca/">
            Back to evolvingweb.ca
            <img
              src={ExternalLink}
              alt="Logo"
              className="ms-2"
            />
          </a>
        </div>
        <div className="copy-right">©2021  |   All right reserved</div>
      </div>
    </footer>
  )
}

export default Footer