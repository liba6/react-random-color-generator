import React, { useState } from 'react';
import ReactDOM from 'react-dom';
//import './App.css';
import style from './styles.css';
import randomHex from 'random-hex';

export default function App() {
  const random = randomHex.generate();
  const [color, setColor] = useState('');
  // const [colorText, setColorText] = useState('');
  return (
    <div className="items">
      <h1> React Random Color Generator</h1>
      <button
        className="btn"
        onClick={() => {
          setColor(random);
        }}
      >
        Generate
      </button>
      <div
        style={{
          backgroundColor: color,
        }}
      >
        <h2 className="outputcolor"> Generated Color:{color}</h2>
      </div>
    </div>
  );
}
