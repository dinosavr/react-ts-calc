import * as React from 'react';
import './App.scss';
import Button from './components/buttons/Button/Button';
import CalcBody from './components/CalcBody/CalcBody';

function App() {
  return (
      <main className="App">
       <CalcBody></CalcBody>
      </main>
  );
}

export default App;