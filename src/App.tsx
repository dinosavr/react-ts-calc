import * as React from 'react';
import { useState } from 'react';
import './App.scss';
import CalcBody from './components/CalcBody/CalcBody';
import { AppContext } from './context/context';
import { calc } from './services/calc';
import { INITIAL_EXPR } from './services/data/constants';


function App() {
  const [expr, setExpr] = useState<string>(INITIAL_EXPR);
  const [answer, setAnswer] = useState<string>(calc(INITIAL_EXPR));
  return (
    <AppContext.Provider value={{
      expr,
      setExpr,
      answer,
      setAnswer,
    }}>
      <main className="App">
        <CalcBody></CalcBody>
      </main>
    </AppContext.Provider>
  );
}

export default App;
