import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAngleDoubleDown  } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  return (
    <div id="app">
      <div className='main-section'>
        <div>
          <h1>Chong Lei</h1>
          <h3>
            Front-end Software Engineer
            <br />
            Irvine, CA
          </h3>

          <a href='https://www.linkedin.com/in/chongklei/' target='_blank'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href='https://github.com/chonglei24' target='_blank'>
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>

          <br />
          <FontAwesomeIcon className='arrow-down' icon={faAngleDoubleDown} />
        </div>
      </div>
    </div>
  );
}

export default App;
