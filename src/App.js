import './App.css';
import { useState } from 'react';
import Form from './Form';
import Square from './Square';
import chroma from 'chroma-js';


function App() {
  const [color, setColor] = useState('')
  const [isDark, setIsDark] = useState(true)

  const handleTxt = (element) => {
    isDark ? setIsDark(false) : setIsDark(true)
  }

  let hexCode
  try {
    hexCode = chroma(color).hex()
  } catch (err) {
    console.log("Color name does not found")
  }


  return (
    <div className="App">
      <Square 
        isDark={isDark}
        color={color}
        hexCode={hexCode}
      />
      <Form
        color={color}
        setColor={setColor}
        handleTxt={handleTxt}
      />
    </div>
  );
}

export default App;
