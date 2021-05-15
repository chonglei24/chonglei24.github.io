import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useWindowSize } from '../hooks';
import '../App.scss';

const MainSection = React.forwardRef((props, ref) => {
  const { width } = useWindowSize();

  const onProfileClick = () => ref.aboutMeSectionRef.current.scrollIntoView({
    behavior: 'smooth',
    block: width >= 576 ? 'end' : 'start',
  });

  const onSkillsClick = () => ref.skillsSectionRef.current.scrollIntoView({
    behavior: 'smooth',
    block: width >= 576 ? 'end' : 'start',
  });

  return (
    <div className='main-section'>
      <div className='content'>
        <h1>Chong Lei</h1>
        <h3>
          Front-end Software Engineer
          <br />
          Irvine, CA
        </h3>

        <div>
          <a href='https://www.linkedin.com/in/chongklei/' rel='noreferrer' target='_blank'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href='https://github.com/chonglei24' rel='noreferrer' target='_blank'>
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </div>

        <div>
          <button onClick={onProfileClick}>Profile</button>
          <button onClick={onSkillsClick}>Skills</button>
        </div>
      </div>

      <div className='triangle-down' />
    </div>
  )
});

export default MainSection;