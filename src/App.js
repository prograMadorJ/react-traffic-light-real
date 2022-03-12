import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    background: '#137fc4d1',
  };

  return (
    <div style={styles}>
      <TrafficLight />
    </div>
  );
}

export function TrafficLight() {
  const [activeLight, setActiveLight] = useState();
  const [counter, setCounter] = useState(0);

  useEffect(handleTimer, [counter]);

  function handleTimer() {
    const timer = setTimeout(() => {
      setCounter(counter + 1);
    }, 2000);

    switch (counter) {
      case 1:
        setActiveLight('light-green');
        break;
      case 6:
        setActiveLight('light-yellow');
        break;
      case 8:
        setActiveLight('light-red');
        break;
      case 15:
        setCounter(0);
        break;
    }

    return () => {
      clearTimeout(timer);
    };
  }

  const styles = {
    width: '600px',
    height: '500px',
    background:
      'url("https://raw.githubusercontent.com/prograMadorJ/react-traffic-light-real/master/public/traffic-light-background.png")',
    backgroundSize: 'cover',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '1',
    margin: '0 auto',
  };

  return (
    <div style={styles}>
      <TrafficLightContainer>
        <Light id="light-red" color="red" />
        <Light id="light-yellow" color="yellow" />
        <Light id="light-green" color="green" />
      </TrafficLightContainer>
    </div>
  );

  function Light({ id, color }) {
    const img = `https://raw.githubusercontent.com/prograMadorJ/react-traffic-light-real/master/public/traffic-light-${color}-background.png`;

    const styles = {
      visibility: activeLight === id ? 'visible' : 'hidden',
      background: `url("${img}")`,
      backgroundSize: 'cover',
      width: '600px',
      height: '500px',
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: '1',
    };

    return <div style={styles}></div>;
  }

  function TrafficLightContainer({ children }) {
    const styles = {
      margin: '0 auto',
    };

    return <div style={styles}>{children}</div>;
  }
}
