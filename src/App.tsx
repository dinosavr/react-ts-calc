import * as React from 'react';
import { useState } from 'react';
import './App.scss';
import CalcBody from './components/CalcBody/CalcBody';
import { ThemeContext } from './context/context';




function App() {
  const [expr, setExpr] = useState<string>('(56 - 26) * 3');
  const [answer, setAnswer] = useState<string>('90');
  return (
    <ThemeContext.Provider value={{
      expr,
      setExpr,
      answer,
      setAnswer,
    }}>
      <main className="App">
        <CalcBody></CalcBody>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
