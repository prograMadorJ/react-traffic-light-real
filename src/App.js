import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#00cbffa1',
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
        setActiveLight('light-red');
        break;
      case 4:
        setActiveLight('light-yellow');
        break;
      case 5:
        setActiveLight('light-green');
        break;
      case 9:
        setCounter(0);
        break;
    }

    return () => {
      clearTimeout(timer);
    };
  }

  const styles = {
    width: '100vw',
    height: '100vh',
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
    const show = activeLight === id ? 'block' : 'none';

    const img = `https://raw.githubusercontent.com/prograMadorJ/react-traffic-light-real/master/public/traffic-light-${color}-background.png`;

    const styles = {
      display: show,
      background: `url("${img}")`,
      width: '100vw',
      height: '100vh',
      positon: 'relative',
      zIndex: '1',
    };

    return <div style={styles}></div>;
  }

  function TrafficLightContainer({ children }) {
    const styles = {
      width: '100vw',
      height: '100vh',
    };

    return <div style={styles}>{children}</div>;
  }
}
