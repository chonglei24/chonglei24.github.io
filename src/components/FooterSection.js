import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faHome } from '@fortawesome/free-solid-svg-icons'
import '../App.scss';

const FooterSection = () => {
  const onHomeClick = () => window.scrollTo({ left: 0, top: 0, behavior: 'smooth'});

  return (
    <div className='footer-section'>
      <FontAwesomeIcon className='home-icon' icon={faHome} onClick={onHomeClick} />
      <p>copyright <FontAwesomeIcon icon={faCopyright} /> chonglei24.github.io 2021</p>
    </div>
  )
};

export default FooterSection;