import React from 'react';
import FooterSection from './FooterSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3Alt, faJsSquare, faGit } from '@fortawesome/free-brands-svg-icons';
import { Col, Container, Row } from 'react-grid-system';
import cypressLogo from '../assets/cypress-io-logo.png';
import nextJsLogo from '../assets/nextjs-logo.png';
import reduxLogo from '../assets/redux-logo.png';
import '../App.scss';

const LEFT_COLUMN_ICONS = [
  { icon: <FontAwesomeIcon icon={faReact} />, label: 'React' },
  { icon: <FontAwesomeIcon icon={faJsSquare} />, label: 'JavaScript'},
  { icon: <img alt='next.js logo' src={nextJsLogo} />, label: 'Next.js' },
  { icon: <img alt='redux logo' src={reduxLogo} style={{ width: '45px' }} />, label: 'Redux'}
]

const RIGHT_COLUMN_ICONS = [
  { icon: <FontAwesomeIcon icon={faHtml5} />, label: 'HTML'},
  { icon: <FontAwesomeIcon icon={faCss3Alt} />, label: 'CSS'},
  { icon: <FontAwesomeIcon icon={faGit} />, label: 'Git'},
  { icon: <img alt='cypress.io logo' src={cypressLogo} />, label: 'Cypress.io'},
]

const SkillsSection = React.forwardRef((props, ref) => {
  return (
    <div className='skills-section' ref={ref}>
      <div className='triangle-down' />

      <h1>Skills</h1>

      <Container className='icons-container'>
        <Row>
          <Col xs={6}>
            <Container>
              <Row>
                {LEFT_COLUMN_ICONS.map(({ icon, label }, i) => (
                  <Col xs={12} lg={6} className='icon-col' key={i}>
                    <div className='white-border'>
                      {icon}
                    </div>
                    <p>{label}</p>
                  </Col>
                ))}
              </Row>
            </Container>
          </Col>

          <Col xs={6}>
            <Container>
              <Row>
              {RIGHT_COLUMN_ICONS.map(({ icon, label }, i) => (
                  <Col xs={12} lg={6} className='icon-col' key={i}>
                    <div className='white-border'>
                      {icon}
                    </div>
                    <p>{label}</p>
                  </Col>
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      <FooterSection />
    </div>
  )
});

export default SkillsSection;