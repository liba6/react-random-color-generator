import React, { useState } from 'react';
import './styles.css';
import randomColor from 'randomcolor';

export default function App() {
  const [color, setColor] = useState('');
  const [colorChosen, setColorChosen] = useState('');
  const [lightChosen, setLightChosen] = useState('');

  return (
    <div className="items">
      <h1> React Random Color Generator</h1>
      <h3>
        <input
          placeholder="What Color?"
          value={colorChosen}
          onChange={(event) => {
            setColorChosen(event.currentTarget.value);
          }}
        />
      </h3>
      <h3>
        <input
          placeholder="Light or Dark?"
          value={lightChosen}
          onChange={(event) => {
            setLightChosen(event.currentTarget.value);
          }}
        />
      </h3>
      <button
        className="btn"
        onClick={() => {
          setColor(
            randomColor({
              luminosity: lightChosen,
              hue: colorChosen,
            }),
          );
        }}
      >
        Generate
      </button>
      <div
        style={{
          backgroundColor: color,
          borderRadius: '6px',
        }}
      >
        <h2 className="outputcolor"> Generated Color:{color}</h2>
      </div>
    </div>
  );
}
