import React from 'react';
import './App.scss';
import { AboutMeSection, MainSection, SkillsSection } from './components';

const OBSERVER_OPTIONS = {
  rootMargin: '0px 0px -150px',
  threshold: 0.15,
};

const App = () => {
  const aboutMeSectionRef = React.useRef(null);
  const skillsSectionRef = React.useRef(null);

  React.useEffect(() => {
    const observerTargets = [aboutMeSectionRef, skillsSectionRef];

    const animateOnScroll = (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('animate');
        observer.unobserve(entry.target)
      })
    };
    const observer = new IntersectionObserver(animateOnScroll, OBSERVER_OPTIONS);
    observerTargets.forEach((target) => observer.observe(target.current))

    return () => observer.disconnect();
  }, [])

  return (
    <div id="app">
      <MainSection ref={{ aboutMeSectionRef, skillsSectionRef }} />
      <AboutMeSection ref={aboutMeSectionRef} />
      <SkillsSection ref={skillsSectionRef} />
    </div>
  );
};

export default App;
