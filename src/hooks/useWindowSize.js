import React from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState({
    height: 0,
    width: 0,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize)
  }, []);

  return windowSize;
};