import { useEffect, useState } from 'react';
import './index.css';
import Message from './Message';
import Prize from './Prize';

function App() {
  const [goodCount, setGoodCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  return (
    <div className="App">
      <h1>React カウンター</h1>
      <p>good👍: {goodCount}, bad👎: {badCount}</p>
      <button onClick={() => setGoodCount(goodCount + 1)} >
        good👍
      </button>
      <button onClick={() => setBadCount(badCount + 1)}>
        bad👎
      </button>
      <Prize goodCount={goodCount} badCount={badCount}/>
      
    </div>
  );
}

export default App;