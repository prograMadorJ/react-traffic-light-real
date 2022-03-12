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

  return (
    <TrafficLightContainer>
      <Light id="light-red" color="red" />
      <Light id="light-yellow" color="orange" />
      <Light id="light-green" color="green" />
    </TrafficLightContainer>
  );

  function Light({ id, color }) {
    color = activeLight === id ? color : 'transparent';

    const styles = {
      color,
      background: color,
      boxShadow: '0 0 18px 2px ' + color + ', 0 5px 10px 0 inset #ffffff55',
      height: '30px',
      borderRadius: '30px',
      margin: '6px 2px',
    };

    return <div style={styles}></div>;
  }

  function TrafficLightContainer({ children }) {
    const styles = {
      background: '#333',
      padding: '3px',
      width: '34px',
      maxHeight: '112px',
      borderRadius: '6px',
    };

    return <div style={styles}>{children}</div>;
  }
}
