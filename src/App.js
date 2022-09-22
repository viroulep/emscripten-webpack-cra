import React, { useState } from 'react';
import './App.css';
// this just loads stuff to load the wasm
import hello from './wasm/hello';

const action = (wasm, setStuff) => {
  // Try a simple function call
  const add = wasm.myadd(1, 2);
  const vectorOfPoints = new wasm.VectorPoint();
  // Push a couple of points:
  vectorOfPoints.push_back({ x: 1, y: 2 });
  vectorOfPoints.push_back({ x: 4, y: 5 });
  // Accumulate them
  const { x, y } = wasm.accumulatePoints(vectorOfPoints);
  if (x === 5 && y === 7) {
    setStuff({ add, text: "Accumulation worked" });
  } else {
    setStuff({ add, text: "Accumulation did not work" });
  }
};

const Loaded = ({ wasm }) => {
  const [stuff, setStuff] = useState(null);
  return (
    <>
      <button onClick={() => action(wasm, setStuff)}>Click me</button>
      {stuff ? (
        <>
          <div>
            1 + 2 =
            {' '}
            {stuff.add}
          </div>
          <div>{stuff.text}</div>
        </>
      ) : (
        <div>click the button</div>
      )}
    </>
  );
};

const Unloaded = ({ loading, loadWasm }) => {
  return loading ? (
    <div>Loading...</div>
  ) : (
    <button onClick={loadWasm}>Load library</button>
  );
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [wasm, setWasm] = useState(null);
  const loadWasm = async () => {
    setLoading(true);
    hello({
      // This overrides the default path used by the wasm/hello.mjs wrapper
      locateFile: () => require("./wasm/hello.wasm"),
    }).then((wasm) => { setWasm(wasm); setLoading(false); });
  };

  return (
    <div className="App">
      <header className="App-header">
        {wasm ? (
          <Loaded wasm={wasm} />
        ) : (
          <Unloaded loading={loading} loadWasm={loadWasm} />
        )}
      </header>
    </div>
  );
};

export default App;
