import React from 'react';
import './App.css';
import { TextField } from './components/TextField';

function App() {
  return (
    <div>
      <TextField index={1} boo={true} function={() => { }} text="Hello"
        handleChange={(e) => { }}
      />
    </div>
  );
}

export default App;
