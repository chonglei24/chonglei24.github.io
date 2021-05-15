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
  <FontAwesomeIcon icon={faReact} />,
  <FontAwesomeIcon icon={faJsSquare} />,
  <img alt='next.js logo' src={nextJsLogo} />,
  <img alt='redux logo' src={reduxLogo} style={{ width: '45px' }} />
]

const RIGHT_COLUMN_ICONS = [
  <FontAwesomeIcon icon={faHtml5} />,
  <FontAwesomeIcon icon={faCss3Alt} />,
  <FontAwesomeIcon icon={faGit} />,
  <img alt='cypress.io logo' src={cypressLogo} />,
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
                {LEFT_COLUMN_ICONS.map((icon, i) => (
                  <Col xs={12} lg={6} className='icon-col' key={i}>
                    <div className='white-border'>
                      {icon}
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </Col>

          <Col xs={6}>
            <Container>
              <Row>
              {RIGHT_COLUMN_ICONS.map((icon, i) => (
                  <Col xs={12} lg={6} className='icon-col' key={i}>
                    <div className='white-border'>
                      {icon}
                    </div>
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